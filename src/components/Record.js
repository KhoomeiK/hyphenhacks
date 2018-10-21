import React, { Component } from "react";

export default class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false
    };

    this.button = this.button.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  async button() {
    await this.setState({ bool: !this.state.bool });
    if (this.state.bool) this.start();
    else this.stop();
  }

  start() {
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
          let title = prompt("Note title?");

          let blob = new Blob(chunks, { type: "audio/wav; codecs=opus" });
          this.props.fb.newNote(blob, title);
          console.log(blob);
        };
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
        <button className="record" onClick={this.button}>
          {" "}
          record{" "}
        </button>{" "}
        {/* make this reactive */}
      </div>
    );
  }
}
