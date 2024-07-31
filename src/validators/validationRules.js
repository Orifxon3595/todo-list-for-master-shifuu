// src/validators/validationRules.js
import * as yup from 'yup';

export const emailValidation = yup
    .string()
    .required('Email is required')
    .email('Email is not valid');

export const firstnameValidation = yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters long');

export const lastnameValidation = yup
    .string()
    .required('Lastname is required')
    .min(2, 'Lastname must be at least 2 characters long');

export const usernameValidation = yup
    .string()
    .required('Username is required')
    .min(2, 'Username must be at least 2 characters long');

export const passwordValidation = yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long');

export const loginValidationSchema = yup.object({
    username: usernameValidation,
    password: passwordValidation,
});

export const signupValidationSchema = yup.object({
    email: emailValidation,
    firstname: firstnameValidation,
    lastname: lastnameValidation,
    username: usernameValidation,
    password: passwordValidation,
    re_password: passwordValidation,
});
