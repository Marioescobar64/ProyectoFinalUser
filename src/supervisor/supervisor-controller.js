import Contact from './supervisormodel.js';

export const getContactRecords = async (req, res) => {
  try {

    const {
      page = 1,
      limit = 10,
      empresa,
      nombre
    } = req.query;

    const filter = {};

    if (empresa) {
      filter.empresa = empresa;
    }

    if (nombre) {
      filter.nombre = { $regex: nombre, $options: 'i' };
    }

    const contacts = await Contact.find(filter)
      .populate('empresa')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Contact.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: contacts,
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
      message: 'Error getting contact records',
      error: error.message
    });

  }
};


export const getContactById = async (req, res) => {
  try {

    const { id } = req.params;

    const contact = await Contact
      .findById(id)
      .populate('empresa');

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      success: true,
      data: contact
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Error getting contact',
      error: error.message
    });

  }
};


export const createContact = async (req, res) => {
  try {

    const data = req.body;

    const contact = new Contact(data);

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Contact created successfully',
      data: contact
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: 'Error creating contact',
      error: error.message
    });

  }
};


export const updateContact = async (req, res) => {
  try {

    const { id } = req.params;

    const contact = await Contact.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact updated successfully',
      data: contact
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: 'Error updating contact',
      error: error.message
    });

  }
};


export const deleteContact = async (req, res) => {
  try {

    const { id } = req.params;

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact deleted successfully'
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Error deleting contact',
      error: error.message
    });

  }
};