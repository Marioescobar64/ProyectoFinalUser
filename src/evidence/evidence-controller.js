import Document from './evidencemodel.js';

export const getDocuments = async (req, res) => {
  try {
    const { page = 1, limit = 10, practica, archivo, fecha } = req.query;
    const filter = {};
    if (practica) {
      filter.practica = practica;
    }
    if (archivo) {
      filter.archivo = { $regex: archivo, $options: 'i' };
    }

    if (fecha) {
      filter.fecha = fecha;
    }

    const documents = await Document.find(filter)
      .populate('practica')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Document.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: documents,
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
      message: 'Error getting documents',
      error: error.message
    });

  }

};

export const getDocumentById = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findById(id).populate('practica');
    if (!document) {
      return res.status(404).json({
        success: false,
        message: 'Document not found'
      });
    }
    res.status(200).json({
      success: true,
      data: document
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error getting document',
      error: error.message
    });
  }
};

export const createDocument = async (req, res) => {
  try {
    const data = req.body;
    const document = new Document(data);

    await document.save();
    res.status(201).json({
      success: true,
      message: 'Document created successfully',
      data: document
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating document',
      error: error.message
    });

  }

};

export const updateDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    if (!document) {
      return res.status(404).json({
        success: false,
        message: 'Document not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Document updated successfully',
      data: document
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating document',
      error: error.message
    });

  }

};

export const deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document.findByIdAndDelete(id);
    if (!document) {
      return res.status(404).json({
        success: false,
        message: 'Document not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Document deleted successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting document',
      error: error.message
    });
  }
};