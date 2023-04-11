import React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from '../services/navigationService';
import {ROUTE_NAME} from '../constants/routeNames';
import loginScreen from '../screens/login/loginScreen';
import BottomTabBar from './bottomNavigation';

const Stack = createStackNavigator<ParamListBase>();

interface IMainNavigation {
  initialRouteName: string | undefined;
}

const MainNavigation: React.FC<IMainNavigation> = ({initialRouteName}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name={ROUTE_NAME.BOTTOM_TAB} component={BottomTabBar} />
        <Stack.Screen name={ROUTE_NAME.LOGIN_SCREEN} component={loginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
