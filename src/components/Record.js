import React, { Component } from 'react'
import { runInThisContext } from 'vm';

export default class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
      this.state.stream = stream;
      this.state.mediaRecorder = new MediaRecorder(stream);

      this.state.mediaRecorder.start();
      console.log(this.state.mediaRecorder.state);
      console.log("recorder started");

      let chunks = [];
      this.state.mediaRecorder.ondataavailable = e => {
        chunks.push(e.data);
      }

      this.state.mediaRecorder.onstop = e => {
        let title = prompt("Note title?");

        let blob = new Blob(chunks, { 'type': 'audio/wav; codecs=opus' });
        this.props.fb.newNote(blob, title);
        console.log(blob);
      }
    });
  }

  stop() {
    this.state.mediaRecorder.stop();
    this.state.stream.getTracks()[0].stop();
    console.log(this.state.mediaRecorder.state);
    console.log("recorder stopped");
  }

  render() {
    return (
      <div>
        <button onClick={this.props.fb.signin}> signin </button>
        <button onClick={this.start} > start </button>
        <button onClick={this.stop} > stop </button>
      </div>
    )
  }
}
