# 💼 Sales Management Web Application

A full-stack web application that integrates **Node.js**, **Express**, **MySQL**, and **Python** for managing sales data and generating analytical reports.  
It demonstrates data cleaning, normalization, and real-time CRUD operations for retail business intelligence.

---

## 🧩 Overview

This project analyzes the *Supermart Grocery Sales Retail Analytics Dataset* from Kaggle and transforms it into a **normalized relational database (3NF)**.  
The web app provides a user-friendly dashboard to visualize, manage, and report sales data by category, city, and region.

---

## 🧠 Key Features

| Category | Description |
|-----------|-------------|
| **CRUD Operations** | Add, update, delete, and search sales orders dynamically. |
| **Report Generation** | Category-based and city-based sales, profit, and discount reports. |
| **Data Cleaning** | Automated preprocessing using Python and Pandas. |
| **Database Design** | Fully normalized (1NF → 3NF) schema for optimized relational storage. |
| **SQL Integration** | MySQL queries for data manipulation and analytics. |
| **Responsive UI** | HTML, CSS, and JS-based interface with modular renderers. |
| **Error Handling** | Input validation, missing data handling, and real-time alerts. |

---

## 🗃️ Dataset

**Source:** [Supermart Grocery Sales Retail Analytics Dataset](https://www.kaggle.com/datasets/mohamedharris/supermart-grocery-sales-retail-analytics-dataset)  
**Attributes:** Order ID, Customer Name, Category, Sub-Category, City, Order Date, Region, Sales, Discount, Profit, State.

---

## 🧮 Database Schema

### **Orders Table**
| Field | Type | Description |
|--------|------|-------------|
| OrderID | INT | Primary key |
| CustomerName | VARCHAR(100) | Customer’s name |
| Category | VARCHAR(50) | Product category |
| SubCategory | VARCHAR(255) | Product subcategory |
| City | VARCHAR(255) | Linked to Locations table |
| OrderDate | VARCHAR(255) | Order timestamp |
| Sales | FLOAT | Total sales amount |
| Discount | FLOAT | Discount rate |
| Profit | FLOAT | Profit margin |
| LocationID | INT | Foreign key → Locations |

### **Locations Table**
| Field | Type | Description |
|--------|------|-------------|
| LocationID | INT | Primary key |
| City | VARCHAR(100) | City name |
| State | VARCHAR(100) | State name |
| Region | VARCHAR(50) | Regional zone |

---

## 🧩 Data Normalization

| Normal Form | Description |
|--------------|-------------|
| **1NF** | Atomic columns, unique OrderID |
| **2NF** | Split City, State, Region into separate Locations table |
| **3NF** | Removed transitive dependencies for City–State–Region relationship |

---

## ⚙️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Backend** | Node.js, Express, MySQL |
| **Frontend** | HTML, CSS, JavaScript |
| **Data Cleaning** | Python (Pandas) |
| **Database** | MySQL (normalized 3NF schema) |
| **Libraries** | body-parser, mustache-express |

---

## 🧠 Core Functionalities

### 🧾 Reports
- `/category-report` → View category-wise sales, profit, and discount summary.  
- `/city-report` → Analyze regional sales performance.

### 🧰 CRUD Operations
- **Add Order** → Create new records in `Orders`.  
- **Update/Delete** → Modify or remove existing orders.  
- **View Orders** → Paginated list of first/last 10 orders.  
- **Search Orders** → Search by ID or customer name.

### 📊 Dashboard Analytics
- Displays **total sales**, **average discount**, and **total profit** in real-time.

---

## 🧠 Python Data Preprocessing

### 📄 `OrdersPreprocessor.py`
- Removes duplicates and missing values.  
- Standardizes capitalization.  
- Fills missing numeric values with zeros.  
- Outputs: `Orders_Cleaned.csv`

### 📄 `LocationPreprocessor.py`
- Cleans location data.  
- Resolves inconsistent region values and missing cities.  
- Outputs: `Locations_Cleaned.csv`

---

## 🖥️ How to Run

### 1️⃣ Setup Environment
```bash
# Install dependencies
npm install
pip install pandas

# Run Python Preprocessing
python OrdersPreprocessor.py
python LocationPreprocessor.py

# Setup Database
CREATE DATABASE Sales;
USE Sales;
SOURCE schema.sql;

# Run the server
node server.js

