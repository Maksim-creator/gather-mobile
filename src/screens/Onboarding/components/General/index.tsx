import React, {useCallback, useRef} from 'react';
import {GeneralOnboardingData} from '../../index.tsx';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button} from '../../../../components';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import i18n, {LocalesMap} from '../../../../i18n';
import {useTranslation} from 'react-i18next';
import GenderModal from '../../../../components/GenderModal';
import styles from './styles.ts';
import Icon from 'react-native-vector-icons/Ionicons';
import {black, darkGrey} from '../../../../assets/colors.ts';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useAppSelector} from '../../../../redux/store.ts';

const t = i18n.withScope('OnboardingScreen');

const General = ({
  onSubmit,
  openModal,
}: {
  onSubmit: (data: GeneralOnboardingData) => void;
  openModal: () => void;
}) => {
  const {i18n} = useTranslation();
  const genderModalRef = useRef<BottomSheetModal>(null);
  const {finishOnboardingLoading} = useAppSelector(state => state.auth);

  const [selectedGender, setSelectedGender] = React.useState<
    string | undefined
  >();

  const [isPickerVisible, setIsPickerVisible] = React.useState<boolean>(false);
  const [dateOfBirth, setDateOfBirth] = React.useState<string>();

  const handleDateConfirm = (date: Date) => {
    setDateOfBirth(
      `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
    );
    setIsPickerVisible(false);
  };

  const handleOpenPicker = () => setIsPickerVisible(true);
  const handleClosePicker = () => setIsPickerVisible(false);

  const handleConfirm = () => {
    if (selectedGender && dateOfBirth) {
      onSubmit({
        gender: selectedGender,
        dateOfBirth,
        language: i18n.language,
      });
    }
  };

  const presentGenderModal = useCallback(() => {
    genderModalRef.current?.present();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.text}>
            {t('general_information_step_description')}
          </Text>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={handleOpenPicker}>
              <Text
                style={[
                  styles.text,
                  {
                    color: dateOfBirth ? black : darkGrey,
                  },
                ]}>
                {dateOfBirth
                  ? dateOfBirth.replaceAll('.', '/')
                  : t('date_of_birth_placeholder')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={presentGenderModal}>
              <Text
                style={[
                  styles.text,
                  {
                    color: selectedGender ? black : darkGrey,
                  },
                ]}>
                {selectedGender ? t(selectedGender) : t('gender_placeholder')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>{t('locale_description')}</Text>
          <TouchableOpacity
            onPress={openModal}
            style={styles.languageTouchable}>
            <Text style={styles.text}>
              {LocalesMap(i18n.t).find(lng => lng.locale === i18n.language)
                ?.name || t('language_placeholder')}
            </Text>
            <Icon name="chevron-down-outline" size={24} color={darkGrey} />
          </TouchableOpacity>
        </View>
      </View>
      <Button
        text={t('finish_button_text')}
        disabled={!selectedGender || !dateOfBirth || finishOnboardingLoading}
        onPress={handleConfirm}
        loading={finishOnboardingLoading}
      />
      <GenderModal
        modalRef={genderModalRef}
        onGenderSubmit={setSelectedGender}
      />
      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode="date"
        date={new Date()}
        maximumDate={new Date()}
        onConfirm={handleDateConfirm}
        onCancel={handleClosePicker}
        locale={i18n.language}
      />
    </View>
  );
};

export default General;
