import React, { Component } from "react";
import stt from "speech-to-text";
import Mic from "./mic.jpg";

export default class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false,
      text: ""
    };

    this.toggle = this.toggle.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  async toggle() {
    await this.setState({ bool: !this.state.bool });
    if (this.state.bool) this.start();
    else this.stop();
  }

  start() {
    this.state.title = prompt("Note title?");
    this.props.newRec(this.state.title);
    const onAnythingSaid = text => this.props.rec(text);
    this.state.listener = new stt(onAnythingSaid);
    this.state.listener.startListening();
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then(stream => {
        this.state.stream = stream;
        this.state.mediaRecorder = new MediaRecorder(stream);

        this.state.mediaRecorder.start();
        console.log(this.state.mediaRecorder.state);
        console.log("recorder started");

        let chunks = [];
        this.state.mediaRecorder.ondataavailable = e => {
          chunks.push(e.data);
        };

        this.state.mediaRecorder.onstop = e => {
          let blob = new Blob(chunks, { type: "audio/mp3" });
          this.props.fb.newNote(blob, this.state.title, this.state.text);
          console.log(blob);
        };
      });
  }

  stop() {
    this.state.listener.stopListening();
    console.log(this.state.text);
    this.state.mediaRecorder.stop();
    this.state.stream.getTracks()[0].stop();
    console.log("recorder stopped");
  }

  render() {
    return (
      <div>
        <button className="record" onClick={this.toggle}>
          <img src={Mic} className="mic" />
        </button>
        {/* make this reactive */}
      </div>
    );
  }
}
