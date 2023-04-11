import {StyleSheet} from 'react-native';
import {BASESTYLE} from '../constants/baseStyle';
import {COLORS} from '../constants/colors';
import {scaleHeight, scaleWidth, SCREEN_WIDTH} from '../utils/responsive';

export const styles = StyleSheet.create({
  mainContainer: {
    ...BASESTYLE.inRow,
    ...BASESTYLE.absolutePosition,
    bottom: scaleHeight(49),
    width: SCREEN_WIDTH - scaleWidth(132),
    ...BASESTYLE.selfCenter,
    backgroundColor: COLORS.WHITE,
    paddingVertical: scaleHeight(23),
    borderRadius: scaleWidth(56),
    shadowColor: COLORS.BLACK,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  singleTab: {
    ...BASESTYLE.flex1,
    ...BASESTYLE.inCenter,
  },
  tabIcons: {
    width: scaleWidth(20),
    height: scaleWidth(20),
  },
});
