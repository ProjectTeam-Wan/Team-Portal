import express from "express";
import pg from "pg";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Cats",
  password: "postgres",
  port: 5432,
});
db.connect();

app.use(express.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS

// Cat Table API //

app.get("/getCats", async (req, res) => {
  const result = await db.query("SELECT * FROM cats");
  res.json(result.rows);
});

app.post("/addCat", async (req, res) => {
  const { name, location, rack, mark } = req.body;
  try {
    await db.query(
      "INSERT INTO cats (name, location, rack, mark) VALUES ($1, $2, $3, $4)",
      [name, location, rack, mark]
    );
    try {
      const result = await db.query("SELECT * FROM cats");
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

app.put("/updateCat/:id", async (req, res) => {
  const { id, name, location, rack, mark } = req.body;
  try {
    await db.query(
      "UPDATE cats SET name = $1, location = $2, rack = $3, mark = $4 WHERE id = $5",
      [name, location, rack, mark, id]
    );
    try {
      const result = await db.query("SELECT * FROM cats");
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

app.delete("/deleteCat/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE from cats WHERE id = $1", [id]);
    try {
      const result = await db.query("SELECT * FROM cats");
      res.status(201).json(result);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
// Cat Table API //


// Orders Tables //

app.get("/getDates", async (req, res) => {
  const result = await db.query("select Distinct date from orders");
  const datesArray = result.rows.map(row => row.date)
  res.json(datesArray);
});

app.get("/getTabs", async (req, res) => {
  console.log(req.query.date)
  const date = req.query.date
  const result = await db.query("select distinct encGroup from orders where date = $1",[date]);
  console.log(result.rows)
  const tabsArray = result.rows.map(row => row.encgroup)
  console.log(tabsArray);
  res.json(tabsArray);
});

// Orders Tables //

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
