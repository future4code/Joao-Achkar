import { BaseDataBase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDataBase {
  protected tableName: string = "table_bands";
  protected tableName2: string = "table_usernames";

  private toModel(dbModel?: any): Band | undefined {
    return (
      dbModel &&
      new Band(
        dbModel.id,
        dbModel.name,
        dbModel.music_genre,
        dbModel.responsible
      )
    );
  }

  public async createBand(newBand: Band): Promise<void> {
    await super.getConnection().raw(`
        INSERT INTO ${this.tableName} (id, name, music_genre, responsible)
        VALUES (
          '${newBand.getId()}', 
          '${newBand.getName()}', 
          '${newBand.getMusic_genre()}',
          '${newBand.getResponsible()}'
        )`);
  }

  public async getBandByName(bandName: string): Promise <Band | undefined> {
    const result = await super.getConnection().raw(`
      SELECT * FROM ${this.tableName} WHERE name LIKE '%${bandName}%'    
      `);
    return this.toModel(result[0][0]);
  }
/*
  public async getBandById(id: string): Promise<User | undefined> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName} WHERE id = '${id}'
      `);
    return this.toModel(result[0][0]);
  }

  public async getAllUsers(): Promise<User[]> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName}
    `);
    return result[0].map((res: any) => {
      return this.toModel(res);
    });
  }*/
}
