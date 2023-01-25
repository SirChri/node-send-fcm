# Send FCM messages with Node
A sample node project to send FCM notification using [googleapis](https://github.com/googleapis/google-api-nodejs-client).

## Requirements
1. An existing firebase project, for the example we will use `my-project`
1. A service account that can manage the firebase project. You can achieve that this way:
    1. Go to `https://console.cloud.google.com/iam-admin/serviceaccounts?authuser=0` and login with the google account owner of the firebase project
    1. Select your firebase project and then you should see a single row in the grid with name `firebase-adminsdk`
    1. Click on the actions button of that row and click on `Manage keys` 
    1. Click on `Add key` -> `Create new key` -> `Key type: JSON` -> `Create`
    1. This should automatically download your JWT key (json file).
    1. Place that file inside the `./auth/` folder of this project.
1. Edit row 3 of the `./index.js` file with the correct jwt key file name/path
1. Edit row 6 of the `./index.js` file with your project name

 
## Send FCM messages
1. Edit rows 7 and 8 with as you wish. You can follow the [official FCM documentation](https://firebase.google.com/docs/cloud-messaging/send-message)
1. Run
    ```sh
    npm install
    node index.js
    ```
