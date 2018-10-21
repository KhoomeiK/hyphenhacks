const functions = require('firebase-functions');
const admin = require('firebase-admin');
const request = require('request');

admin.initializeApp(functions.config().firebase);

exports.summarize = functions.firestore.document('users/{user}/notes/{note}')
  .onCreate((snap, context) => {
    let data = snap.data();
    console.log(context.params.user);
    console.log(context.params.note);
    console.log(data);
    console.log(data.text);

    let sum;
    request.post({
      url: 'https://api.deepai.org/api/summarization',
      headers: {
        'Api-Key': '427f2861-e754-4423-814a-273f1aec55d0',
        'content-type': 'text/plain'
      },
      formData: {
        'text': data.text,
      }
    }, function (err, httpResponse, body) {
      if (err) {
        console.error('request failed:', err);
        console.log(httpResponse);
        return 0;
      }
      console.log(err);
      console.log(httpResponse);
      console.log(body);

      var response = JSON.parse(body);
      sum = response.output;
      console.log(sum);
      admin.firestore().collection("users").doc(context.params.user).collection('notes').doc(context.params.note).update({
        sum
      });
    });

    // request.post({
    //   url: 'https://api.deepai.org/api/text-tagging',
    //   headers: {
    //     'Api-Key': '427f2861-e754-4423-814a-273f1aec55d0',
    //     'content-type': 'text/plain'
    //   },
    //   formData: {
    //     'text': data.text,
    //   }
    // }, function (err, httpResponse, body) {
    //   if (err) {
    //     console.error('request failed:', err);
    //     console.log(httpResponse);
    //     return 0;
    //   }
    //   console.log(err);
    //   console.log(httpResponse);
    //   console.log(body);

    //   var response = JSON.parse(body);
    //   sum = response.output;
    //   console.log(sum);
    //   admin.firestore().collection("users").doc(context.params.user).collection('notes').doc(context.params.note).update({
    //     keywords
    //   });
    // });
    return null;
  });