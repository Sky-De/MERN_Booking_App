import { Router } from "express";
import { getUser, getUsers, removeUser, updateUser } from "../controllers/users.js";
import { adminAuth } from "../middleware/adminAuth.js";
import { isUserAuth } from "../middleware/isUserAuth.js";
import { userAuth } from "../middleware/userAuth.js";


const router = Router();


router.get("/:id", isUserAuth, getUser);
router.get("/", isUserAuth, getUsers);
router.patch("/:id", userAuth, updateUser);
router.delete("/:id", userAuth, removeUser);


export default router;

