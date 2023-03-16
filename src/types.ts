export enum ACCOUNT_TYPE {
    BRONZE = "Bronze",
    SILVER = "Prata",
    GOLD = "Ouro",
    PLATINUM = "Platina",
    BLACK = "Black"
};

export type TAccount = {
    id: string,
    ownerName: string,
    balance: number,
    type: ACCOUNT_TYPE
};

export enum MODELCAR_TYPE {
    SPORT = "Esportivo",
    SUV = "SUV", 
    BASIC = "Básico"
};

export type TCar = {
    model: string,
    brand: string,
    year: number,
    type: MODELCAR_TYPE
}