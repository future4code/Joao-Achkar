import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/IdGenerator";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";

dotenv.config();

const app = express(); //o express serve só pro seu código ficar disponível pela rede, poder acessar via postman por exemplo

app.use(express.json());

app.post("/signup", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    // Item c. Validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    };

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(userData.password)

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, hashPassword, userData.role);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      
     id,
     role: userData.role,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.post("/login", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(userData.password, user.password)

    if (!hashCompare) {
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: user.role
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    console.log(authenticationData)

    if (authenticationData.role !== "normal") {
      throw new Error("Only a normal user can access this funcionality");
    }

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator()
    const authenticationData = authenticator.getData(token);

    if (authenticationData.role !== "admin") {
      throw new Error("Only an admin user can access this funcionality");
    }
    const id = req.params.id;

    const userDatabase = new UserDatabase();
    await userDatabase.deleteUser(id);

    res.sendStatus(200)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
 // await BaseDataBase.destroyConnection() ??? n entendi esse BaseDataBase
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
