import { body, param } from "express-validator";
import { checkValidators } from "./check-validation.js";


// ==============================
// CREATE COMPANY
// ==============================

export const validateCreateCompany = [

  body('nombreEmpresa')
    .trim()
    .notEmpty()
    .withMessage('El nombre de la empresa es obligatorio')
    .isLength({ max: 255 })
    .withMessage('El nombre de la empresa no puede exceder 255 caracteres'),

  body('direccion')
    .trim()
    .notEmpty()
    .withMessage('La dirección es obligatoria')
    .isLength({ max: 255 })
    .withMessage('La dirección no puede exceder 255 caracteres'),

  body('telefono')
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage('El teléfono no puede exceder 20 caracteres'),

  body('correo')
    .trim()
    .notEmpty()
    .withMessage('El correo es obligatorio')
    .isEmail()
    .withMessage('Debe ser un correo válido')
    .isLength({ max: 255 })
    .withMessage('El correo no puede exceder 255 caracteres'),

  body('encargado')
    .trim()
    .notEmpty()
    .withMessage('El encargado es obligatorio')
    .isLength({ max: 255 })
    .withMessage('El encargado no puede exceder 255 caracteres'),

  checkValidators
];


// ==============================
// UPDATE COMPANY
// ==============================

export const validateUpdateCompany = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  body('nombreEmpresa')
    .optional()
    .trim()
    .isLength({ max: 255 })
    .withMessage('El nombre de la empresa no puede exceder 255 caracteres'),

  body('direccion')
    .optional()
    .trim()
    .isLength({ max: 255 })
    .withMessage('La dirección no puede exceder 255 caracteres'),

  body('telefono')
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage('El teléfono no puede exceder 20 caracteres'),

  body('correo')
    .optional()
    .trim()
    .isEmail()
    .withMessage('Debe ser un correo válido')
    .isLength({ max: 255 })
    .withMessage('El correo no puede exceder 255 caracteres'),

  body('encargado')
    .optional()
    .trim()
    .isLength({ max: 255 })
    .withMessage('El encargado no puede exceder 255 caracteres'),

  checkValidators
];


// ==============================
// VALIDATE ID
// ==============================

export const validateCompanyId = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  checkValidators
];
