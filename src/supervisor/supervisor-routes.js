import { Router } from "express";

import {
  getContactRecords,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} from "./supervisor-controller.js";

import {
  validateCreateSupervisor,
  validateUpdateSupervisor,
  validateSupervisorId
} from "../../middlewares/supervisor-validation.js";

const router = Router();

router.get('/', getContactRecords);

router.get(
  '/:id',
  validateSupervisorId,
  getContactById
);

router.post(
  '/',
  validateCreateSupervisor,
  createContact
);

router.put(
  '/:id',
  validateUpdateSupervisor,
  updateContact
);

router.delete(
  '/:id',
  validateSupervisorId,
  deleteContact
);

export default router;
