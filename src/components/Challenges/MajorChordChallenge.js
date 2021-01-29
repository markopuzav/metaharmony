import React, { Component } from "react";
import Image from "react-bootstrap/Image";
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
const CHORD_COLOR = {
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
const INSTRUMENT = 4;


class MajorChordChallenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sequence: ['C', 'F', 'G', 'C'],
          displayedChord: null,
          seqIndexPlayed: null,
        };
      }
    
    componentDidMount() {
        this.midiSounds.setMasterVolume(0.4);
	}

    onChordClick(chordName) {
        // push to sequence 
        let newSequence = this.state.sequence;
        if (CHORD_COLOR[chordName] === 'green') {
            newSequence[1] = chordName;
        }
        else if (CHORD_COLOR[chordName] === 'purple') {
            newSequence[2] = chordName;
        }


        this.setState(state => ({
            sequence: newSequence,
            displayedChord: chordName,
        }));

        // playChordNow( instrument, pitches, duration)
        // instrument: piano 4
        this.midiSounds.playChordNow(INSTRUMENT, PITCHES[chordName], 0.7);
    }

    renderChord(chordName, onClickOverride=null, seq_index=null) {
        const hexColor = {
            'orange': '#f4d26c',
            'green': '#afe790',
            'purple': '#d380dd',
        }[CHORD_COLOR[chordName]]
        
        let currentlyPlayed = seq_index !== null && seq_index === this.state.seqIndexPlayed;

        return (
            <button
                onClick={onClickOverride !== null ? onClickOverride : this.onChordClick.bind(this, chordName)}
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
                    displayedChord: chord,
                  }));
                this.midiSounds.playChordNow(INSTRUMENT, PITCHES[chord], 2);
            }, clock);
        });
        setTimeout(() => {
            this.setState(state => ({
                seqIndexPlayed: null,
                displayedChord: null,
              }));
        }, time + interval * this.state.sequence.length);
    }

    renderSequence() {
        return (
            <div>
                <Row key={0}>
                    <Col></Col>
                    {[0,1,2,3].map(i => 
                        <Col style={{padding: 0}} key={i}>
                            {this.renderChord(this.state.sequence[i], () => {}, i)}
                        </Col>
                    )}
                    <Col></Col>
                </Row>
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

                <Row className="justify-content-md-center">
                    <Col className="col-md-8">
                        <Image
                            src={process.env.PUBLIC_URL + "/images/annotations/" + (this.state.displayedChord === null ? "empty" : this.state.displayedChord) + ".png"}
                            alt={this.state.displayedChord}
                            style={{ paddingTop: 30}}
                            fluid
                        />
                    </Col>
                </Row>

                <h4 style={{marginTop: 30}} className="text-center">
                    <button 
                        onClick={this.playSequence.bind(this)}
                        style={{backgroundColor: 'white', borderRadius: 2, borderWidth: 2, marginBottom: 20}}
                    >
                        Play your sequence
                    </button>
                </h4>
                {this.renderSequence()}
            </div>
    )}
}

export default MajorChordChallenge;
