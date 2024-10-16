require("dotenv").config();

const express = require("express");

const app = express();

require("./config")(app);


// const indexRoutes = require("./routes/index.routes");
// app.use("/api", indexRoutes);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const employeeRouter = require("./routes/employee.routes");
app.use("/employees", employeeRouter);

require("./error-handling")(app);

module.exports = app;
