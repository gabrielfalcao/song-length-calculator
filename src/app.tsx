import { useState } from "react";
//import { invoke } from "@tauri-apps/api/core";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function App() {
  const [bpm, setBpm] = useState(128);
  const [beatsPerBar, setBeatsPerBar] = useState(4);
  const [songLengthInMinutes, setSongLengthInMinutes] = useState(5);
  const [songLengthInBars, setSongLengthInBars] = useState(160);
  const [songLengthInSeconds, setSongLengthInSeconds] = useState(300);

  function calculate_length_in_bars(
    song_length_in_minutes: number,
    bpm: number,
    beats_per_bar: number,
  ): number {
    let total_beats = song_length_in_minutes * bpm;
    let result = total_beats / beats_per_bar;
    return result;
  }

  function calculate_bars_to_length(
    bars: number,
    bpm: number,
    beats_per_bar: number,
  ): number {
    let total_beats = bars * beats_per_bar;
    let result = total_beats / bpm;

    return result;
  }

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <center>
            <h1>Song length Calculator</h1>
          </center>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-bpm">BPM</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="128"
                value={bpm}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (typeof value == "number") {
                    setBpm(value);
                  }
                }}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-beats-per-bar">
                BEATS PER BAR
              </InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="4"
                value={beatsPerBar}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (typeof value == "number") {
                    setBeatsPerBar(value);
                  }
                }}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-bars">BARS</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="160"
                value={songLengthInBars}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (typeof value == "number") {
                    setSongLengthInBars(value);
                  }
                }}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-song-length">
                SONG LENGTH IN MINUTES
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="5"
                value={songLengthInMinutes}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (typeof value == "number") {
                    setSongLengthInMinutes(value);
                  }
                }}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-song-length">
                SONG LENGTH IN SECONDS
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="300"
                value={songLengthInSeconds}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (typeof value == "number") {
                    setSongLengthInSeconds(value);
                  }
                }}
              />
            </InputGroup>
            <Row>
              <Col>
                <Button
                  id="calculate-minutes"
                  variant="success"
                  onClick={(e) => {
                    e.preventDefault();
                    const minutes = calculate_bars_to_length(
                      songLengthInBars,
                      bpm,
                      beatsPerBar,
                    );
                    setSongLengthInMinutes(minutes);
                    setSongLengthInSeconds(minutes * 60);
                  }}
                >
                  Calculate Minutes
                </Button>
              </Col>
              <Col>
                <Button
                  id="calculate-bars"
                  variant="warning"
                  onClick={(e) => {
                    e.preventDefault();
                    setSongLengthInBars(
                      calculate_length_in_bars(
                        songLengthInMinutes,
                        bpm,
                        beatsPerBar,
                      ),
                    );
                  }}
                >
                  Calculate Bars
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
