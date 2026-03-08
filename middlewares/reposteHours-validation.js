import { body, param } from "express-validator";
import { checkValidators } from "./check-validation.js";


// ==============================
// CREATE PROGRESS
// ==============================

export const validateCreateProgress = [

  body('estudiante')
    .notEmpty()
    .withMessage('El estudiante es obligatorio')
    .isMongoId()
    .withMessage('El estudiante debe ser un ObjectId válido'),

  body('horasTotales')
    .notEmpty()
    .withMessage('Las horas totales son obligatorias')
    .isNumeric()
    .withMessage('Las horas totales deben ser un número')
    .isFloat({ min: 0 })
    .withMessage('Las horas no pueden ser negativas'),

  body('horasAprobadas')
    .notEmpty()
    .withMessage('Las horas aprobadas son obligatorias')
    .isNumeric()
    .withMessage('Las horas aprobadas deben ser un número')
    .isFloat({ min: 0 })
    .withMessage('Las horas no pueden ser negativas'),

  body('horasPendientes')
    .notEmpty()
    .withMessage('Las horas pendientes son obligatorias')
    .isNumeric()
    .withMessage('Las horas pendientes deben ser un número')
    .isFloat({ min: 0 })
    .withMessage('Las horas no pueden ser negativas'),

  checkValidators
];


// ==============================
// UPDATE PROGRESS
// ==============================

export const validateUpdateProgress = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  body('estudiante')
    .optional()
    .isMongoId()
    .withMessage('El estudiante debe ser un ObjectId válido'),

  body('horasTotales')
    .optional()
    .isNumeric()
    .withMessage('Las horas totales deben ser un número')
    .isFloat({ min: 0 })
    .withMessage('Las horas no pueden ser negativas'),

  body('horasAprobadas')
    .optional()
    .isNumeric()
    .withMessage('Las horas aprobadas deben ser un número')
    .isFloat({ min: 0 })
    .withMessage('Las horas no pueden ser negativas'),

  body('horasPendientes')
    .optional()
    .isNumeric()
    .withMessage('Las horas pendientes deben ser un número')
    .isFloat({ min: 0 })
    .withMessage('Las horas no pueden ser negativas'),

  checkValidators
];


// ==============================
// VALIDATE ID
// ==============================

export const validateProgressId = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  checkValidators
];
