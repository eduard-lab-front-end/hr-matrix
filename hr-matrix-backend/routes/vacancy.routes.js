const { isAuthenticated } = require("../middlewares/route.guard-middleware");
const Vacancy = require("../models/Vacancies.model");
const router = require("express").Router();

router.get("/", isAuthenticated, async (req, res, next) => {
  try {
    const allVacancies = await Vacancy.find();
    res.status(200).json(allVacancies);
  } catch (error) {
    next(error);
  }
});

router.get("/:vacancyId", isAuthenticated, async (req, res, next) => {
  const { vacancyId } = req.params;
  try {
    const currentVacancy = await Vacancy.findById(vacancyId).populate('applicants');
    if (!currentVacancy) {
      return res.status(404).json({ message: 'Vacancy not found' });
    }
    res.json(currentVacancy);
  } catch (error) {
    next(error);
  }
});

router.post("/", isAuthenticated, async (req, res, next) => {
  try {
    const newVacancy = await Vacancy.create({
      ...req.body,
      createdBy: req.tokenPayload.userId,
    });
    res.status(201).json(newVacancy);
  } catch (error) {
    next(error);
  }
});

router.put("/:vacancyId", isAuthenticated, async (req, res, next) => {
  const { vacancyId } = req.params;
  try {
    const updatedVacancy = await Vacancy.findByIdAndUpdate(
      vacancyId,
      req.body,
      {
        new: true,
      }
    );
    res.status(202).json(updatedVacancy);
  } catch (error) {
    next(error);
  }
});

router.delete("/:vacancyId", isAuthenticated, async (req, res) => {
  const { vacancyId } = req.params;
  try {
    await Vacancy.findByIdAndDelete(vacancyId);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
