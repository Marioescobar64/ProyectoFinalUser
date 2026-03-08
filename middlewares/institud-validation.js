import { body, param } from "express-validator";
import { checkValidators } from "./check-validation.js";

export const validateCreateInstitution = [

  body('nombre')
    .trim()
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isLength({ max: 255 })
    .withMessage('El nombre no puede exceder 255 caracteres'),

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

  checkValidators
];

export const validateUpdateInstitution = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  body('nombre')
    .optional()
    .trim()
    .isLength({ max: 255 })
    .withMessage('El nombre no puede exceder 255 caracteres'),

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

  checkValidators
];

export const validateInstitutionId = [

  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido'),

  checkValidators
];
