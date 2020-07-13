import { BandDatabase } from "../data/BandDatabase";
import { Band } from "../model/Band";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { NotFoundError } from "../errors/NotFoundError";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { userRouter } from "../router/UserRouter";

export class BandBusiness {
  constructor(
    private bandDatabase: BandDatabase,
   // private hashGenerator: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async createBand(
    name: string,
    music_genre: string,
    responsible: string
  ) {
    if (!name || !music_genre || !responsible) {
      throw new InvalidParameterError("Missing input");
    }

    const idBand = this.idGenerator.generate();

    await this.bandDatabase.createBand(
        new Band (
        idBand,
        name,
        music_genre,
        responsible 
        )
    )
}
    public async getBandByName(name: string) {
        const band = await this.bandDatabase.getBandByName(name);
        if(!band) {
            throw new NotFoundError("Band not found");
        }

        return {
            name: band.getName(),
            music_genre: band.getMusic_genre(),
            responsible: band.getResponsible(),
        }
    }
}
