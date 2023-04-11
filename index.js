/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';

/**
 * Set a message handler function which is called when the app is in the background or terminated.
 */
messaging().setBackgroundMessageHandler(remoteMessage => {
  console.log(
    'Message handled in the background!',
    JSON.stringify(remoteMessage),
  );
});

AppRegistry.registerComponent(appName, () => App);
