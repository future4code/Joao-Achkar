import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";

const app = express()

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

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

//função que busca um ator pelo nome
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `)
    return console.log(result[0][0])
}
//searchActor("Tony Ramos")

//  função que recebe um gender e retorna a quantidade de itens na tabela Actor com esse gender. 
//Para atrizes, female e para atores male
const countActorsBygender = async(gender: string): Promise<any> => {
    try {
        const result = await connection.raw(`
        SELECT COUNT(*) as Count FROM Actor WHERE gender = "${gender}"
        `)
        const count = result[0][0].Count;
        return console.log(count);
    } catch(error) {
        console.error("deu ruim")
    }
} 
//countActorsBygender("mulher")

//Exemplo query builder que cria ator
const createActor = async (
    id: string,
    name: string,
    salary: number,
    birth_date: Date,
    gender: string,
    favorite_ice_cream_flavor: string,
    type: string

  ): Promise<void> => {
    await connection("Actor")
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: birth_date,
        gender: gender,
        favorite_ice_cream_flavor: favorite_ice_cream_flavor,
        type: type
      })
      .into("Actor");
  };
 // console.log(createActor("003", "Fernanda Torres", 1500000, new Date("1983-05-11"), "mulher", "morango", "não" ))

  //a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

  const updateActor = async(id: string, salary: number): Promise<any> => {
      try {
          await connection("Actor")
          .update({              
            salary: salary
              })
            .where({id:id})

            } catch(error){
                console.error("deu erro")
            }
      }
    //  console.log(updateActor("004", 800000))
  

  //b) Uma função que receba um id e delete um ator da tabela
   const deleteActor = async(id: string): Promise<void> => {
       try {
           await connection("Actor")
           .del()
           .where({id:id})
       }catch(error){
           console.error("não deletou")
       }
   }
   deleteActor("006")

   //c)Uma função que receba um gender e devolva a 
   //média dos salários de atrizes ou atores desse gender
   const avgSalaryByGender = async(gender: string): Promise<any> => {
       try{
           const result = await connection("Actor")
           .avg("salary as average")
           .where({
               gender: gender
           })
           return console.log(result[0].average)
       }catch(err){
           console.error("não retornou os slários")
       }
   }
   avgSalaryByGender("mulher")