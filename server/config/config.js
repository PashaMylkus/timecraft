const { config } = require("dotenv");
config();

module.exports = {
  development: {
    username: process.env.DB_USER || "admin",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "time_craft_db",
    host: "138.197.188.0:5432",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "db", // Використовується у Docker
    dialect: "postgres",
  },
};
