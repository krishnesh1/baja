require("dotenv").config();

console.log("Email:",process.env.EMAIL);
console.log("KEY:",process.env.GEMINI_KEY);
const express = require("express");

const bfhlRoutes = require("./routes/bfhlRoutes");

const app = express();
app.use(express.json());

app.use("/", bfhlRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
