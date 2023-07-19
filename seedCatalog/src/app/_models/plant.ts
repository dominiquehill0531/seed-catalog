import { Layer } from "./layer";

export class Plant {

    name!: string;
    layer!: Layer;
    periodicity?: string;

    constructor(aName: string, aLayer: Layer, period?: string) {
        this.layer = aLayer;
        this.periodicity = period;
    }
}
