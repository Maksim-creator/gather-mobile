import React, {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  View,
  Text,
  ListRenderItem,
  TouchableOpacity,
  TextInput,
  LayoutAnimation,
} from 'react-native';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import {FlatList} from 'react-native-gesture-handler';
import {darkGrey} from '../../assets/colors';
import {Divider} from '../index';
import {renderBottomSheetBackdrop} from '../BottomSheetBackdrop';
import i18n from '../../i18n';
import styles from './styles.ts';
import {useAppDispatch, useAppSelector} from '../../redux/store.ts';
import {
  getAllCountries,
  getCitiesByState,
  getStatesByCountry,
} from '../../redux/countries/thunk.ts';
import ActivityIndicator from '../ActivityIndicator';
import {IState, ICity, ICountry} from '../../redux/countries/entities.ts';

export type Location = ICountry | IState | ICity;

interface Props {
  modalRef: RefObject<BottomSheetModalMethods>;
  onSelect: (location: Location, type: LocationType) => void;
}

export enum LocationType {
  CITY = 'city',
  STATE = 'state',
  COUNTRY = 'country',
}

const t = i18n.withScope('OnboardingScreen');

const CountryPickerModal: React.FC<Props> = ({modalRef, onSelect}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const {
    countries,
    countriesLoading,
    citiesLoading,
    cities,
    statesLoading,
    states,
  } = useAppSelector(state => state.countries);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<ICountry>();
  const [selectedState, setSelectedState] = useState<IState>();
  const [type, setType] = useState<LocationType>(LocationType.COUNTRY);
  const flatListRef = useRef<FlatList>(null);

  const closeModal = useCallback(() => {
    modalRef.current?.dismiss();
  }, [modalRef]);

  const handleSelect = useCallback(
    (location: Location) => {
      setSearch('');
      flatListRef.current?.scrollToIndex({index: 0, animated: true});
      onSelect(location, type);
      if (type === LocationType.COUNTRY) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setSelectedCountry(location as ICountry);
        setType(LocationType.STATE);
      } else if (type === LocationType.STATE) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setSelectedState(location as IState);
        setType(LocationType.CITY);
      } else {
        closeModal();
      }
    },
    [type, onSelect, closeModal],
  );

  const renderItem: ListRenderItem<Location> = useCallback(
    ({item}) => {
      const handleItemSelect = () => handleSelect(item);

      return (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={handleItemSelect}>
          {'emoji' in item ? (
            <View style={styles.itemContent}>
              <Text style={styles.text}>{item.emoji}</Text>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          ) : (
            <Text style={styles.text}>{item.name}</Text>
          )}
        </TouchableOpacity>
      );
    },
    [handleSelect],
  );

  const renderItemSeparator = useCallback(() => <Divider />, []);

  const renderFooter = useCallback(
    () => <View style={{height: insets.bottom}} />,
    [insets.bottom],
  );

  const renderEmptyComponent = useCallback(
    () => (
      <View style={styles.emptyContent}>
        <LottieView
          style={styles.emptyContentImage}
          autoPlay
          source={require('../../assets/animations/emptySearch.json')}
        />
        <Text style={styles.emptyContentTitle}>{t('no_results_found')}</Text>
      </View>
    ),
    [],
  );

  const keyExtractor = useCallback((item: Location) => item.name, []);

  useEffect(() => {
    if (type === LocationType.COUNTRY) {
      dispatch(getAllCountries());
    } else if (type === LocationType.STATE && selectedCountry) {
      dispatch(getStatesByCountry({country: selectedCountry.iso2}));
    } else if (type === LocationType.CITY && selectedCountry && selectedState) {
      dispatch(
        getCitiesByState({
          country: selectedCountry.iso2,
          state: selectedState.iso2,
        }),
      );
    }
  }, [type, selectedCountry, selectedState, dispatch]);

  const handleIndexChange = (index: number) => {
    if (index === -1) {
      setSearch('');
      setType(LocationType.COUNTRY);
      setSelectedCountry(undefined);
      setSelectedState(undefined);
    }
  };

  const handleClearPress = () => {
    flatListRef.current?.scrollToIndex({index: 0, animated: true});
    setSearch('');
  };

  const visibleData = useMemo(() => {
    switch (type) {
      case LocationType.CITY:
        return cities.filter(city =>
          city.name.toLowerCase().includes(search.toLowerCase()),
        );
      case LocationType.COUNTRY:
        return countries.filter(city =>
          city.name.toLowerCase().includes(search.toLowerCase()),
        );
      case LocationType.STATE:
        return states.filter(city =>
          city.name.toLowerCase().includes(search.toLowerCase()),
        );
    }
  }, [search, states, cities, countries, type]);

  // @ts-ignore
  return (
    <BottomSheetModal
      ref={modalRef}
      index={0}
      backdropComponent={renderBottomSheetBackdrop}
      snapPoints={['70%']}
      onChange={handleIndexChange}
      enableHandlePanningGesture={false}
      enablePanDownToClose={false}>
      <BottomSheetView style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="search-outline"
            size={20}
            color={darkGrey}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder={t('search_location_placeholder', {type})}
            placeholderTextColor={darkGrey}
            style={styles.input}
            value={search}
            onChangeText={setSearch}
          />
          {search && (
            <TouchableOpacity
              style={styles.clearInputIcon}
              onPress={handleClearPress}>
              <Icon name="close" size={20} color={darkGrey} />
            </TouchableOpacity>
          )}
        </View>
        {statesLoading || countriesLoading || citiesLoading ? (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="md" />
          </View>
        ) : (
          <FlatList
            ref={flatListRef}
            data={visibleData}
            renderItem={renderItem}
            ItemSeparatorComponent={renderItemSeparator}
            ListFooterComponent={renderFooter}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={renderEmptyComponent}
          />
        )}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default CountryPickerModal;
