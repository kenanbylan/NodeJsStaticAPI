require("express-async-errors");
const express = require("express");
require("dotenv").config(); //dotenv is a zero-dependency module that loads environment variables from a .env file into process.envconst express = require("express");
const app = express();
const router = require("./src/routers/index");
// swagger
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

app.use(express.json());
const port = process.env.PORT || 8080;

//Cors İmplementing
const cors = require("cors");
const corsSettings = require("./src/Helper/corsSettings.js");

//Cors ayarları implemente edildi.
app.use(cors(corsSettings)); //Cors ayarları implemente edildi.
app.use(cors()); //Cors ayarları implemente edildi. (Bu şekilde de kullanılabilir.

app.use("/api", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Uygulamayı belirtilen portta çalıştırma
app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});
