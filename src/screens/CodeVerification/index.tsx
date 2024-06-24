import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Linking,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LogoScreenHeader from '../../components/LogoScreenHeader';
import i18n from '../../i18n';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HighlightedText} from 'react-native-highlighted-text';
import {lightGrey} from '../../assets/colors.ts';
import styles from './styles.ts';
import {Button, Input} from '../../components';
import {useAppDispatch, useAppSelector} from '../../redux/store.ts';
import {sendVerificationCode, verifyCode} from '../../redux/auth/thunk.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const t = i18n.withScope('CodeVerificationScreen');

type ParamList = {
  CodeVerification: {
    email: string;
  };
};

const CodeVerification = () => {
  const {params} = useRoute<RouteProp<ParamList, 'CodeVerification'>>();
  const dispatch = useAppDispatch();
  const timerRef = useRef<NodeJS.Timeout>();
  const refs = useRef<TextInput[]>([]);
  const [timer, setTimer] = useState(59);
  const [verificationCode, setVerificationCode] = useState<
    Record<number, string>
  >({});
  const insets = useSafeAreaInsets();

  const {codeVerifying} = useAppSelector(state => state.auth);

  const onCodeCharChange = (text: string, index: number) => {
    setVerificationCode(prev => ({...prev, [index]: text}));
    if (!text) {
      refs.current[index - 1]?.focus();
    } else {
      refs.current[index + 1]?.focus();
    }
  };

  const handleResendCode = () => {
    handleTimerStart();
    setTimer(59);
    dispatch(sendVerificationCode());
  };

  const handleVerifyCode = () => {
    const code = Object.values(verificationCode).join('');
    dispatch(verifyCode({code}));
  };

  const handleOpenMailApp = () => Linking.openURL('https://gmail.app.goo.gl');

  const isTimerVisible = useMemo(() => timer > 0, [timer]);
  const verifyDisabled = useMemo(
    () => Object.values(verificationCode).join('').length < 4,
    [verificationCode],
  );

  const handleTimerStart = () =>
    (timerRef.current = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000));

  useEffect(() => {
    handleTimerStart();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(timerRef.current);
    }
  }, [timer]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <LogoScreenHeader />
      <KeyboardAvoidingView
        style={styles.content}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'android' ? 30 : 10}>
        <View style={styles.container}>
          <View style={styles.content}>
            <HighlightedText
              style={styles.title}
              highlightedTextStyles={[styles.highlightedText]}>
              {t('title', {email: params.email})}
            </HighlightedText>
            <View style={styles.inputs}>
              {new Array(5).fill(null).map((_, i) => (
                <Input
                  key={i}
                  inputRef={el => (refs.current[i] = el)}
                  style={styles.input}
                  keyboardType="numeric"
                  maxLength={1}
                  selectionColor={lightGrey}
                  onChangeText={txt => onCodeCharChange(txt, i)}
                />
              ))}
            </View>
            <View style={styles.sendAgainContainer}>
              <Text style={styles.sendAgainTitle}>{t('send_again_title')}</Text>
              <TouchableOpacity
                disabled={isTimerVisible}
                onPress={handleResendCode}>
                <Text
                  style={
                    isTimerVisible
                      ? styles.sendAgainDisabledText
                      : styles.sendAgainText
                  }>
                  {t('send_again_button')}
                </Text>
              </TouchableOpacity>
              {isTimerVisible ? (
                <Text style={styles.timer}>
                  (0:{timer < 10 ? `0${timer}` : timer})
                </Text>
              ) : null}
            </View>
          </View>
          <View
            style={[
              styles.bottomButtons,
              {paddingBottom: insets.bottom !== 0 ? 0 : 15},
            ]}>
            <Button
              onPress={handleOpenMailApp}
              text={t('open_mail_button')}
              kind="outline"
              style={styles.bottomButton}
            />
            <Button
              text={'Verify'}
              disabled={verifyDisabled || codeVerifying}
              loading={codeVerifying}
              onPress={handleVerifyCode}
              style={styles.bottomButton}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CodeVerification;
