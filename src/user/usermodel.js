'use strict';

import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        maxLength: [255, 'El nombre no puede exceder los 255 caracteres']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        trim: true,
        unique: true,
        lowercase: true,
        maxLength: [255, 'El correo no puede exceder los 255 caracteres']
    },
    contrasena: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minLength: [6, 'La contraseña debe tener al menos 6 caracteres']
    },
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        enum: {
            values: ['estudiante', 'supervisor', 'coordinador'],
            message: '{VALUE} no es un rol válido'
        }
    },
    estado: {
        type: Boolean,
        default: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

usuarioSchema.index({ correo: 1 });
usuarioSchema.index({ rol: 1 });
usuarioSchema.index({ estado: 1 });
usuarioSchema.index({ correo: 1, estado: 1 });

export default mongoose.model('Usuario', usuarioSchema);