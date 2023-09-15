import { getPerson } from "@/controllers/personControllers";
import { Router } from "express";


const personRouter = Router();

personRouter.get("/person", getPerson);

export default personRouter;