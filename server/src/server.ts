// server.ts
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
