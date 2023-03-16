import { ACCOUNT_TYPE, TAccount, MODELCAR_TYPE, TCar } from "./types";

export const accounts: TAccount[] = [
    {
        id: "a001",
        ownerName: "Ciclano",
        balance: 10000,
        type: ACCOUNT_TYPE.GOLD
    },
    {
        id: "a002",
        ownerName: "Astrodev",
        balance: 500000,
        type: ACCOUNT_TYPE.BLACK
    },
    {
        id: "a003",
        ownerName: "Fulana",
        balance: 20000,
        type: ACCOUNT_TYPE.PLATINUM
    }
];

export const cars : TCar[] = [
    {
        model: "Corolla",
        brand: "Toyota",
        year: 2023,
        type: MODELCAR_TYPE.SPORT
    },
    {
        model: "Ká",
        brand: "Ford",
        year: 2023,
        type: MODELCAR_TYPE.BASIC
    },
    {
        model: "Corolla-Cross",
        brand: "Toyota",
        year: 2023,
        type: MODELCAR_TYPE.SUV
    }
] 

