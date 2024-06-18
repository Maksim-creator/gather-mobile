import * as Yup from 'yup';
import i18n from '../../i18n';

export const singUpFormSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(20)
    .required(i18n.t('SignUpScreen.name_validation_error')),
  lastName: Yup.string()
    .min(2)
    .max(20)
    .required(i18n.t('SignUpScreen.surname_validation_error')),
  email: Yup.string()
    .email(i18n.t('SignUpScreen.email_format_error'))
    .required(i18n.t('SignUpScreen.email_validation_error')),
  password: Yup.string()
    .min(8, i18n.t('SignUpScreen.password_length_error'))
    .required(i18n.t('SignUpScreen.password_validation_error')),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});
