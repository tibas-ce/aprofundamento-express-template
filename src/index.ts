import express, { Request, Response } from 'express';
import cors from 'cors';
import { accounts, cars } from './database';
import { ACCOUNT_TYPE, TAccount, MODELCAR_TYPE, TCar } from './types';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!");
});

app.get("/accounts", (req: Request, res: Response) => {
    res.send(accounts);
});

//FIXAÇÃO
//createCar (POST)
app.post("/cars", (req: Request, res: Response) =>{
    const {model, brand, year, type} : TCar = req.body;
    const newCar : TCar = {
        model,
        brand,
        year,
        type
    };
    cars.push(newCar);
    res.status(201).send("Carro criado com sucesso!");
});

//getCarByModel (GET)
app.get("/cars/:model", (req: Request, res: Response) => {
    const model = req.params.model;
    const result : TCar = cars.find(car => car.model === model);
    res.status(200).send(result);
});

//deleteCar (DELETE)
app.delete("/cars/:model", (req: Request, res:Response) => {
    const model = req.params.model;
    const index = cars.findIndex(car => car.model === model)
    if(index >= 0){
        cars.splice(index, 1);
    };
    res.status(200).send("Carro deletado com sucesso");
});

//editCar (PUT)
app.put("/cars/:model", (req: Request, res: Response) => {
    const model = req.params.model;
    const newModel = req.body.model as string | undefined;
    const newBrand = req.body.brand as string | undefined;
    const newYear = req.body.year as number | undefined;
    const newType = req.body.type as MODELCAR_TYPE | undefined;
    const result : TCar = cars.find(car => car.model === model);
    if(result){
        result.model = newModel || result.model;
        result.brand = newBrand || result.brand;
        result.year = isNaN(newYear) ? result.year : newYear;
        result.type = newType || result.type;
    };
    res.status(200).send("Atualização realizada com sucesso!")
})

//AULA
//getAccountById
app.get("/account/:id", (req: Request, res:Response) => {
    const id = req.params.id;
    const result : TAccount = accounts.find(account => account.id === id);
    res.status(200).send(result);
});

//deleteAccount
app.delete("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const index = accounts.findIndex(account => account.id === id);
    if(index >= 0) {
        accounts.splice(index, 1);
    };
    res.status(200).send("Item deletado com sucesso.");
});

//editAccount
app.put("/account/:id", (req: Request, res: Response) => {
    const id = req.params.id;

    const newId = req.body.id as string | undefined;
    const newOwnerName = req.body.name as string | undefined;
    const newBalance = req.body.balance as number | undefined;
    const newType = req.body.type as ACCOUNT_TYPE | undefined;
    
    const result : TAccount = accounts.find(account => account.id === id);
    
    if(result){
        result.id = newId || result.id;
        result.ownerName = newOwnerName || result.ownerName;
        result.balance = isNaN(newBalance) ? result.balance : newBalance;
        result.type = newType || result.type;
    }

    res.status(200).send("Atualização realizada com sucesso!");
});