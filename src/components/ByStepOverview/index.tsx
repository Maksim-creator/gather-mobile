import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {black, white} from '../../assets/colors.ts';
import {useTranslation} from 'react-i18next';
import styles from './styles.ts';

interface Props {
  step: number;
  steps: {title: string; description?: string; content: React.ReactNode}[];
}

const ByStepOverview: React.FC<Props> = ({step = 0, steps}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          {t('OnboardingScreen.step_title', {step: step + 1})}
          {t(`OnboardingScreen.${steps[step].title}`)}
        </Text>
        <View style={styles.stepsRow}>
          {new Array(steps.length).fill(null).map((_, i) => (
            <TouchableOpacity
              key={i}
              style={[
                {
                  backgroundColor: i === step ? black : white,
                },
                styles.stepRowItem,
              ]}
            />
          ))}
        </View>
        {steps[step]?.description ? (
          <Text style={styles.description}>
            {t(`OnboardingScreen.${steps[step].description}`)}
          </Text>
        ) : null}
      </View>
      {steps[step]?.content && steps[step].content}
    </View>
  );
};

export default ByStepOverview;
