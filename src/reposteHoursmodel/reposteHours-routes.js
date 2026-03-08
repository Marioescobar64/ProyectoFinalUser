import { Router } from "express";

import {
  getProgressRecords,
  getProgressById,
  createProgress,
  updateProgress,
  deleteProgress
} from "./reposteHours-controller.js";

import {
  validateCreateProgress,
  validateUpdateProgress,
  validateProgressId
} from "../../middlewares/reposteHours-validation.js";

const router = Router();

router.get('/', getProgressRecords);

router.get(
  '/:id',
  validateProgressId,
  getProgressById
);

router.post(
  '/',
  validateCreateProgress,
  createProgress
);

router.put(
  '/:id',
  validateUpdateProgress,
  updateProgress
);

router.delete(
  '/:id',
  validateProgressId,
  deleteProgress
);

export default router;