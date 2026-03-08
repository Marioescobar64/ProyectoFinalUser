import { body, param } from "express-validator";
import { checkValidators } from "./check-validation.js";


// ==============================
// CREATE PRACTICE
// ==============================

export const validateCreatePractice = [

  body('estudiante')
    .notEmpty()
    .withMessage('El estudiante es obligatorio')
    .isMongoId()
    .withMessage('El estudiante debe ser un ObjectId válido'),

  body('empresa')
    .notEmpty()
    .withMessage('La empresa es obligatoria')
    .isMongoId()
    .withMessage('La empresa debe ser un ObjectId válido'),

  body('fecha')
    .notEmpty()
    .withMessage('La fecha es obligatoria')
    .isISO8601()
    .withMessage('La fecha debe ser válida'),

  body('horas')
    .notEmpty()
    .withMessage('Las horas son obligatorias')
    .isNumeric()
    .withMessage('Las horas deben ser un número')
    .isFloat({ min: 0 })
    .withMessage('Las horas no pueden ser negativas'),

  body('actividades')
    .trim()
    .notEmpty()
    .withMessage('Las actividades son obligatorias')
    .isLength({ max: 500 })
    .withMessage('Las actividades no pueden exceder 500 caracteres'),

  body('estado')
    .optional()
    .isIn(['pendiente', 'aprobada', 'rechazada'])
    .withMessage('Estado inválido'),

  body('comentarios')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Los comentarios no pueden exceder 500 caracteres'),

  checkValidators
];


// ==============================
// UPDATE PRACTICE
// ==============================

export const validateUpdatePractice = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  body('estudiante')
    .optional()
    .isMongoId()
    .withMessage('El estudiante debe ser un ObjectId válido'),

  body('empresa')
    .optional()
    .isMongoId()
    .withMessage('La empresa debe ser un ObjectId válido'),

  body('fecha')
    .optional()
    .isISO8601()
    .withMessage('La fecha debe ser válida'),

  body('horas')
    .optional()
    .isNumeric()
    .withMessage('Las horas deben ser un número')
    .isFloat({ min: 0 })
    .withMessage('Las horas no pueden ser negativas'),

  body('actividades')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Las actividades no pueden exceder 500 caracteres'),

  body('estado')
    .optional()
    .isIn(['pendiente', 'aprobada', 'rechazada'])
    .withMessage('Estado inválido'),

  body('comentarios')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Los comentarios no pueden exceder 500 caracteres'),

  checkValidators
];


// ==============================
// VALIDATE ID
// ==============================

export const validatePracticeId = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  checkValidators
];
