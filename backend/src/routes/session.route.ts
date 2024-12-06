import { Router } from "express";
import {
  deleteSessionHandler,
  getSessionHandler,
} from "../controllers/session.controller";

const sessionRoutes = Router();

//prefix: /session
sessionRoutes.get("/", getSessionHandler);
sessionRoutes.delete("/:id", deleteSessionHandler);

export default sessionRoutes;
