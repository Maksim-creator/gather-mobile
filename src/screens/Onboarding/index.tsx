import React, {useCallback, useRef, useState} from 'react';
import {LayoutAnimation, SafeAreaView, View} from 'react-native';
import {LogoScreenHeader} from '../../components';
import ByStepOverview from '../../components/ByStepOverview';
import {Activities, General, Location} from './components';
import styles from './styles.ts';
import ChangeLanguageModal from '../../components/ChangeLanguageModal';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ICountry, IState, ICity} from '../../redux/countries/entities.ts';

export interface LocationOnboardingData {
  country: ICountry;
  state: IState;
  city: ICity;
}
export interface ActivitiesOnboardingData {
  id: string;
  name: string;
}
export interface GeneralOnboardingData {
  dateOfBirth: string;
  gender: string;
  language: string;
}

interface OnboardingData {
  [OnboardingDataKeys.LOCATION]?: LocationOnboardingData;
  [OnboardingDataKeys.ACTIVITIES]?: ActivitiesOnboardingData[];
  [OnboardingDataKeys.GENERAL]?: GeneralOnboardingData;
}

type OnboardingDataType =
  | LocationOnboardingData
  | ActivitiesOnboardingData[]
  | GeneralOnboardingData;

enum OnboardingDataKeys {
  LOCATION = 'location',
  ACTIVITIES = 'activities',
  GENERAL = 'general',
}

const Onboarding = () => {
  const modalRef = useRef<BottomSheetModal>(null);

  const [onboardingData, setOnboardingData] = useState<OnboardingData>({});
  const [step, setStep] = React.useState(0);
  const insets = useSafeAreaInsets();

  const handleAddOnboardingData = (
    section: keyof OnboardingData,
    data: OnboardingDataType,
  ) => {
    setOnboardingData(prevData => ({
      ...prevData,
      [section]: data,
    }));
  };

  const presentLanguageModal = useCallback(() => {
    modalRef.current?.present();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <LogoScreenHeader />
      </View>
      <View
        style={[styles.content, {paddingBottom: insets.bottom !== 0 ? 0 : 15}]}>
        <ByStepOverview
          step={step}
          steps={[
            {
              title: 'location_step_title',
              description: 'location_step_description',
              content: (
                <Location
                  onSubmit={(data: LocationOnboardingData) => {
                    handleAddOnboardingData(OnboardingDataKeys.LOCATION, data);
                    LayoutAnimation.configureNext(
                      LayoutAnimation.Presets.easeInEaseOut,
                    );
                    setStep(1);
                  }}
                />
              ),
            },
            {
              title: 'activities_step_title',
              description: 'activities_step_description',
              content: (
                <Activities
                  onSubmit={(data: ActivitiesOnboardingData[]) => {
                    handleAddOnboardingData(
                      OnboardingDataKeys.ACTIVITIES,
                      data,
                    );
                    LayoutAnimation.configureNext(
                      LayoutAnimation.Presets.easeInEaseOut,
                    );
                    setStep(2);
                  }}
                />
              ),
            },
            {
              title: 'general_information_step_title',
              content: (
                <General
                  onSubmit={(data: GeneralOnboardingData) => {
                    handleAddOnboardingData(OnboardingDataKeys.GENERAL, data);
                    console.log(onboardingData);
                  }}
                  openModal={presentLanguageModal}
                />
              ),
            },
          ]}
        />
      </View>
      <ChangeLanguageModal modalRef={modalRef} />
    </SafeAreaView>
  );
};

export default Onboarding;
