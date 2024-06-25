import React, {RefObject, useCallback, useState} from 'react';
import {FlatList, ListRenderItem, Text, TouchableOpacity} from 'react-native';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {renderBottomSheetBackdrop} from '../BottomSheetBackdrop';
import {Locale, LocalesMap} from '../../i18n';
import Divider from '../Divider';
import Button from '../Button';
import styles from './styles.ts';

interface Props {
  modalRef: RefObject<BottomSheetModalMethods>;
}

const ChangeLanguageModal: React.FC<Props> = ({modalRef}) => {
  const {i18n} = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const insets = useSafeAreaInsets();

  const closeModal = useCallback(() => {
    modalRef.current?.dismiss();
  }, [modalRef]);

  const handleSubmit = async () => {
    await i18n.changeLanguage(language);
    closeModal();
  };

  const renderItem: ListRenderItem<Locale> = useCallback(
    ({item}) => {
      const onLanguagePress = () => setLanguage(item.locale);

      return (
        <TouchableOpacity onPress={onLanguagePress} style={styles.languageItem}>
          <Text style={styles.languageItemText}>{item.name}</Text>
          {item.locale === language ? (
            <Icon name="checkmark-outline" size={20} />
          ) : null}
        </TouchableOpacity>
      );
    },
    [language],
  );

  return (
    <BottomSheetModal
      ref={modalRef}
      snapPoints={['40%']}
      backdropComponent={renderBottomSheetBackdrop}
      index={0}>
      <BottomSheetView
        style={[
          {
            paddingBottom: insets.bottom,
          },
          styles.container,
        ]}>
        <FlatList
          data={LocalesMap(i18n.t)}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
        />
        <Button
          text={i18n.t('OnboardingScreen.set_button')}
          onPress={handleSubmit}
          disabled={language === i18n.language}
          style={styles.button}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default ChangeLanguageModal;
