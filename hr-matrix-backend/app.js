require("dotenv").config();

const express = require("express");

const app = express();

require("./config")(app);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const employeeRouter = require("./routes/employee.routes");
app.use("/employees", employeeRouter);

const vacancyRouter = require("./routes/vacancy.routes");
app.use("/vacancies", vacancyRouter);

const applicantRouter = require("./routes/applicant.routes");
app.use("/applicants", applicantRouter);

require("./error-handling")(app);

module.exports = app;
