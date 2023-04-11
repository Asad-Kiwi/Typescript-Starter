import {Dimensions, PixelRatio, Platform} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iphone 6 scale
const ScaleHeight = SCREEN_HEIGHT / 812;
const ScaleWidth = SCREEN_WIDTH / 375;

export const normalizeFont = (size: number) => {
  const newSize = size * ScaleWidth;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const scaleHeight = (height: number) => Math.round(height * ScaleHeight);

export const scaleWidth = (width: number) => Math.round(width * ScaleWidth);
