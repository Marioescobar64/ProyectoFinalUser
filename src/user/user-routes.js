'use strict';

import { Router } from 'express';

import {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
} from './user-controller.js';

import {
    crearUsuarioValidation,
    actualizarUsuarioValidation,
    idValidation
} from "../../middlewares/user-validation.js";;

const router = Router();

router.post(
    '/',
    crearUsuarioValidation,
    crearUsuario
);

router.get(
    '/',
    obtenerUsuarios
);

router.get(
    '/:id',
    idValidation,
    obtenerUsuario
);

router.put(
    '/:id',
    actualizarUsuarioValidation,
    actualizarUsuario
);

router.delete(
    '/:id',
    idValidation,
    eliminarUsuario
);

export default router;
