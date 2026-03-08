import { body, param } from "express-validator";
import { checkValidators } from "./check-validation.js";


// ==============================
// CREATE STUDENT
// ==============================

export const validateCreateStudent = [

  body('carnet')
    .notEmpty()
    .withMessage('El carnet es obligatorio')
    .isLength({ max: 50 })
    .withMessage('El carnet no puede exceder 50 caracteres'),

  body('nombre')
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isLength({ max: 255 })
    .withMessage('El nombre no puede exceder 255 caracteres'),

  body('carrera')
    .notEmpty()
    .withMessage('La carrera es obligatoria')
    .isLength({ max: 255 })
    .withMessage('La carrera no puede exceder 255 caracteres'),

  body('telefono')
    .optional()
    .isLength({ max: 20 })
    .withMessage('El teléfono no puede exceder 20 caracteres'),

  body('correo')
    .notEmpty()
    .withMessage('El correo es obligatorio')
    .isEmail()
    .withMessage('Debe ser un correo válido')
    .isLength({ max: 255 })
    .withMessage('El correo no puede exceder 255 caracteres'),

  body('horasRequeridas')
    .notEmpty()
    .withMessage('Las horas requeridas son obligatorias')
    .isNumeric()
    .withMessage('Debe ser un número')
    .isFloat({ min: 0 })
    .withMessage('Las horas no pueden ser negativas'),

  body('horasAcumuladas')
    .optional()
    .isNumeric()
    .withMessage('Debe ser un número')
    .isFloat({ min: 0 })
    .withMessage('Las horas no pueden ser negativas'),

  checkValidators
];


// ==============================
// UPDATE STUDENT
// ==============================

export const validateUpdateStudent = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  body('carnet')
    .optional()
    .isLength({ max: 50 })
    .withMessage('El carnet no puede exceder 50 caracteres'),

  body('nombre')
    .optional()
    .isLength({ max: 255 })
    .withMessage('El nombre no puede exceder 255 caracteres'),

  body('carrera')
    .optional()
    .isLength({ max: 255 })
    .withMessage('La carrera no puede exceder 255 caracteres'),

  body('telefono')
    .optional()
    .isLength({ max: 20 })
    .withMessage('El teléfono no puede exceder 20 caracteres'),

  body('correo')
    .optional()
    .isEmail()
    .withMessage('Debe ser un correo válido'),

  body('horasRequeridas')
    .optional()
    .isNumeric()
    .withMessage('Debe ser un número')
    .isFloat({ min: 0 })
    .withMessage('Las horas no pueden ser negativas'),

  body('horasAcumuladas')
    .optional()
    .isNumeric()
    .withMessage('Debe ser un número')
    .isFloat({ min: 0 })
    .withMessage('Las horas no pueden ser negativas'),

  checkValidators
];


// ==============================
// VALIDATE ID
// ==============================

export const validateStudentId = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  checkValidators
];
