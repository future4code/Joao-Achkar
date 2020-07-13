import { Request, Response } from "express";
import { TokenGenerator } from "../services/tokenGenerator";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { BandBusiness } from "../business/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { BaseDataBase } from "../data/BaseDatabase";

export class BandController extends BaseDataBase{
  protected tableName: string = "table_bands";

  private static BandBusiness = new BandBusiness(
    new BandDatabase(),
    new TokenGenerator(),
    new IdGenerator()
  );

  public async createBand(req: Request, res: Response) {
    try {
      const result = await BandController.BandBusiness.createBand(
        req.body.name,
        req.body.music_genre,
        req.body.responsible,
      );
      res.status(200).send("Band registered");
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
    await this.destroyConnection()
  }

  public async getBandByName(req: Request, res: Response) {
      try {
          const name = await BandController.BandBusiness.getBandByName(
              req.body.name,
          );
          res.status(200).send(name)
      }catch (err) {
        res.status(err.errorCode || 400).send({ message: err.message });
      }
      await this.destroyConnection()
  }
}
