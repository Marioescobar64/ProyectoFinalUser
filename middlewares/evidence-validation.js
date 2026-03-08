import { body, param } from "express-validator";
import { checkValidators } from "./check-validation.js";


// ==============================
// CREATE DOCUMENT
// ==============================

export const validateCreateDocument = [

  body('practica')
    .notEmpty()
    .withMessage('La práctica es obligatoria')
    .isMongoId()
    .withMessage('La práctica debe ser un ObjectId válido'),

  body('archivo')
    .trim()
    .notEmpty()
    .withMessage('El archivo es obligatorio')
    .isLength({ max: 255 })
    .withMessage('El nombre del archivo no puede exceder 255 caracteres'),

  body('descripcion')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('La descripción no puede exceder 500 caracteres'),

  body('fecha')
    .notEmpty()
    .withMessage('La fecha es obligatoria')
    .isISO8601()
    .withMessage('La fecha debe ser válida'),

  checkValidators
];


// ==============================
// UPDATE DOCUMENT
// ==============================

export const validateUpdateDocument = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  body('practica')
    .optional()
    .isMongoId()
    .withMessage('La práctica debe ser un ObjectId válido'),

  body('archivo')
    .optional()
    .trim()
    .isLength({ max: 255 })
    .withMessage('El nombre del archivo no puede exceder 255 caracteres'),

  body('descripcion')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('La descripción no puede exceder 500 caracteres'),

  body('fecha')
    .optional()
    .isISO8601()
    .withMessage('La fecha debe ser válida'),

  checkValidators
];


// ==============================
// VALIDATE ID
// ==============================

export const validateDocumentId = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  checkValidators
];
