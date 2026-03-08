import { Router } from "express";

import {
  getStudentRecords,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} from "./student-controller.js";

import {
  validateCreateStudent,
  validateUpdateStudent,
  validateStudentId
} from "../../middlewares/student-validation.js";

const router = Router();

router.get('/', getStudentRecords);

router.get(
  '/:id',
  validateStudentId,
  getStudentById
);

router.post(
  '/',
  validateCreateStudent,
  createStudent
);

router.put(
  '/:id',
  validateUpdateStudent,
  updateStudent
);

router.delete(
  '/:id',
  validateStudentId,
  deleteStudent
);

export default router;