import { Request, Response } from "express";
import pool from "../../config/database";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).send("Server error");
  }
};
