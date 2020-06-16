import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import {IdGenerator} from "./service/idgenerator"

dotenv.config();
const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });;

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});
const idGenerator = new IdGenerator()
const id = idGenerator.generate()
//console.log(id)

const createTableUser = async(): Promise<void> => {
       await connection.raw(
            `
                CREATE TABLE UserTableName (
                    id VARCHAR(255) PRIMARY KEY,
                    email VARCHAR(255) NOT NULL,
                    password VARCHAR(255) UNIQUE NOT NULL
                );
            `
        )
}   
//createTableUser()