import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

export const renderBottomSheetBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop
    {...props}
    opacity={0.5}
    enableTouchThrough={false}
    appearsOnIndex={0}
    disappearsOnIndex={-1}
    style={[
      {backgroundColor: 'rgba(0,0,0,0.5)'},
      StyleSheet.absoluteFillObject,
    ]}
  />
);
