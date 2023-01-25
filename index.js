const { google } = require('googleapis');
const fcm = google.fcm('v1');
const key = require('./auth/service-auth.json')

//https://firebase.google.com/docs/cloud-messaging/send-message
const projectName = 'my-project';
const topic = "awesome-topic";
const requestNotification = {
  "message": {
    "topic": topic,
    "notification": {
      "body": "Notification body",
      "title": "Notification title"
    },
    "data": {
      "mydata1": "awesome data"
    }
  }
}

async function main() {
  const auth = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/firebase.messaging',
    ],
    null
  )

  // Acquire an auth client, and bind it to all future calls
  google.options({ auth: auth });

  // Do the magic
  //send push notification
  const res = await fcm.projects.messages.send({
    // Required. It contains the Firebase project id (i.e. the unique identifier for your Firebase project), in the format of `projects/{project_id\}`. For legacy support, the numeric project number with no padding is also supported in the format of `projects/{project_number\}`.
    parent: 'projects/'+projectName,

    // Request body metadata
    requestBody: requestNotification
  });

  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
