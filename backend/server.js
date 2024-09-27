const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
const pool = mysql
  .createPool({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DATABASE,
  })
  .promise();
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use(express.json());
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await pool.query(
      `select * from credentials where username="${username}" and password="${password}"`
    );
    if (rows.length > 0) {
      res.status(200).send({ validation: true, message: "Login Successfull" });
    } else {
      res.status(404).send({
        validation: false,
        message: "Please check your credentials once",
      });
    }
  } catch (error) {
    console.log("Error", error);
  }
});
app.get("/", (req, res) => {
  res.send({ status: 200, message: "Hi" });
});
const getResults = async () => {
  const [result] = await pool.query("select * from credentials");
  console.log("r", result);
};
// getResults();
app.listen(3001, () => console.log("Listening on port 3001"));
