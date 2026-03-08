import { Router } from "express";

import {
  getInstitutions,
  getInstitutionById,
  createInstitution,
  updateInstitution,
  deleteInstitution
} from "./institud-controller.js";

import {
  validateCreateInstitution,
  validateUpdateInstitution,
  validateInstitutionId
} from "../../middlewares/institud-validation.js";

const router = Router();

router.get('/', getInstitutions);

router.get(
  '/:id',
  validateInstitutionId,
  getInstitutionById
);

router.post(
  '/',
  validateCreateInstitution,
  createInstitution
);

router.put(
  '/:id',
  validateUpdateInstitution,
  updateInstitution
);

router.delete(
  '/:id',
  validateInstitutionId,
  deleteInstitution
);

export default router;