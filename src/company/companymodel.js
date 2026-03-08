'use strict';

import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    nombreEmpresa: {
        type: String,
        required: [true, 'El nombre de la empresa es obligatorio'],
        trim: true,
        maxLength: [255, 'El nombre de la empresa no puede exceder los 255 caracteres']
    },
    direccion: {
        type: String,
        required: [true, 'La dirección es obligatoria'],
        trim: true,
        maxLength: [255, 'La dirección no puede exceder los 255 caracteres']
    },
    telefono: {
        type: String,
        trim: true,
        maxLength: [20, 'El teléfono no puede exceder los 20 caracteres']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        trim: true,
        lowercase: true,
        maxLength: [255, 'El correo no puede exceder los 255 caracteres']
    },
    encargado: {
        type: String,
        required: [true, 'El encargado es obligatorio'],
        trim: true,
        maxLength: [255, 'El nombre del encargado no puede exceder los 255 caracteres']
    }
}, {
    timestamps: true
});

companySchema.index({ nombreEmpresa: 1 });
companySchema.index({ correo: 1 });
companySchema.index({ encargado: 1 });
companySchema.index({ nombreEmpresa: 1, correo: 1 });

export default mongoose.model('Company', companySchema);