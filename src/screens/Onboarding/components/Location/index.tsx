import React, {useMemo, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button} from '../../../../components';
import CountryPickerModal, {
  Location as ILocation,
  LocationType,
} from '../../../../components/CountryPickerModal';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {LocationOnboardingData} from '../../index.tsx';
import styles from './styles.ts';
import i18n from '../../../../i18n';
import {black, darkGrey} from '../../../../assets/colors.ts';
import {ICountry, IState, ICity} from '../../../../redux/countries/entities.ts';

const t = i18n.withScope('OnboardingScreen');

const Location = ({
  onSubmit,
}: {
  onSubmit: (data: LocationOnboardingData) => void;
}) => {
  const [selectedCountry, setSelectedCountry] = React.useState<ICountry>();
  const [selectedState, setSelectedState] = React.useState<IState>();
  const [selectedCity, setSelectedCity] = React.useState<ICity>();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
  };

  const handleCountryConfirm = (location: ILocation, type: LocationType) => {
    switch (type) {
      case LocationType.COUNTRY:
        setSelectedCountry(location as ICountry);
        break;
      case LocationType.STATE:
        setSelectedState(location as IState);
        break;
      case LocationType.CITY:
        setSelectedCity(location as ICity);
    }
  };

  const handleLocationConfirm = () => {
    if (selectedState && selectedCity && selectedCountry) {
      onSubmit({
        city: selectedCity,
        country: selectedCountry,
        state: selectedState,
      });
    }
  };

  const locationString = useMemo(() => {
    let location = '';
    if (selectedCountry) {
      location = location + selectedCountry.emoji + ' ' + selectedCountry.name;
    }
    if (selectedState) {
      location = location + ', ' + selectedState.name;
    }
    if (selectedCity) {
      location = location + ', ' + selectedCity.name;
    }

    return location;
  }, [selectedState, selectedCity, selectedCountry]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={handlePresentModal} style={styles.touchable}>
          <Text
            style={{
              fontFamily: 'Inter-Regular',
              color: locationString ? black : darkGrey,
            }}>
            {locationString ? locationString : t('country_placeholder')}
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        text={t('next_button')}
        disabled={!selectedState && !selectedCountry && !selectedCity}
        onPress={handleLocationConfirm}
      />
      <CountryPickerModal
        modalRef={bottomSheetModalRef}
        onSelect={handleCountryConfirm}
      />
    </View>
  );
};

export default Location;
