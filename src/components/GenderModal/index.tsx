import React, {RefObject, useCallback, useState} from 'react';
import {FlatList, ListRenderItem, Text, TouchableOpacity} from 'react-native';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import {renderBottomSheetBackdrop} from '../BottomSheetBackdrop';
import {Genders} from '../../utils/constants.ts';
import Divider from '../Divider';
import Button from '../Button';
import styles from './styles.ts';

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
  }, [modalRef]);

  const renderItem: ListRenderItem<string> = useCallback(
    ({item}) => {
      const onGenderPress = () => setSelectedGender(item);

      return (
        <TouchableOpacity onPress={onGenderPress} style={styles.genderItem}>
          <Text style={styles.genderItemText}>
            {i18n.t(`OnboardingScreen.${item}`)}
          </Text>
          {item === selectedGender ? (
            <Icon name="checkmark-outline" size={20} />
          ) : null}
        </TouchableOpacity>
      );
    },
    [selectedGender, i18n],
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
