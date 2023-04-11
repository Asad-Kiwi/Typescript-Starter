/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, Text} from 'react-native';
import {LoginProvider} from '../../contextAPI/loginContext';
import useGoogleSignIn from '../../hooks/libraryHooks/useGoogleSignIn';
import TwilioChatService from '../../services/twilioChatService';
import {styles} from './style';

const LoginComp = () => {
  const {loginWithGoogle} = useGoogleSignIn();
  const twilioChatService = TwilioChatService.getInstance();

  React.useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzAzY2U4NWZjNzFmNDkzYjZmYTA4MGY2OWFiYmFhNDM2LTE2NzIxMzA2OTMiLCJncmFudHMiOnsiaWRlbnRpdHkiOiI2MjI1Yjc5Yzk4NDQwYzZjNGFmNGZlZTAiLCJ2aWRlbyI6eyJyb29tIjoiNjJhYWRkYzRlNTU4MjllNmRhMGJkMzlmIn0sImNoYXQiOnsic2VydmljZV9zaWQiOiJJU2RkYjE0ZTc1NTg0YjQxMjI4NjVmYTVjZTJiNjQ0YTlhIn19LCJpYXQiOjE2NzIxMzA2OTMsImV4cCI6MTY3MjEzNDI5MywiaXNzIjoiU0swM2NlODVmYzcxZjQ5M2I2ZmEwODBmNjlhYmJhYTQzNiIsInN1YiI6IkFDMzQ5OTg3ZWI2ZjZlOTdkYjk4OGJjN2Y2N2I1YjAzODYifQ.vHd-wwMPxowIoG3wvkqXePHoWJLlARqN64ikOoM4xr0';
    twilioChatService.initializeMessenging(token);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text onPress={loginWithGoogle}>LoginScreen</Text>
    </View>
  );
};

const LoginScreen: React.FC = () => {
  return (
    <LoginProvider>
      <LoginComp />
    </LoginProvider>
  );
};

export default React.memo(LoginScreen);
