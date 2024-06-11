import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles.ts';
import Divider from '../../components/Divider';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.image}
            />
          </View>
          <View style={{paddingBottom: 12}}>
            <View style={styles.header}>
              <Text style={styles.title}>Login or Create an Account</Text>
              <Text style={styles.subtitle}>
                Enter your credentials to enter the world of fun!
              </Text>
            </View>

            <View style={styles.inputsContainer}>
              <TextInput
                style={styles.input}
                placeholder="email@domain.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  /* Handle login logic */
                }}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <View style={styles.orTextContainer}>
                <Divider width={'45%'} />
                <Text style={styles.orText}>or</Text>
                <Divider width={'45%'} />
              </View>
              <TouchableOpacity
                style={styles.createButton}
                onPress={() => {
                  /* Handle account creation logic */
                }}>
                <Text>Create an Account</Text>
              </TouchableOpacity>
            </View>
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

export default LoginScreen;
