'use strict';

import mongoose from 'mongoose';

const institutionSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        maxLength: [255, 'El nombre no puede exceder los 255 caracteres']
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
    }
}, {
    timestamps: true
});

institutionSchema.index({ nombre: 1 });
institutionSchema.index({ telefono: 1 });
institutionSchema.index({ nombre: 1, telefono: 1 });

export default mongoose.model('Institution', institutionSchema);