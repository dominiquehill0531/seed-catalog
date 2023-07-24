import { Plant } from "./plant";

export class Seed {

    plantType!: Plant;
    variety!: string;
    quantity!: number;

    constructor(typeOfPlant: Plant, vty: string, qty: number) {
        this.plantType = typeOfPlant;
        this.variety = vty;
        this.quantity = qty;
    }
}
