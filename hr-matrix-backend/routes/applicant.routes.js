const { isAuthenticated } = require("../middlewares/route.guard-middleware");
const Applicant = require("../models/Applicant.model");
const router = require("express").Router();

router.get("/", isAuthenticated, async (req, res, next) => {
  try {
    const allApplicants = await Applicant.find();
    res.status(200).json(allApplicants);
  } catch (error) {
    next(error);
  }
});

router.get("/:applicantId", isAuthenticated, async (req, res, next) => {
  const { applicantId } = req.params;
  try {
    const currentApplicant = await Applicant.findById(applicantId);
    res.json(currentApplicant);
  } catch (error) {
    next(error);
  }
});

router.post("/", isAuthenticated, async (req, res, next) => {
  try {
    const newApplicant = await Applicant.create({
      ...req.body,
      createdBy: req.tokenPayload.userId,
    });
    res.status(201).json(newApplicant);
  } catch (error) {
    next(error);
  }
});

router.put("/:applicantId", isAuthenticated, async (req, res, next) => {
  const { applicantId } = req.params;
  try {
    const updatedApplicant = await Applicant.findByIdAndUpdate(applicantId, req.body, {
      new: true,
    });
    res.status(202).json(updatedApplicant);
  } catch (error) {
    next(error);
  }
});

router.delete("/:applicantId", isAuthenticated, async (req, res) => {
  const { applicantId } = req.params;
  try {
    await Applicant.findByIdAndDelete(applicantId);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
