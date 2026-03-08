import Institution from './institudmodel.js';

export const getInstitutions = async (req, res) => {
  try {
    const { page = 1, limit = 10, nombre, telefono } = req.query;

    const filter = {};

    if (nombre) {
      filter.nombre = { $regex: nombre, $options: 'i' };
    }

    if (telefono) {
      filter.telefono = { $regex: telefono, $options: 'i' };
    }

    const institutions = await Institution.find(filter)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Institution.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: institutions,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / limit),
        totalRecords: total,
        limit: Number(limit)
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error getting institutions',
      error: error.message
    });

  }

};

export const getInstitutionById = async (req, res) => {
  try {
    const { id } = req.params;
    const institution = await Institution.findById(id);
    if (!institution) {
      return res.status(404).json({
        success: false,
        message: 'Institution not found'
      });
    }

    res.status(200).json({
      success: true,
      data: institution
    });
  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Error getting institution',
      error: error.message
    });

  }

};

export const createInstitution = async (req, res) => {
  try {
    const data = req.body;
    const institution = new Institution(data);

    await institution.save();

    res.status(201).json({
      success: true,
      message: 'Institution created successfully',
      data: institution
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating institution',
      error: error.message
    });
  }
};

export const updateInstitution = async (req, res) => {
  try {
    const { id } = req.params;

    const institution = await Institution.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!institution) {
      return res.status(404).json({
        success: false,
        message: 'Institution not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Institution updated successfully',
      data: institution
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating institution',
      error: error.message
    });
  }
};

export const deleteInstitution = async (req, res) => {
  try {
    const { id } = req.params;

    const institution = await Institution.findByIdAndDelete(id);
    if (!institution) {
      return res.status(404).json({
        success: false,
        message: 'Institution not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Institution deleted successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting institution',
      error: error.message
    });
  }
};