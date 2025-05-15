import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
//create category || POST
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
//update category || PUT
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//get all categories || GET
router.get("/get-category", categoryController);

//get single category || GET
router.get("/single-category/:slug", singleCategoryController);

router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);
export default router;
