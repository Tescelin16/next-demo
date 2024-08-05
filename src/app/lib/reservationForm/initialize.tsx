import * as Yup from 'yup';
import { ReservationFormValues } from "./types";
import { PropertyTextField } from '../forms/types';

export const formItems: PropertyTextField[] = [
    {
      id: 'excursion',
      label: 'Excursion',
      xs: 12,
      field: 'excursion',
      type: 'text',
      placeholder: 'Enter excursion name',
    },
    {
      id: 'date',
      label: 'Date',
      xs: 12,
      field: 'date',
      type: 'date',
      placeholder: 'Select a date',
    },
    {
      id: 'agenciaId',
      label: 'Agencia',
      xs: 12,
      field: 'agenciaId',
      type: 'text',
      placeholder: 'Enter Agencia ID',
    },
    {
      id: 'prestadorId',
      label: 'Prestador',
      xs: 12,
      field: 'prestadorId',
      type: 'text',
      placeholder: 'Enter Prestador ID',
    },
    // Agregar los campos para el arreglo 'personas'
    {
      id: 'personas.name',
      label: 'Nombre',
      xs: 12,
      field: 'personas[0].name',
      type: 'text',
      placeholder: 'Enter person name',
    },
    {
      id: 'personas.lastName',
      label: 'Apellido',
      xs: 12,
      field: 'personas[0].lastName',
      type: 'text',
      placeholder: 'Enter last name',
    },
    {
      id: 'personas.email',
      label: 'Email',
      xs: 12,
      field: 'personas[0].email',
      type: 'email',
      placeholder: 'Enter email',
    },
    {
      id: 'personas.phone',
      label: 'Phone',
      xs: 12,
      field: 'personas[0].phone',
      type: 'number',
      placeholder: 'Enter phone number',
    },
    {
      id: 'personas.documentType',
      label: 'Tipo de Documento',
      xs: 12,
      field: 'personas[0].documentType',
      type: 'text',
      placeholder: 'Enter document type',
    },
    {
      id: 'personas.document',
      label: 'Número de Documento',
      xs: 12,
      field: 'personas[0].document',
      type: 'text',
      placeholder: 'Enter document',
    },
    {
      id: 'personas.birthDate',
      label: 'Fecha de Nacimiento',
      xs: 12,
      field: 'personas[0].birthDate',
      type: 'date',
      placeholder: 'Enter birth date',
    },
    {
      id: 'personas.pickUp',
      label: 'Dirección',
      xs: 12,
      field: 'personas[0].pickUp',
      type: 'text',
      placeholder: 'Enter pick up location',
    },
    {
      id: 'pax',
      label: 'Cantidad de Personas',
      xs: 12,
      field: 'pax',
      type: 'number',
      placeholder: 'Enter number of pax',
    },
    {
      id: 'from',
      label: '¿Donde te recogemos?',
      xs: 12,
      field: 'from',
      type: 'text',
      placeholder: 'Enter origin',
    },
    {
      id: 'to',
      label: '¿Donde te dejamos?',
      xs: 12,
      field: 'to',
      type: 'text',
      placeholder: 'Enter destination',
    },
    {
      id: 'observation',
      label: 'Observación',
      xs: 12,
      field: 'observation',
      type: 'text',
      placeholder: 'Enter observation',
    }
  ];

export const getInitialValues = (): ReservationFormValues =>{
    return {
        excursion:'',
        date:'',
        agenciaId:'',
        prestadorId:'',
        personas: [{
            name:'',
            lastName:'',
            email:'',
            phone: 0,
            documentType:'',
            document:'',
            birthDate:'',
            pickUp:''
        }],
        pax:0,
        from:'',
        to:'',
        observation:''
    }
} 

export const getValidation= ()=> {
    return Yup.object().shape({
        excursion: Yup.string().required('Ingrese una excursión'),
        date: Yup.string().required('Ingrese una fecha'),
        agenciaId: Yup.string().required('Ingrese una agencia'),
        prestadorId: Yup.string().required('Ingrese un prestador'),
        personas: Yup.array().of(
          Yup.object().shape({
            name: Yup.string().required('Ingrese un nombre'),
            lastName: Yup.string().required('Ingrese un apellido'),
            email: Yup.string().email('Ingrese un email válido').required('Ingrese un email'),
            phone: Yup.number().positive('El teléfono debe ser un número positivo').integer('El teléfono debe ser un número entero').required('Ingrese un teléfono'),
            documentType: Yup.string().required('Ingrese un tipo de documento'),
            document: Yup.string().required('Ingrese un documento'),
            birthDate: Yup.string().required('Ingrese una fecha de nacimiento'),
            pickUp: Yup.string().required('Ingrese un punto de recogida')
          })
        ),
        pax: Yup.number().required('Ingrese el número de pasajeros').positive('El número de pasajeros debe ser un número positivo').integer('El número de pasajeros debe ser un número entero'),
        from: Yup.string().required('Ingrese el origen'),
        to: Yup.string().required('Ingrese el destino'),
        observation: Yup.string()
      });
}