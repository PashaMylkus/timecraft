import { Router } from "express";
import { getUsers } from "../controllers/users/get-users";
import { createUser } from "../controllers/users/create-user";

const router = Router();

router.get("/", getUsers);

router.post("/", createUser);

export default router;
