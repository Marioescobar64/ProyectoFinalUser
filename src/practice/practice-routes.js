import { Router } from "express";

import {
  getPractices,
  getPracticeById,
  createPractice,
  updatePractice,
  deletePractice
} from "./practice-controller.js";

import {
  validateCreatePractice,
  validateUpdatePractice,
  validatePracticeId
} from "../../middlewares/practice-validation.js";

const router = Router();

router.get('/', getPractices);

router.get(
  '/:id',
  validatePracticeId,
  getPracticeById
);

router.post(
  '/',
  validateCreatePractice,
  createPractice
);

router.put(
  '/:id',
  validateUpdatePractice,
  updatePractice
);

router.delete(
  '/:id',
  validatePracticeId,
  deletePractice
);

export default router;