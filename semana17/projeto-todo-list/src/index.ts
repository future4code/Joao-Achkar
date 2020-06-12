import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { Request, Response } from "express"


dotenv.config();

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});

////////////////////////////////////////////// TABELA USUÁRIO //////////////////////////////////
try {
    const createTableUser = async (): Promise<void> => {
        await connection.raw(
            `
            CREATE TABLE User (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NULL,
                nickname VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL
            )
            `
        )
    }
    //createTableUser()
} catch (err) {
    throw new Error(err.message);
}

///////////////////////////////////////CRIA USUÁRIO NA TABLE USER ////////////////////////

const createUser = async (id: string, name: string, nickname: string, email: string): Promise<void> => {
    try {
        await connection.raw(
            `
        INSERT INTO User VALUES(
            "${id}","${name}", "${nickname}", "${email}"
        )
        `
        )
        // createUser("001", "Erika", "Erikao", "erika@skarda.com")
    } catch (err) {
    throw new Error(err.message);
    }
}

///////////////////////////////////////PEGA USUÁRIO NA TABLE USER //////////////////////////////
const getUserBuilder = async (id: string): Promise<any> => {
    try {
        const result = await connection.select("*").from ("User").where({id:id})
        return result
    } catch(err) {
        throw new Error ("tem esse usuário não")
    }
}
//getUserBuilder('1591992542886')
//////////////////////////////////////////////////////////////////////////////////////////////

const app = express()
app.use(express.json())

////////////////////////////////// END POINT CRIAR USUÁRIO ///////////////////////////////////
const createEndPointUser = async (req: Request, res: Response): Promise<any> => {
    try{
        const newUser = {
        id: Date.now().toString(),
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email
        }
    await createUser(newUser.id, newUser.name, newUser.nickname, newUser.email)
    res.status(200).send({message:"Usuário inserido com sucesso"})
    } catch(err){
        res.status(400).send({message:"Usuário n foi criado com sucesso"})
    }    
}
app.post("/user", createEndPointUser)

////////////////////////////////// END POINT PEGAR USUÁRIO PELO ID ///////////////////////////////////

app.get("/user/:id", async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const result = await getUserBuilder(id);

        res.status(200).send(result[0]);
    }catch(err) {
        res.status(400).send({error: err.message});
    }

});
// const getUserById = async (req: Request, res: Response): Promise<any> => {
//     try {
//         const getUserId = {
//             id: req.body.id,
//         }
//     await getUser(getUserId.id)

//     } catch(err){
//         res.status(400).send({message:"tem usuário com esse id não moço"})
//     }
// }



const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});