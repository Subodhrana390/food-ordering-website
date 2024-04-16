import express from "express";
const router = express.Router();
import multer from "multer";
import MyRestaurantController from "../controller/MyRestaurentController";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyRestaurantRequest } from "../controller/validation";

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
//  /api/my/restaurent
router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  MyRestaurantController.createMyRestaurant
);

export default router;
