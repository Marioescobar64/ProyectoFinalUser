'use strict'

import { body, param } from "express-validator";
import { checkValidators } from "./check-validation.js";

// Validar creación de supervisor
export const validateCreateSupervisor = [

    body('nombre')
        .notEmpty()
        .withMessage('El nombre es obligatorio')
        .isLength({ max: 255 })
        .withMessage('El nombre no puede exceder 255 caracteres')
        .trim(),

    body('correo')
        .notEmpty()
        .withMessage('El correo es obligatorio')
        .isEmail()
        .withMessage('Debe ser un correo válido')
        .isLength({ max: 255 })
        .withMessage('El correo no puede exceder 255 caracteres')
        .trim()
        .toLowerCase(),

    body('telefono')
        .optional()
        .isLength({ max: 20 })
        .withMessage('El teléfono no puede exceder 20 caracteres'),

    body('empresa')
        .notEmpty()
        .withMessage('La empresa es obligatoria')
        .isMongoId()
        .withMessage('Debe ser un ID válido de MongoDB'),

    checkValidators
];

// Validar actualización de supervisor
export const validateUpdateSupervisor = [

    param('id')
        .isMongoId()
        .withMessage('ID inválido'),

    body('nombre')
        .optional()
        .notEmpty()
        .withMessage('El nombre no puede estar vacío')
        .isLength({ max: 255 })
        .withMessage('El nombre no puede exceder 255 caracteres'),

    body('correo')
        .optional()
        .isEmail()
        .withMessage('Debe ser un correo válido'),

    body('telefono')
        .optional()
        .isLength({ max: 20 })
        .withMessage('El teléfono no puede exceder 20 caracteres'),

    body('empresa')
        .optional()
        .isMongoId()
        .withMessage('Debe ser un ID válido de MongoDB'),

    checkValidators
];

// Validar obtener supervisor por ID
export const validateSupervisorId = [

    param('id')
        .isMongoId()
        .withMessage('ID inválido'),

    checkValidators
];




