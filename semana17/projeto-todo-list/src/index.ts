import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { Request, Response } from "express"


dotenv.config();

const app = express()
app.use(express.json())

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


const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
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

///////////////////////////////////////FUNÇÃO CRIA USUÁRIO NA TABLE USER ////////////////////////

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

///////////////////////////////////////FUNÇÃO PEGA USUÁRIO NA TABLE USER //////////////////////////////
const getUserBuilder = async (id: string): Promise<any> => {
    try {
        const result = await connection.select("*").from ("User").where({id:id})
        return result
    } catch(err) {
        throw new Error ("tem esse usuário não, moço")
    }
}
//getUserBuilder('1591992542886')

////////////////////////////////// FUNÇÃO DE EDITAR USUÁRIO ///////////////////////////////////
const editUser = async(id: string, name: string, nickname: string) => {
    try {
        const result = await connection.raw (
            `
            UPDATE User
            SET name = "${name}", nickname = "${nickname}"
            WHERE id = "${id}"
            `
        )
        return result
    }catch(err){
        throw new Error("Tem como alterar agora não")
    }
}
//console.log(editUser("002", "Ronaldo Gaucho", "r10"))
/////////////////////////////////////////////// FUNÇÃO QUE CRIA TABELA DE TASKS ///////////////////////////////////////
const createTasksTable = async(): Promise<any> => {
    try {
        await connection.raw (
            `
            CREATE TABLE Tasks (
                taskId VARCHAR(255) PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                status ENUM("to_do", "doing", "done") NOT NULL DEFAULT "to_do",
                limitDate DATE NOT NULL,
                creatorUserId VARCHAR(255) NOT NULL,
                FOREIGN KEY (creatorUserId) REFERENCES User(id)
            );
            `
        )
    } catch(err) {
        throw new Error(err.message)
    }
}
//createTasksTable()

/////////////////////////////////////////////// FUNÇÃO QUE CRIA TASKS NA TABELA DE TASKS///////////////////////////////////////
const createTask = async (
    taskId: string, 
    title: string, 
    description: string,
    status: string,
    limitDate: string,
    creatorUserId: string
    ): Promise<void> => {
        try {
            await connection.raw(
              `
            INSERT INTO Tasks VALUES (
                "${taskId}", "${title}", "${description}", "${status}", "${limitDate}", "${creatorUserId}"
            )
              `  
            )
        } catch (err) {
            throw new Error(err.message);
        }
    }
    /*createTask(
              "004", 
              "Pagar o aluguel", 
              "Trabalhar pra pagar o aluguel",
              "doing",
              "2020-09-07",
              "1591992542886"
              )*/

/////////////////////////////////////////////// FUNÇÃO QUE PEGA TASKS PELO ID///////////////////////////////////////
const getTaskBuilder = async (taskId:string): Promise<any> => {
    try{
        const result = await connection.select("*").from ("Tasks").where({taskId: taskId})
        return result
    } catch(err){
        throw new Error ("Tarefa não encontrada")
    }
} 

//////////////////////////////////////////////////////////////////////////////////////////////


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

//////////////////////////////// END POINT EDITAR NOME E APELIDO USUÁRIO  //////////////////////////

const endPointEditUser = async (req: Request, res: Response): Promise<any> => {
    try{
        const id = req.params.id
        const name = req.body.name 
        const nickname = req.body.nickname
        
        await editUser (id, name, nickname)

        res.status(200).send({message: `As informações de ${id} foram atualizadas pra ${name} e ${nickname}`});
    }catch(err){
        res.status(400).send({error: err.message});
    }
}
app.put("/user/edit/:id", endPointEditUser)

/////////////////////////////////END POINT CRIAR TAREFA ///////////////////////////////////////////////
const endPointCreateTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const newTask = {
            taskId: Date.now().toString(),
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            limitDate: req.body.limitDate,
            creatorUserId: req.body.creatorUserId
        }
        await createTask(newTask.taskId, newTask.title, newTask.description, newTask.status, newTask.limitDate, newTask.creatorUserId)
        res.status(200).send({message: "Tarefa adicionada com sucesso"})
    } catch(err){
        res.status(400).send({message:"Não foi possível adicionar a tarefa"})
    }    
}
app.post("/task", endPointCreateTask)
/////////////////////////////////END POINT PEGAR TAREFA PELO ID ///////////////////////////////////////////////
const endPointGetTaskById = async (req: Request, res: Response) => {
    try {
        const taskId = req.params.taskId;
        const result = await getTaskBuilder(taskId)

        res.status(200).send(result[0]);
    } catch(err) {
        res.status(400).send({message:`Não foi possível encontrar a tarefa de id ${getTaskBuilder.arguments}`})
    }
}
app.get("/task/:taskId", endPointGetTaskById)

