import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import styles from './styles.ts';
import Divider from '../../components/Divider';
import {screenNames} from '../../navigation/screenNames.ts';
import {Formik} from 'formik';
import {LoginPayload} from '../../redux/auth/entities.ts';
import {loginThunk} from '../../redux/auth/thunk.ts';
import {Button, Input} from '../../components';
import {singUpFormSchema} from './utils.ts';
import i18n from '../../i18n';
const t = i18n.withScope('SingUpScreen');
const SignUp = () => {
  const handleFormSubmit = (values: LoginPayload) => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={[]}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.image}
            />
          </View>
          <View style={{paddingBottom: 12}}>
            <View style={styles.header}>
              <Text style={styles.title}>{t('title')}</Text>
              <Text style={styles.subtitle}>
                Enter your email to sign up for this app
              </Text>
            </View>

            <Formik
              initialValues={{
                email: '',
                name: '',
                surname: '',
                password: '',
                confirmPassword: '',
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
                        onBlur={handleBlur('name')}
                        placeholder="Name"
                        value={values.name}
                        onChangeText={handleChange('name')}
                        error={errors.name}
                        touched={touched.name}
                        autoCapitalize="characters"
                      />
                      <Input
                        style={styles.inputSmall}
                        onBlur={handleBlur('surname')}
                        placeholder="Surname"
                        value={values.surname}
                        error={errors.surname}
                        touched={touched.surname}
                        onChangeText={handleChange('surname')}
                        autoCapitalize="characters"
                      />
                    </View>
                    <Input
                      style={styles.input}
                      onBlur={handleBlur('email')}
                      placeholder="email@domain.com"
                      value={values.email}
                      error={errors.email}
                      touched={touched.email}
                      onChangeText={handleChange('email')}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                    <Input
                      style={styles.input}
                      onBlur={handleBlur('password')}
                      placeholder="Password"
                      value={values.password}
                      error={errors.password}
                      touched={touched.password}
                      onChangeText={handleChange('password')}
                      autoCapitalize="none"
                      secureTextEntry
                    />
                    <Input
                      style={styles.input}
                      onBlur={handleBlur('confirmPassword')}
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      error={errors.confirmPassword}
                      touched={touched.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                      autoCapitalize="none"
                      secureTextEntry
                    />
                  </View>
                  <Button text={'Sign Up'} onPress={handleSubmit} />
                </View>
              )}
            </Formik>
            <Text style={styles.footer}>
              <Text style={styles.footerText}>
                By clicking continue, you agree to our{' '}
              </Text>
              Terms of Service <Text style={styles.footerText}>and</Text>{' '}
              Privacy Policy
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
