const functions = require('firebase-functions');
const speech = require('@google-cloud/speech');
const gcs = require('@google-cloud/storage');
const path = require('path');
const os = require('os');
const fs = require('fs');

exports.textify = functions.storage.object().onFinalize(async(aud) => {
  let name = aud.name.split('/')[1];
  console.log(name);

  const bucket = gcs.bucket("summa-7f5a4.appspot.com");
  const filePath = path.join(os.tmpdir(), name);
  console.log(filePath);
  await bucket.file('b1mqietNcNSTsqCGOoXaJFVh0K13/1540093618130.wav').download({
    destination: filePath
  });
  console.log("downloaded!");

  const client = new speech.SpeechClient();

  const file = fs.readFileSync(filePath);
  const audioBytes = file.toString('base64');
  console.log(audioBytes);

  const request = {
    audio: {
      content: audioBytes
    },
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'en-US',
    }
  };

  client
    .recognize(request)
    .then(data => {
      const response = data[0];
      const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
      console.log(`Transcription: ${transcription}`);
    })
});