'use strict';

import { body, param } from 'express-validator';

export const crearUsuarioValidation = [

    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ max: 255 }).withMessage('Máximo 255 caracteres'),

    body('correo')
        .notEmpty().withMessage('El correo es obligatorio')
        .isEmail().withMessage('Debe ser un correo válido'),

    body('contrasena')
        .notEmpty().withMessage('La contraseña es obligatoria')
        .isLength({ min: 6 }).withMessage('Mínimo 6 caracteres'),

    body('rol')
        .notEmpty().withMessage('El rol es obligatorio')
        .isIn(['estudiante', 'supervisor', 'coordinador'])
        .withMessage('Rol inválido')
];


export const actualizarUsuarioValidation = [

    param('id')
        .isMongoId().withMessage('ID inválido'),

    body('correo')
        .optional()
        .isEmail().withMessage('Correo inválido'),

    body('contrasena')
        .optional()
        .isLength({ min: 6 }).withMessage('Mínimo 6 caracteres'),

    body('rol')
        .optional()
        .isIn(['estudiante', 'supervisor', 'coordinador'])
];


export const idValidation = [
    param('id')
        .isMongoId().withMessage('ID inválido')
];
