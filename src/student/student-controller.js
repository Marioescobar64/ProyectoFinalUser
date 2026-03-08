import Student from './studentmodel.js';

export const getStudentRecords = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      carnet,
      nombre
    } = req.query;

    const filter = {};

    if (carnet) {
      filter.carnet = carnet;
    }

    if (nombre) {
      filter.nombre = { $regex: nombre, $options: 'i' };
    }

    const students = await Student.find(filter)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Student.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: students,
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
      message: 'Error getting student records',
      error: error.message
    });

  }
};


export const getStudentById = async (req, res) => {
  try {

    const { id } = req.params;

    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    res.status(200).json({
      success: true,
      data: student
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Error getting student',
      error: error.message
    });

  }
};


export const createStudent = async (req, res) => {
  try {

    const data = req.body;

    const student = new Student(data);

    await student.save();

    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: student
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: 'Error creating student',
      error: error.message
    });

  }
};


export const updateStudent = async (req, res) => {
  try {

    const { id } = req.params;

    const student = await Student.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: student
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: 'Error updating student',
      error: error.message
    });

  }
};


export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting student',
      error: error.message
    });

  }
};