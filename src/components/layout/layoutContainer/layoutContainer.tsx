import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {BASESTYLE} from '../../../constants/baseStyle';
import {COLORS} from '../../../constants/colors';

interface ILayoutProps {
  children: React.ReactElement | null;
}

const styles = StyleSheet.create({
  safeAreaView: {
    ...BASESTYLE.flex1,
    backgroundColor: COLORS.WHITE,
  },
});

const LayoutContainer = (props: ILayoutProps) => {
  const {children} = props;
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.safeAreaView}
        edges={['top', 'left', 'right']}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LayoutContainer;
