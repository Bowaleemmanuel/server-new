import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import { authorizeAdmin } from "../middlewares/authorizeAdmin.js";
import { createCategory, updateCategory } from "../controllers/categoryController.js";
const router = express.Router();

router.post('/', authenticate, authorizeAdmin, createCategory)
router.post('/', authenticate, authorizeAdmin, updateCategory)

export default router;