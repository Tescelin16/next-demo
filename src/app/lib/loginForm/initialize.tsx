import * as Yup from 'yup';
import {
    AtSymbolIcon,
    KeyIcon,
} from '@heroicons/react/24/outline';
import { LoginFormValues } from './types';
import { PropertyTextField } from '../forms/types';

export const formItems: PropertyTextField[] = [
    {
      id: 'username',
      label: 'UserName',
      xs: 12,
      field: 'username',
      type: 'text',
      placeholder: "Enter your username",
      icon: <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    },
    {
      id: 'password',
      label: 'Password',
      xs: 12,
      field: 'username',
      type: 'password',
      placeholder: "Enter your password",
      icon: <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    },
  ];

 
 
export const getInitialValues = (): LoginFormValues => {
    return { username: '', password: ''}
}

export function getValidation () {
    return Yup .object().shape({
        username: Yup.string()
          .min(2, 'Mínimo 2 caracteres')
          .max(60)
          .required('Ingrese su nombre de usuario'),
        password: Yup.string()
          .min(6, 'Mínimo 6 caracteres')
          .max(20, 'Máximo 20 caracteres')
          .required('La contraseña es requerida'),
      })
}