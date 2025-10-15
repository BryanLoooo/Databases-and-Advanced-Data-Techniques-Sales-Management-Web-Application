const express = require("express");
const mysql = require('mysql2');
const app = express();

app.use(express.static("views"));
 // Serve static files from the 'public' folder

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Sales", // Replace with your database name
}); 

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/templates/homepage.html");
});


// API to fetch dashboard stats
app.get("/api/dashboard", (req, res) => {
  db.query(
    "SELECT SUM(Sales) AS totalSales, AVG(Discount) AS avgDiscount, SUM(Profit) AS totalProfit FROM Orders",
    (err, results) => {
      if (err) throw err;
      res.json(results[0]);
    }
  );
});

// API to fetch city-wise sales data
app.get("/api/city-report", (req, res) => {
  db.query(
    "SELECT City, SUM(Sales) AS totalSales, SUM(Profit) AS totalProfit, AVG(Discount) AS avgDiscount FROM Orders GROUP BY City",
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

// API to fetch category performance data
app.get("/api/category-report", (req, res) => {
  db.query(
    "SELECT Category, SUM(Sales) AS totalSales, SUM(Profit) AS totalProfit, AVG(Discount) AS avgDiscount FROM Orders GROUP BY Category",
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
