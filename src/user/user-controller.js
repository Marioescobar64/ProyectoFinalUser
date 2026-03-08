'use strict';

import Usuario from './usermodel.js';

// Crear usuario
export const crearUsuario = async (req, res) => {
    try {
        const { nombre, correo, contrasena, rol } = req.body;

        const usuarioExistente = await Usuario.findOne({ correo });

        if (usuarioExistente) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado'
            });
        }

        const usuario = new Usuario({
            nombre,
            correo,
            contrasena,
            rol
        });

        await usuario.save();

        res.status(201).json({
            ok: true,
            usuario
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al crear usuario',
            error
        });
    }
};


// Obtener todos
export const obtenerUsuarios = async (req, res) => {
    try {

        const usuarios = await Usuario.find();

        res.json({
            ok: true,
            usuarios
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener usuarios'
        });
    }
};


// Obtener por ID
export const obtenerUsuario = async (req, res) => {
    try {

        const { id } = req.params;

        const usuario = await Usuario.findById(id);

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado'
            });
        }

        res.json({
            ok: true,
            usuario
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener usuario'
        });
    }
};


// Actualizar
export const actualizarUsuario = async (req, res) => {
    try {

        const { id } = req.params;

        const usuario = await Usuario.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado'
            });
        }

        res.json({
            ok: true,
            usuario
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar usuario'
        });
    }
};


// Eliminar (soft delete)
export const eliminarUsuario = async (req, res) => {
    try {

        const { id } = req.params;

        const usuario = await Usuario.findByIdAndUpdate(
            id,
            { estado: false },
            { new: true }
        );

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado'
            });
        }

        res.json({
            ok: true,
            msg: 'Usuario desactivado'
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar usuario'
        });
    }
};
