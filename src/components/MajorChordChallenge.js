import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import MIDISounds from "midi-sounds-react";

const PITCHES = {
    'C': [48, 55, 64],
    'D': [50, 57, 66],
    'F': [48, 57, 65],
    'A♭': [48, 56, 63],
    'B': [47, 54, 63],
    'E': [47, 56, 64],
    'G': [47, 55, 62],
    'B♭': [50, 58, 65],
    'D♭': [49, 56, 65],
};
const INSTRUMENT = 4;


class MajorChordChallenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sequence: [],
          seqIndexPlayed: null,
        };
      }
    
    componentDidMount() {
        this.midiSounds.setMasterVolume(0.4);
	}

    onNoteClick(chordName) {
        // push to sequence 
        let newSequence = this.state.sequence;
        newSequence.push(chordName);
        this.setState(state => ({
            sequence: newSequence,
        }));

        // playChordNow( instrument, pitches, duration)
        // instrument: piano 4
        this.midiSounds.playChordNow(INSTRUMENT, PITCHES[chordName], 0.7);
    }

    renderChord(chordName, onClickOverride=null, seq_index=null) {
        const chordColor = {
            'D': 'green',
            'E': 'purple',
            'C': 'orange',
            'F': 'green',
            'G': 'purple',
            'A♭': 'green',
            'B♭': 'purple',
            'B': 'green',
            'D♭': 'purple'
        }
        const hexColor = {
            'orange': '#f4d26c',
            'green': '#afe790',
            'purple': '#d380dd',
        }[chordColor[chordName]]
        
        let currentlyPlayed = seq_index !== null && seq_index === this.state.seqIndexPlayed;

        return (
            <button
                onClick={onClickOverride !== null ? onClickOverride : this.onNoteClick.bind(this, chordName)}
                id={seq_index}
                className="d3 container"
                style={{
                    backgroundColor: hexColor,
                    borderWidth: 0,
                    borderRadius: 1,
                    marginBottom: 10,
                    width: currentlyPlayed ? '90%' : null,
                    marginLeft: currentlyPlayed ? '5%' : null,
                    height: currentlyPlayed ? '90%' : null,
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

    playSequence() {
        const time = 0;
        const interval = 2000;

        this.state.sequence.forEach((chord, index) => {
            const clock = time + interval * index;
            setTimeout(() => {
                this.setState(state => ({
                    seqIndexPlayed: index,
                  }));
                this.midiSounds.playChordNow(INSTRUMENT, PITCHES[chord], 2);
            }, clock);
        });
        setTimeout(() => {
            this.setState(state => ({
                seqIndexPlayed: null,
              }));
        }, time + interval * this.state.sequence.length);
    }

    removeFromSequence(e) {
        let index = parseInt(e.currentTarget.id);
        let newSequence = [];
        for (var i = 0; i < this.state.sequence.length; i += 1) {
            if (i !== index) {
                newSequence.push(this.state.sequence[i]);
            }
        }
        this.setState(state => ({
            sequence: newSequence
          }));
    }

    renderSequence() {
        let rows = [];
        for (var i = 0; i < this.state.sequence.length/7; i += 1) {
            let row = [];
            for (var j = 0; j < 7; j += 1) {
                let ind = 7*i + j;
                row.push(ind < this.state.sequence.length ? this.state.sequence[ind] : null);
            }
            rows.push(row);
        }

        let renderedRows = rows.map((row, row_index) =>
            <Row key={row_index.toString()}>
                {row.map((chord, col_index) => 
                    <Col style={{padding: 0}} key={col_index.toString()}>
                        {chord !== null ? this.renderChord(chord, e => this.removeFromSequence(e), 7*row_index + col_index) : null}
                    </Col>
                )}
            </Row>
        )
        return (
            <div>
                {this.state.sequence.length > 0 ? <p style={{fontSize: 9}}>(click a note in the sequence to remove)</p> : null}
                {renderedRows}
            </div>
        )

    }

    render() {
        return (
            <div>
                <Row>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}><div className="text-center">sub-dominant</div></Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}><div className="text-center">dominant</div></Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}></Col>
                </Row>
                <Row>
                    <Col style={{padding: 0}}><div className="text-center">tonic</div></Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}>{this.renderChord("D")}</Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}>{this.renderChord("E")}</Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}><div className="text-center">tonic</div></Col>
                </Row>
                <Row>
                    <Col style={{padding: 0}}>{this.renderChord("C")}</Col>
                    <Col style={{padding: 0}}><div className="text-center">⟶</div></Col>
                    <Col style={{padding: 0}}>{this.renderChord("F")}</Col>
                    <Col style={{padding: 0}}><div className="text-center">⟶</div></Col>
                    <Col style={{padding: 0}}>{this.renderChord("G")}</Col>
                    <Col style={{padding: 0}}><div className="text-center">⟶</div></Col>
                    <Col style={{padding: 0}}>{this.renderChord("C")}</Col>
                </Row>
                <Row>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}>{this.renderChord("A♭")}</Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}>{this.renderChord("B♭")}</Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}></Col>
                </Row>
                <Row>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}>{this.renderChord("B")}</Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}>{this.renderChord("D♭")}</Col>
                    <Col style={{padding: 0}}></Col>
                    <Col style={{padding: 0}}></Col>
                </Row>
                {/* Hide from page */}
                <div style={{position: 'absolute', left: -1000}}>
                    <MIDISounds
                        ref={ref => (this.midiSounds = ref)}
                        appElementName="root"
                        instruments={[INSTRUMENT]}
                    />
                </div>
                <h4 style={{marginTop: 30}} className="text-center">
                    <button 
                        onClick={this.playSequence.bind(this)}
                        style={{backgroundColor: 'white', borderRadius: 2, borderWidth: 2}}
                    >
                        Play your sequence
                    </button>
                </h4>
                {this.renderSequence()}
            </div>
    )}
}

export default MajorChordChallenge;
