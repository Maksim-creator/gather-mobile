import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles.ts';
import i18n from '../../i18n';
import {Formik} from 'formik';
import {loginFormSchema} from './utils.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../../redux/store.ts';
import {loginThunk} from '../../redux/auth/thunk.ts';
import {LoginPayload} from '../../redux/auth/entities.ts';
import {Button, Divider, Input} from '../../components';
import {useNavigation} from '@react-navigation/native';
import screenNames from '../../navigation/screenNames.ts';
import {RootStackParamList} from '../../navigation/enitites.ts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const t = i18n.withScope('LoginScreen');

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {loginLoading} = useAppSelector(state => state.auth);

  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();

  useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      useNativeDriver: true,
      easing: Easing.ease,
      duration: 1000,
    }).start();
  }, [animatedOpacity]);

  const handleFormSubmit = (values: LoginPayload) => {
    Keyboard.dismiss();
    navigation.push(screenNames.CODE_VERIFICATION, {email: values.email});
    // dispatch(loginThunk(values));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          keyboardVerticalOffset={-70}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.container}>
            <Animated.View
              style={[styles.imageContainer, {opacity: animatedOpacity}]}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.image}
              />
            </Animated.View>
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={handleFormSubmit}
              validationSchema={loginFormSchema}>
              {({
                values,
                handleSubmit,
                handleBlur,
                handleChange,
                errors,
                touched,
              }) => (
                <View>
                  <View style={styles.header}>
                    <Text style={styles.title}>{t('title')}</Text>
                    <Text style={styles.subtitle}>{t('subtitle')}</Text>
                  </View>
                  <View style={styles.inputsContainer}>
                    <Input
                      placeholder={t('email_placeholder')}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      error={errors.email}
                      touched={touched.email}
                    />
                    <Input
                      placeholder={t('password_placeholder')}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      secureTextEntry
                      error={errors.password}
                      touched={touched.password}
                    />
                  </View>
                  <View style={styles.buttonsContainer}>
                    <Button
                      text={t('login_button')}
                      onPress={handleSubmit}
                      loading={loginLoading}
                    />
                    <View style={styles.orTextContainer}>
                      <Divider width="45%" />
                      <Text style={styles.orText}>{t('or_text')}</Text>
                      <Divider width="45%" />
                    </View>
                    <Button kind="outline" text={t('create_button')} />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Text
        style={[
          styles.footerHighlightedText,
          {paddingBottom: insets.bottom ? 0 : 15},
        ]}>
        {t('footer_text_1')}{' '}
        <Text style={styles.footer}>{t('terms_of_service')} </Text>
        {t('footer_text_2')}
        <Text style={styles.footer}> {t('privacy_policy')}</Text>
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
