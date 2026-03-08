import { Router } from "express";

import {
  getCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany
} from "./company-controller.js";

import {
  validateCreateCompany,
  validateUpdateCompany,
  validateCompanyId
} from "../../middlewares/company-validation.js";

const router = Router();

router.get('/', getCompanies);

router.get(
  '/:id',
  validateCompanyId,
  getCompanyById
);

router.post(
  '/',
  validateCreateCompany,
  createCompany
);

router.put(
  '/:id',
  validateUpdateCompany,
  updateCompany
);

router.delete(
  '/:id',
  validateCompanyId,
  deleteCompany
);

export default router;
