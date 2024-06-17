import * as Yup from 'yup';
import i18n from '../../i18n';

export const singUpFormSchema = Yup.object({
  name: Yup.string().min(2).max(20).required('Name is required'),
  surname: Yup.string().min(2).max(20).required('Surname is required'),
  email: Yup.string()
    .email()
    .required(i18n.t('LoginScreen.email_validation_error')),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});
