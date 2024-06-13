import React from 'react';
import LottieView from 'lottie-react-native';
import styles from './styles.ts';

interface ActivityIndicatorProps {
  right: number;
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({right}) => {
  return (
    <LottieView
      style={[styles.activityIndicator, {right}]}
      loop
      autoPlay
      source={require('../../assets/animations/activityIndicator.json')}
    />
  );
};

export default ActivityIndicator;
