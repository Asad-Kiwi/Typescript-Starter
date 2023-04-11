import {StyleSheet} from 'react-native';

export const CENTER = 'center',
  ROW = 'row',
  SPACE_BETWEEN = 'space-between',
  ABSOLUTE = 'absolute';

export const BASESTYLE = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  inRow: {
    alignItems: CENTER,
    flexDirection: ROW,
  },
  inCenter: {
    justifyContent: CENTER,
    alignItems: CENTER,
  },
  selfCenter: {
    alignSelf: CENTER,
  },
  spaceBetween: {
    justifyContent: SPACE_BETWEEN,
  },
  absolutePosition: {
    position: ABSOLUTE,
  },
});
