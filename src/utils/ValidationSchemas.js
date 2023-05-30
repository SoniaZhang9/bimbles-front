import * as yup from 'yup'
import { setLocale } from 'yup'

const addressSchema = yup.object().shape({
    street: yup.string().nullable(),
    number: yup
        .number()
        .nullable()
        .typeError('Debe ser un número')
        .transform((_, val) => (val !== '' ? Number(val) : null)),
    flat: yup
        .number()
        .nullable()
        .typeError('Debe ser un número')
        .transform((_, val) => (val !== '' ? Number(val) : null)),
    postalCode: yup
        .number()
        .notRequired()
        .nullable()
        .typeError('Debe ser un número')
        .transform((_, val) => (val !== '' ? Number(val) : null)),
    city: yup.string().nullable(),
    province: yup.string().required('La provincia es obligatoria'),
})

const userSchema = yup.object().shape({
    name: yup.string().required('El nombre es obligatorio').min(3),
    surname: yup.string().required('Los apellidos son obligatorios').min(3),
    userName: yup.string().required('El nombre de usuario es obligatorio').min(3),
    password: yup.string().required('La contraseña es obligatoria').min(4),
    address: addressSchema,
})

const itemSchema = yup.object().shape({
    type: yup.string().required('El tipo de item es obligatorio').oneOf(['Place', 'Business', 'Restaurant', 'Product']),
    title: yup.string().required('El título es obligatorio').min(3),
    description: yup.string().required('La descripción es obligatoria'),
    address: addressSchema,
    phoneNumber: yup
        .string()
        .notRequired()
        .nullable()
        .matches('(\\+34|0034|34)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}', 'Número de teléfono no válido')
        .transform((_, val) => (val !== '' ? String(val) : null)),
    website: yup
        .string()
        .nullable()
        .matches(
            /((https?):\/\/)(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Página web no válida'
        )
        .transform((_, val) => (val !== '' ? String(val) : null)),
    schedule: yup.string().nullable(),
    allergies: yup
        .array()
        .notRequired()
        .transform((_, val) => val?.filter((allergy) => allergy !== false)),
    accessibility: yup.object().shape({
        physical: yup.boolean().nullable(),
        visual: yup.boolean().nullable(),
        auditory: yup.boolean().nullable(),
    }),
})

const loginSchema = yup.object().shape({
    username: yup.string().required('El nombre de usuario es obligatorio').min(3),
    password: yup.string().required('La contraseña es obligatoria').min(4),
})

const preferencesSchema = yup.object().shape({
    diets: yup
        .array()
        .notRequired()
        .transform((_, val) => val?.filter((i) => i !== false)),
    allergies: yup
        .array()
        .notRequired()
        .transform((_, val) => val?.filter((i) => i !== false)),
    specialNeeds: yup
        .array()
        .notRequired()
        .transform((_, val) => val?.filter((i) => i !== false)),
})

setLocale({
    string: {
        min: `Debe tener como mínimo $\{min} caracteres`,
    },
})

export { userSchema, itemSchema, loginSchema, preferencesSchema }
