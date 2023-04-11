import React from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  GOOGLE_IOS_CLIENT_ID,
  GOOGLE_WEB_CLIENT_ID,
} from '../../constants/environment';

const useGoogleSignIn = () => {
  const handleGoogleSignIn: () => Promise<void> = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log(JSON.stringify(userInfo), 'getting user info');
    } catch (error: any) {
      if (error?.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow');
      } else if (error?.code === statusCodes.IN_PROGRESS) {
        console.log('operation (e.g. sign in) is in progress already');
      } else if (error?.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated');
      } else {
        console.log('some other error happened');
      }
    }
  };

  const loginWithGoogle: () => void = React.useCallback(() => {
    handleGoogleSignIn();
  }, []);

  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
    });
  }, []);

  return {loginWithGoogle};
};

export default useGoogleSignIn;
