import { Router } from "express";

import {
  getDocuments,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument
} from "./evidence-controller.js";

import {
  validateCreateDocument,
  validateUpdateDocument,
  validateDocumentId
} from "../../middlewares/evidence-validation.js";

const router = Router();

router.get('/', getDocuments);

router.get(
  '/:id',
  validateDocumentId,
  getDocumentById
);

router.post(
  '/',
  validateCreateDocument,
  createDocument
);

router.put(
  '/:id',
  validateUpdateDocument,
  updateDocument
);

router.delete(
  '/:id',
  validateDocumentId,
  deleteDocument
);

export default router;