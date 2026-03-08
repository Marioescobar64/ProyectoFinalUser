'use strict';

import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
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
        lowercase: true,
        maxLength: [255, 'El correo no puede exceder los 255 caracteres']
    },
    telefono: {
        type: String,
        trim: true,
        maxLength: [20, 'El teléfono no puede exceder los 20 caracteres']
    },
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: [true, 'La empresa es obligatoria']
    }
}, {
    timestamps: true
});

contactSchema.index({ nombre: 1 });
contactSchema.index({ correo: 1 });
contactSchema.index({ empresa: 1 });
contactSchema.index({ correo: 1, empresa: 1 });

export default mongoose.model('Contact', contactSchema);