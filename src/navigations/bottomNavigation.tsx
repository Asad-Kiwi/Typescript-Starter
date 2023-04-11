import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {ParamListBase} from '@react-navigation/native';

import {ROUTE_NAME} from '../constants/routeNames';
import {NavigationRoute} from '../types/navigationType';

import HomeTab from '../screens/homeTab';
import ClassTab from '../screens/classTab';
import RescheduleTab from '../screens/rescheduleTab';
import {COLORS} from '../constants/colors';
import {styles} from './styles';
import {IMAGES} from '../constants/images';

const MyTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const IconNames = (label: string) => {
    switch (label) {
      case ROUTE_NAME.HOME_TAB:
        return IMAGES.HOME_TAB;
      case ROUTE_NAME.CLASS_TAB:
        return IMAGES.CLASS_TAB;
      case ROUTE_NAME.RESCHEDULE_TAB:
        return IMAGES.SCHEDULE_TAB;
      default:
        break;
    }
  };

  return (
    <View style={styles.mainContainer}>
      {state.routes.map(
        (route: NavigationRoute<ParamListBase, string>, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.title !== undefined ? options.title : route.name;

          const isFocused = state.index === index;
          const tintColor = isFocused
            ? COLORS.PRIMARY_PINK
            : COLORS.LIGHT_BLACK;

          function onPress() {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }

          const onLongPress: () => void = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              onPress={onPress}
              onLongPress={onLongPress}
              key={index?.toString()}
              style={styles.singleTab}>
              <Image
                source={IconNames(label)}
                style={[{tintColor}, styles.tabIcons]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
};

const BottomTabBar: React.FC<{}> = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name={ROUTE_NAME.HOME_TAB} component={HomeTab} />
      <Tab.Screen name={ROUTE_NAME.CLASS_TAB} component={ClassTab} />
      <Tab.Screen name={ROUTE_NAME.RESCHEDULE_TAB} component={RescheduleTab} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
