import * as Yup from 'yup';
import i18n from '../../i18n';

export const loginFormSchema = Yup.object({
  email: Yup.string()
    .email()
    .required(i18n.t('LoginScreen.email_validation_error')),
  password: Yup.string()
    .required(i18n.t('LoginScreen.password_validation_error'))
    .min(8, i18n.t('LoginScreen.password_length_error')),
});
