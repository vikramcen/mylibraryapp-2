const router = require("express").Router();
const {
  getAllCategoriesController,
  createNewCategoryController,
  updateCategoryController,
  deleteCategoryController,
  getAllCategoriesWithBooksController,
} = require("../controllers/categoryController");
const checkAdminAuth = require("../middlewares/adminAuthMiddleware");

// get all categories
router.get("/", getAllCategoriesController);

// create a new category
router.post("/", checkAdminAuth, createNewCategoryController);

// udpate the category
router.patch("/:id", checkAdminAuth, updateCategoryController);

// delete the category
router.delete("/:id", checkAdminAuth, deleteCategoryController);

module.exports = router;
