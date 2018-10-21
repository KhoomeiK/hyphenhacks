const functions = require('firebase-functions');
const speech = require('@google-cloud/speech');

exports.textify = functions.storage.object().onFinalize(aud => {
  console.log(aud);
  let uri = `gs://summa-7f5a4.appspot.com/${aud.name}`;
  console.log(uri);
  const client = new speech.v1.SpeechClient({ // v1
    "projectId": "summa-220103",
    // keyFilename: './summa-343bb4871490.json',
    "apiKey": "AIzaSyCNebig0BELRN6hA6rZXZcHJbrPTNzhCwQ"
  });

  const request = {
    config: {
      languageCode: 'en-US',
      sampleRateHertz: 16000,
      encoding: "FLAC"
    },
    audio: {
      uri: uri
    }
  };

  client
    .recognize(request)
    .then(data => {
      console.log(data);
      const response = data[0];
      console.log(response);
      const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
      console.log(`Transcription: ${transcription}`);
    });
});