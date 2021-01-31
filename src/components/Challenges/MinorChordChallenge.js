import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import MIDISounds from "midi-sounds-react";
import DiagonalTriangleButton from "./DiagonalTriangleButton";
import { HEX_COLOR, CHORD_COLOR, PITCHES, BASE_PITCHES } from "../../constants";
import { Chord, optimize_voicing, voiced_chord } from "../../voicingOptimizer";
import Toggle from 'react-toggle'

const INSTRUMENT = 4;
const INITIAL_C_VOICING = [5, 6, 5];

class MinorChordChallenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sequence: ['C', 'Fm', 'A♭', 'D♭', 'Em', 'C'],
          displayedChord: null,
          seqIndexPlayed: null,
          autovoice: true,
        };
      }
    
    componentDidMount() {
        this.midiSounds.setMasterVolume(0.4);
	}

    onChordClick(chordName) {
        let newSequence = [];

        let greens = this.state.sequence.filter(chord => CHORD_COLOR[chord] === 'green');
        let purples = this.state.sequence.filter(chord => CHORD_COLOR[chord] === 'purple');
        if (CHORD_COLOR[chordName] === 'green' && greens.length < 2) {
            newSequence = ['C'].concat(greens, [chordName], purples, ['C']);
            this.setState(state => ({
                sequence: newSequence,
                displayedChord: chordName,
                autovoice: this.state.autovoice,
            }));
        } 
        if (CHORD_COLOR[chordName] === 'purple' && purples.length < 2) {
            newSequence = ['C'].concat(greens, purples, [chordName], ['C']);
            this.setState(state => ({
                sequence: newSequence,
                displayedChord: chordName,
                autovoice: this.state.autovoice,
            }));
        } 

        // playChordNow( instrument, pitches, duration)
        // instrument: piano 4
        this.midiSounds.playChordNow(INSTRUMENT, PITCHES[chordName], 0.7);
    }

    renderChords(chordNames, half_interval=false, onClickOverride=null, seq_index=null) {        
        let currentlyPlayed = seq_index !== null && seq_index === this.state.seqIndexPlayed;
        if (chordNames.length === 1) {
            let chordName = chordNames[0];

            let computed_width = "100%";
            if (half_interval && currentlyPlayed) computed_width = "40%";
            else if (half_interval) computed_width = "50%";
            else if (currentlyPlayed) computed_width = "90%";

            return (
                <button
                    onClick={onClickOverride !== null ? onClickOverride : this.onChordClick.bind(this, chordName)}
                    id={seq_index}
                    className="d3 container"
                    style={{
                        backgroundColor: HEX_COLOR[CHORD_COLOR[chordName]],
                        borderWidth: 0,
                        borderRadius: 1,
                        marginBottom: 10,
                        width: computed_width,
                        marginLeft: currentlyPlayed ? '5%' : null,
                        marginRight: currentlyPlayed ? '5%' : null,
                        // height: currentlyPlayed ? '90%' : null,
                    }}
                >
                    <div
                        className="text-center"
                        style={{
                            fontSize: 22,
                            fontStyle: 'italic'
                        }}
                    >
                        {chordName}
                    </div>
                </button>
            )
        }
        else if (chordNames.length === 2) {
            let upper = chordNames[0];
            let lower = chordNames[1];
            return (
                <DiagonalTriangleButton 
                    upperLabel={upper} 
                    lowerLabel={lower}
                    upperCallback={this.onChordClick.bind(this, upper)}
                    lowerCallback={this.onChordClick.bind(this, lower)}
                    upperColor={HEX_COLOR[CHORD_COLOR[upper]]}
                    lowerColor={HEX_COLOR[CHORD_COLOR[lower]]}
                />
            );
        }
    }

    playSequence() {
        let computedPitches = {};
        console.log(this.state.sequence);
        if (this.state.autovoice) {
            let [optimal_cost, optimal_voicings] = optimize_voicing(
                this.state.sequence.map(chordName => new Chord(BASE_PITCHES[chordName])), 
                INITIAL_C_VOICING
            );
            computedPitches =
                this.state.sequence.map(
                    (chordName, i) => voiced_chord(new Chord(BASE_PITCHES[chordName]), optimal_voicings[i]).notes
                )
            console.log(computedPitches);
        } else {
            computedPitches =  this.state.sequence.map((chord, i) =>  PITCHES[chord]);
        }


        let time = 0;
        const interval = 2600;
        let greens = this.state.sequence.filter(chord => CHORD_COLOR[chord] === 'green');
        let purples = this.state.sequence.filter(chord => CHORD_COLOR[chord] === 'purple');

        this.state.sequence.forEach((chord, index) => {
            let current_interval = (CHORD_COLOR[chord] === 'green' && greens.length > 1) ||
                (CHORD_COLOR[chord] === 'purple' && purples.length > 1) ? interval / 2 : interval;
            const clock = time;
            time += current_interval;

            setTimeout(() => {
                this.setState(state => ({
                    seqIndexPlayed: index,
                    displayedChord: chord,
                    autovoice: this.state.autovoice,
                  }));
                this.midiSounds.playChordNow(INSTRUMENT, computedPitches[index], 2.5);
            }, clock);
        });
        setTimeout(() => {
            this.setState(state => ({
                seqIndexPlayed: null,
                displayedChord: null,
                autovoice: this.state.autovoice,
              }));
        }, time);
    }

    deleteFromSequence(index) {
        this.setState(state => ({
            sequence: this.state.sequence.filter((chord, i) => i !== index),
            displayedChord: this.state.displayedChord,
            autovoice: this.state.autovoice,
        }));
    }

    toggleAutovoice() {
        this.setState(state => ({
            sequence: this.state.sequence,
            displayedChord: this.state.displayedChord,
            autovoice: !this.state.autovoice,
        }));
    }

    renderSequence() {
        let greens = this.state.sequence.filter(chord => CHORD_COLOR[chord] === 'green');
        let purples = this.state.sequence.filter(chord => CHORD_COLOR[chord] === 'purple');

        return (
            <div>
                <Row key={0}>
                        <Col style={{padding: 0}} key={0}>
                            {this.renderChords(['C'], false, () => {}, 0)}
                        </Col>
                        <Col style={{padding: 0}} key={1}>
                            {greens.map((chord, i) => this.renderChords([chord], greens.length > 1, e => {this.deleteFromSequence(parseInt(e.currentTarget.id))}, 1 + i))}
                        </Col>
                        <Col style={{padding: 0}} key={2}>
                            {purples.map((chord, i) => this.renderChords([chord], purples.length > 1, e => {this.deleteFromSequence(parseInt(e.currentTarget.id))}, 1 + greens.length + i))}
                        </Col>
                        <Col style={{padding: 0}} key={3}>
                            {this.renderChords(['C'], false, () => {}, 1 + greens.length + purples.length)}
                        </Col>
                </Row>
            </div>
        )

    }

    render() {
        return (
            <div>
                <Row style={{height: 80}}>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}><div className="text-center">sub-dominant</div></Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}><div className="text-center">dominant</div></Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}></Col>
                </Row>
                <Row style={{height: 80, marginBottom: 10}}>
                    <Col style={{padding: 0}}><div className="text-center">tonic</div></Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}>{this.renderChords(["Bm", "D"])}</Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}>{this.renderChords(["D♭m", "E"])}</Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}><div className="text-center">tonic</div></Col>
                </Row>
                <Row style={{height: 80, marginBottom: 10}}>
                    <Col style={{padding: 0}}>{this.renderChords(["C"])}</Col>
                    <Col style={{padding: 0}}><div className="text-center">⟶</div></Col>
                    <Col style={{padding: 0}}>{this.renderChords(["Dm", "F"])}</Col>
                    <Col style={{padding: 0}}><div className="text-center">⟶</div></Col>
                    <Col style={{padding: 0}}>{this.renderChords(["Em", "G"])}</Col>
                    <Col style={{padding: 0}}><div className="text-center">⟶</div></Col>
                    <Col style={{padding: 0}}>{this.renderChords(["C"])}</Col>
                </Row>
                <Row style={{height: 80, marginBottom: 10}}>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}>{this.renderChords(["Fm", "A♭"])}</Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}>{this.renderChords(["Gm", "B♭"])}</Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}></Col>
                </Row>
                <Row style={{height: 80, marginBottom: 10}}>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}>{this.renderChords(["A♭m", "B"])}</Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}>{this.renderChords(["B♭m", "D♭"])}</Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}></Col>
                </Row>
                {/* Hide from page */}
                <div>{/* <div style={{position: 'absolute', left: -1000}}> */}
                    <MIDISounds
                        ref={ref => (this.midiSounds = ref)}
                        appElementName="root"
                        instruments={[INSTRUMENT]}
                    />
                </div>

                <h4 style={{marginTop: 30}} className="text-center">
                    <button 
                        onClick={this.playSequence.bind(this)}
                        style={{backgroundColor: 'white', borderRadius: 2, borderWidth: 2, marginBottom: 20}}
                    >
                        Play your sequence
                    </button>
                </h4>
                <div className="text-center" style={{fontSize: 10, color: "#999999"}}>click any green/purple note to delete</div>
                {this.renderSequence()}
                <label>
                    <Toggle id='autovoice' defaultChecked={this.state.autovoice} onChange={() => this.toggleAutovoice()} />
                    <div className="text-center" style={{marginLeft: 5, float: "right"}}>Auto-voicing</div>
                </label>
            </div>
    )}
}

export default MinorChordChallenge;
