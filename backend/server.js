const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
//creating connection
const pool = mysql
  .createPool({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DATABASE,
  })
  .promise();

app.use(express.json());
//authentication
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
//inserting items
app.post("/insertEntry", async (req, res) => {
  const { school, username, item, available, working } = req.body;

  try {
    const [rows] = await pool.query(
      `INSERT INTO Infrastructure (school_id, member_id, item_name, available, working_condition) VALUES
(${school}, ${username}, '${item}', ${available} ,${working});`
    );

    if (rows.warningStatus == 0) {
      res.status(200).send({ message: "Insertion Successfull" });
    } else {
      res.status(404).send({
        message: "Something went wrong",
      });
    }
  } catch (error) {
    res.status(404).send({ message: "Please check all the fields once" });
  }
});
//getting data for dashboard
app.post("/getData", async (req, res) => {
  try {
    const { stateName } = req.body;
    const [rows] = await pool.query(
      `SELECT s.school_name, i.item_name, i.available, i.working_condition, d.district_name, t.taluk_name, b.block_name
FROM School s
JOIN Block b ON s.block_id = b.block_id
JOIN Taluk t ON b.taluk_id = t.taluk_id
JOIN District d ON t.district_id = d.district_id
JOIN State st ON d.state_id = st.state_id
JOIN Infrastructure i ON s.school_id = i.school_id
WHERE st.state_name = '${stateName}';`
    );
    if (rows.length > 0) {
      res.status(200).send({ rows: rows, message: "Successfully Fetched" });
    } else {
      res.status(500).send({
        message: "Internal Error",
      });
    }
  } catch (error) {
    console.log("Error", error);
  }
});
//getting data for states
app.get("/getStatesData", async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT * from State`);
    if (rows.length > 0) {
      res.status(200).send({ rows: rows, message: "Successfully Fetched" });
    } else {
      res.status(500).send({
        message: "Internal Error",
      });
    }
  } catch (error) {
    console.log("Error", error);
  }
});
app.listen(3001, () => console.log("Listening on port 3001"));
