import React from 'react';
import LottieView from 'lottie-react-native';
import styles from './styles.ts';

type IndicatorSizes = 'sm' | 'md' | 'lg' | 'xl';

interface ActivityIndicatorProps {
  right?: number;
  size?: IndicatorSizes;
}

const sizes: Record<IndicatorSizes, number> = {
  sm: 1,
  md: 1.5,
  lg: 2,
  xl: 2.5,
};

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  right,
  size = 'sm',
}) => {
  return (
    <LottieView
      style={[
        styles.activityIndicator,
        {right, transform: [{scale: sizes[size]}]},
      ]}
      loop
      autoPlay
      source={require('../../assets/animations/activityIndicator.json')}
    />
  );
};

export default ActivityIndicator;
