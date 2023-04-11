import {View} from 'react-native';
import React from 'react';
import {BASESTYLE} from '../constants/baseStyle';
import {ROUTE_NAME} from '../constants/routeNames';

interface IUserAppState {
  setInitialRouteName: Function;
}

const UserAppState = (props: React.PropsWithChildren<IUserAppState>) => {
  React.useEffect(() => {
    // check user app state from localstore and navigate accordingly.
    props.setInitialRouteName(ROUTE_NAME.BOTTOM_TAB);
    // hide splash screen
  }, [props]);

  return <View style={BASESTYLE.flex1}>{props.children}</View>;
};

export default UserAppState;
