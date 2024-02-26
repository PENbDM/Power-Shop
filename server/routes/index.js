import { Router } from "express";
const router = new Router();
import productRouter from "./productRouter.js";
import userRouter from "./userRouter.js";
import typeRouter from "./typeRouter.js";
import brandRouter from "./brandRouter.js";
import cartRouter from "./cartRouter.js";
import orderRouter from "./orderRouter.js";
router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/product", productRouter);
router.use("/cart", cartRouter);
router.use("/order", orderRouter);
export default router;
