const { isAuthenticated } = require("../middlewares/route.guard-middleware");
const Employee = require("../models/Employee.model");
const router = require("express").Router();

router.get("/", isAuthenticated, async (req, res, next) => {
  try {
    const allEmployees = await Employee.find();
    res.status(200).json(allEmployees);
  } catch (error) {
    next(error);
  }
});

router.get("/:employeeId", isAuthenticated, async (req, res, next) => {
  const { employeeId } = req.params;
  try {
    const currentEmployee = await Employee.findById(employeeId);
    res.json(currentEmployee);
  } catch (error) {
    next(error);
  }
});

router.post("/", isAuthenticated, async (req, res, next) => {
  try {
    const newEmployee = await Employee.create({
      ...req.body,
      createdBy: req.tokenPayload.userId,
    });
    res.status(201).json(newEmployee);
  } catch (error) {
    next(error);
  }
});

router.put("/:employeeId", isAuthenticated, async (req, res, next) => {
  const { employeeId } = req.params;
  try {
    const updatedBook = await Employee.findByIdAndUpdate(employeeId, req.body, {
      new: true,
    });
    res.status(202).json(updatedBook);
  } catch (error) {
    next(error);
  }
});

router.delete("/:employeeId", isAuthenticated, async (req, res) => {
  const { employeeId } = req.params;
  try {
    await Employee.findByIdAndDelete(employeeId);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
