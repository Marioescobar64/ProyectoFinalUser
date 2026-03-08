import Company from './companymodel.js';

export const getCompanies = async (req, res) => {
  try {
    const { page = 1, limit = 10, nombreEmpresa, correo, encargado } = req.query;
    const filter = {};
    if (nombreEmpresa) {
      filter.nombreEmpresa = { $regex: nombreEmpresa, $options: 'i' };
    }
    if (correo) {
      filter.correo = { $regex: correo, $options: 'i' };
    }
    if (encargado) {
      filter.encargado = { $regex: encargado, $options: 'i' };
    }
    const companies = await Company.find(filter)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Company.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: companies,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / limit),
        totalRecords: total,
        limit: Number(limit),
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error getting companies',
      error: error.message
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: 'Company not found'
      });
    }
    res.status(200).json({
      success: true,
      data: company
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error getting company',
      error: error.message
    });
  }
};

export const createCompany = async (req, res) => {
  try {
    const data = req.body;
    const company = new Company(data);
    await company.save();
    res.status(201).json({
      success: true,
      message: 'Company created successfully',
      data: company
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating company',
      error: error.message
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    if (!company) {
      return res.status(404).json({
        success: false,
        message: 'Company not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Company updated successfully',
      data: company
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating company',
      error: error.message
    });
  }
};

export const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByIdAndDelete(id);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: 'Company not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Company deleted successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting company',
      error: error.message
    });
  }
};