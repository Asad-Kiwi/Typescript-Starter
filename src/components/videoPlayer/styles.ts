import {StyleSheet} from 'react-native';
import {BASESTYLE} from '../../constants/baseStyle';
import {scaleHeight, SCREEN_WIDTH} from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    ...BASESTYLE.flex1,
    ...BASESTYLE.inCenter,
  },
  video: {
    width: SCREEN_WIDTH,
    height: scaleHeight(300),
  },
});
