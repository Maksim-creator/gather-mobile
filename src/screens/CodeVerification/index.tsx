import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Linking,
  TextInput,
} from 'react-native';
import LogoScreenHeader from '../../components/LogoScreenHeader';
import i18n from '../../i18n';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HighlightedText} from 'react-native-highlighted-text';
import {black, lightGrey, linkBlue} from '../../assets/colors.ts';
import styles from './styles.ts';
import {Button, Input} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const t = i18n.withScope('CodeVerificationScreen');

type ParamList = {
  CodeVerification: {
    email: string;
  };
};

const CodeVerification = () => {
  const {params} = useRoute<RouteProp<ParamList, 'CodeVerification'>>();
  const insets = useSafeAreaInsets();
  const refs = useRef<TextInput[]>([]);
  const [timer, setTimer] = useState(59);
  const [isTimerVisible, setIsTimerVisible] = useState(true);

  const onCodeCharChange = (text: string, index: number) => {
    if (!text) {
      refs.current[index - 1]?.focus();
    } else {
      refs.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setIsTimerVisible(false);
    }
  }, [timer]);

  return (
    <SafeAreaView style={{height: '100%'}}>
      <LogoScreenHeader />
      <View style={styles.container}>
        <View style={{}}>
          <HighlightedText
            style={styles.title}
            highlightedTextStyles={[styles.highlightedText]}>
            {t('title', {email: params.email})}
          </HighlightedText>
        </View>
        <View style={styles.inputs}>
          {new Array(4).fill(null).map((_, i) => (
            <Input
              key={i}
              inputRef={el => (refs.current[i] = el)}
              style={{
                width: 50,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: 25,
                fontFamily: 'Inter-Light',
              }}
              keyboardType={'numeric'}
              maxLength={1}
              selectionColor={black}
              onChangeText={txt => onCodeCharChange(txt, i)}
            />
          ))}
        </View>
        <View style={styles.sendAgainContainer}>
          <Text style={styles.sendAgainTitle}>Didn't get a security code?</Text>
          <TouchableOpacity>
            <Text style={styles.sendAgainText}>Send again!</Text>
          </TouchableOpacity>
          <Text style={styles.timer}>(0:{timer})</Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: insets.bottom,
          flexDirection: 'row',
          // gap: 10,
          justifyContent: 'space-between',
          width: '100%',
          flex: 1,
          paddingHorizontal: 14,
        }}>
        <Button
          onPress={() => Linking.openURL('mailto:support@example.com')}
          text={'Open Gmail'}
          kind={'outline'}
          style={{width: '49%'}}
        />
        <Button text={'Verify'} style={{width: '49%'}} />
      </View>
    </SafeAreaView>
  );
};

export default CodeVerification;
