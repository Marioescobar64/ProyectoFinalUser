import { body, param } from "express-validator";
import { checkValidators } from "./check-validation.js";


// ==============================
// CREATE REVIEW
// ==============================

export const validateCreateReview = [

  body('practica')
    .notEmpty()
    .withMessage('La práctica es obligatoria')
    .isMongoId()
    .withMessage('La práctica debe ser un ObjectId válido'),

  body('supervisor')
    .notEmpty()
    .withMessage('El supervisor es obligatorio')
    .isMongoId()
    .withMessage('El supervisor debe ser un ObjectId válido'),

  body('comentario')
    .notEmpty()
    .withMessage('El comentario es obligatorio')
    .isLength({ max: 500 })
    .withMessage('El comentario no puede exceder 500 caracteres'),

  body('fecha')
    .notEmpty()
    .withMessage('La fecha es obligatoria')
    .isISO8601()
    .withMessage('La fecha debe ser válida'),

  checkValidators
];


// ==============================
// UPDATE REVIEW
// ==============================

export const validateUpdateReview = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  body('practica')
    .optional()
    .isMongoId()
    .withMessage('La práctica debe ser un ObjectId válido'),

  body('supervisor')
    .optional()
    .isMongoId()
    .withMessage('El supervisor debe ser un ObjectId válido'),

  body('comentario')
    .optional()
    .isLength({ max: 500 })
    .withMessage('El comentario no puede exceder 500 caracteres'),

  body('fecha')
    .optional()
    .isISO8601()
    .withMessage('La fecha debe ser válida'),

  checkValidators
];


// ==============================
// VALIDATE ID
// ==============================

export const validateReviewId = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  checkValidators
];
