import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {backdrop} from '../../assets/colors.ts';

export const renderBottomSheetBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop
    {...props}
    opacity={0.5}
    enableTouchThrough={false}
    appearsOnIndex={0}
    disappearsOnIndex={-1}
    style={[styles.backdrop, StyleSheet.absoluteFillObject]}
  />
);

const styles = StyleSheet.create({
  backdrop: {backgroundColor: backdrop},
});
