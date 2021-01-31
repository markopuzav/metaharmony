export const INTRODUCING_MH =
  "0lpFnLfhqBw";
export const ESSENTIALS_1 =
  "HU2oDq1YLZ8";
export const ESSENTIALS_2 =
  "d1OPOYruaMU";

export const HEX_COLOR = {
    'orange': '#f4d26c',
    'green': '#afe790',
    'purple': '#d380dd',
}
export const CHORD_COLOR = {
  'D': 'green',
  'E': 'purple',
  'C': 'orange',
  'F': 'green',
  'G': 'purple',
  'A♭': 'green',
  'B♭': 'purple',
  'B': 'green',
  'D♭': 'purple',
  'Bm': 'green',
  'Dm': 'green',
  'Fm': 'green',
  'A♭m': 'green',
  'D♭m': 'purple',
  'Em': 'purple',
  'Gm': 'purple',
  'B♭m': 'purple',
}

export const PITCHES = {
  'C': [48, 55, 64],
  'D': [50, 57, 66],
  'F': [48, 57, 65],
  'A♭': [48, 56, 63],
  'B': [47, 54, 63],
  'E': [47, 56, 64],
  'G': [47, 55, 62],
  'B♭': [50, 58, 65],
  'D♭': [49, 56, 65],
  'Bm': [47, 54, 62],
  'Dm': [50, 57, 65],
  'Fm': [48, 56, 65],
  'A♭m': [47, 56, 63],
  'D♭m': [49, 56, 64],
  'Em':  [47, 55, 64],
  'Gm': [46, 55, 62],
  'B♭m': [49, 58, 65],
};

const mod12 = function(notes) {
  return notes.map(n => n % 12);
}

// Base pitches: each note is in the range 0, ..., 11
export const BASE_PITCHES = Object.fromEntries(
  Object.entries(PITCHES).map(([ key, val ]) => [ key, mod12(val) ])
);