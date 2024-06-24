import React, {RefObject, useCallback, useState} from 'react';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {renderBottomSheetBackdrop} from '../BottomSheetBackdrop';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {Genders} from '../../utils/constants.ts';
import {FlatList, ListRenderItem, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Divider from '../Divider';
import Button from '../Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles.ts';
import {useTranslation} from 'react-i18next';

interface Props {
  modalRef: RefObject<BottomSheetModalMethods>;
  onGenderSubmit: (gender: string) => void;
}

const GenderModal: React.FC<Props> = ({modalRef, onGenderSubmit}) => {
  const {i18n} = useTranslation();
  const insets = useSafeAreaInsets();
  const [selectedGender, setSelectedGender] = useState<string | undefined>(
    undefined,
  );

  const closeModal = useCallback(() => {
    modalRef.current?.dismiss();
  }, []);

  const renderItem: ListRenderItem<string> = useCallback(
    ({item}) => {
      const onGenderPress = () => setSelectedGender(item);

      return (
        <TouchableOpacity onPress={onGenderPress} style={styles.genderItem}>
          <Text style={styles.genderItemText}>
            {i18n.t(`OnboardingScreen.${item}`)}
          </Text>
          {item === selectedGender ? (
            <Icon name={'checkmark-outline'} size={20} />
          ) : null}
        </TouchableOpacity>
      );
    },
    [selectedGender],
  );

  const handleGenderSelect = () => {
    if (selectedGender) {
      onGenderSubmit(selectedGender);
      closeModal();
    }
  };

  return (
    <BottomSheetModal
      ref={modalRef}
      snapPoints={['40%']}
      backdropComponent={renderBottomSheetBackdrop}
      index={0}>
      <BottomSheetView
        style={[
          {paddingBottom: insets.bottom ? insets.bottom : 15},
          styles.container,
        ]}>
        <FlatList
          data={Object.values(Genders)}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
        />
        <Button
          text={i18n.t('OnboardingScreen.set_button')}
          style={styles.button}
          disabled={!selectedGender}
          onPress={handleGenderSelect}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default GenderModal;
