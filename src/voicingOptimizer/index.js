export class Chord {
    constructor(notes) {
      this.notes = Array.from(notes).sort((a, b) => a - b); // force notes to be sorted
    }
  }
  
// Cartesian product
const cartesian = (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));

const voiced_chord = function(chord, voicing) {
    return new Chord(Array.from(chord.notes).map((note, i) => note + 12*(voicing[i] - 1)));
}

const progression_cost = function(chord1, chord2, p=2) {
    // Calculates the cost of chord2 following chord1 (sum of p-th powers)
    return chord1.notes.map((note, i) => Math.pow(Math.abs(note - chord2.notes[i]), p)).reduce((a, b) => a + b, 0);
}

export const optimize_voicing = function(chords, v, t_1=3, t_m=5) {
    // Returns the optimal cost and optimal voicing for an array of chords
    //    v1 = fixed voicing for the first chord ( the result being chord.notes[i] + 12*(v[i] - 1) )
    //    t_1, t_m lower and upper boundaries for the components of v
    if (chords.length === 0) return [];
    const n = chords[0].notes.length;

    // build a fixed array of all possible voicings
    const single_note_voicings = Array(t_m - t_1 + 1).fill(t_1).map((x, y) => x + y); // [t_1, ..., t_m]
    const all_possible_voicings = cartesian(...Array(n).fill(single_note_voicings));  // [t_1, ..., t_m]^n

    var optimal_cost = Infinity; var optimal_voicing = [];

    const recurse_find_optimal = function(cost_so_far=0, voicing_so_far=[v], chord_index=0) {
        // termination conditions
        if (chord_index === n - 1) { // voiced all chords
            if (cost_so_far < optimal_cost) {
                optimal_cost = cost_so_far;
                optimal_voicing = voicing_so_far;
            }
            return;
        }
        // pruning
        if (cost_so_far >= optimal_cost) {
            return;
        }
        // recursion step (move to the next chord)
        for (var i = 0; i < all_possible_voicings.length; i++) {
            const next_voicing = all_possible_voicings[i];
        
            var next_cost_so_far = cost_so_far + progression_cost(
                voiced_chord(chords[chord_index], voicing_so_far[voicing_so_far.length - 1]),
                voiced_chord(chords[chord_index + 1], next_voicing)
            );
            var next_voicing_so_far = [...voicing_so_far, next_voicing];
            recurse_find_optimal(next_cost_so_far, next_voicing_so_far, chord_index + 1);
        }
    }

    recurse_find_optimal();
    return [optimal_cost, optimal_voicing];
}