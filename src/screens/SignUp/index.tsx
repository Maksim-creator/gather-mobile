import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {Formik} from 'formik';
import {Button, Input} from '../../components';
import {singUpFormSchema} from './utils.ts';
import i18n from '../../i18n';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../../redux/store.ts';
import {signupThunk} from '../../redux/auth/thunk.ts';
import {SignupPayload} from '../../redux/auth/entities.ts';

import styles from './styles.ts';

const t = i18n.withScope('SignUpScreen');

const SignUp = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const {signUpLoading} = useAppSelector(state => state.auth);

  const handleFormSubmit = (values: SignupPayload) => {
    Keyboard.dismiss();
    dispatch(signupThunk(values));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={100}
            style={styles.keyboardAvoidingView}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={styles.image}
              />
            </View>
            <View>
              <View style={styles.header}>
                <Text style={styles.title}>{t('title')}</Text>
                <Text style={styles.subtitle}>{t('subtitle')}</Text>
              </View>
              <Formik
                initialValues={{
                  email: '',
                  firstName: '',
                  lastName: '',
                  password: '',
                  repeatPassword: '',
                }}
                onSubmit={handleFormSubmit}
                validationSchema={singUpFormSchema}>
                {({
                  values,
                  handleSubmit,
                  handleBlur,
                  handleChange,
                  errors,
                  touched,
                }) => (
                  <View>
                    <View style={styles.inputsContainer}>
                      <View style={styles.inputsInfoContainer}>
                        <Input
                          style={styles.inputSmall}
                          onBlur={handleBlur('firstName')}
                          placeholder={t('name_placeholder')}
                          value={values.firstName}
                          onChangeText={handleChange('firstName')}
                          error={errors.firstName}
                          touched={touched.firstName}
                          autoCapitalize="characters"
                        />
                        <Input
                          style={styles.inputSmall}
                          onBlur={handleBlur('lastName')}
                          placeholder={t('surname_placeholder')}
                          value={values.lastName}
                          error={errors.lastName}
                          touched={touched.lastName}
                          onChangeText={handleChange('lastName')}
                          autoCapitalize="characters"
                        />
                      </View>
                      <Input
                        onBlur={handleBlur('email')}
                        placeholder={t('email_placeholder')}
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                        onChangeText={handleChange('email')}
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                      <Input
                        onBlur={handleBlur('password')}
                        placeholder={t('password_placeholder')}
                        value={values.password}
                        error={errors.password}
                        touched={touched.password}
                        onChangeText={handleChange('password')}
                        autoCapitalize="none"
                        secureTextEntry
                      />
                      <Input
                        onBlur={handleBlur('repeatPassword')}
                        placeholder={t('confirm_password_placeholder')}
                        value={values.repeatPassword}
                        error={errors.repeatPassword}
                        touched={touched.repeatPassword}
                        onChangeText={handleChange('repeatPassword')}
                        autoCapitalize="none"
                        secureTextEntry
                      />
                    </View>
                    <Button
                      text={t('sign_up_button')}
                      onPress={handleSubmit}
                      loading={signUpLoading}
                    />
                  </View>
                )}
              </Formik>
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
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
