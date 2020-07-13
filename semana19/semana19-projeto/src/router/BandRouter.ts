import express from "express";
import { BandController } from "../controller/BandController";
//linha responsável por criar um módulo de rotas no express
export const bandRouter = express.Router();

bandRouter.post("/create", new BandController().createBand);
bandRouter.get("/get", new BandController().getBandByName);

