export interface ManageStudioProfile {
    studioName?: string;
    studioAddress?: string;
    studioDesc?: string;
    studioEquipment?: string;
    state?:string;
    city?:string;
}
export class Country {
    id?: number;
    name!: string;
}

export class State {
    id!: number;
    name!: string;
    countryId!: number
}

export class City {
    id!: number;
    cityName!: string;
    stateId!: number;
}
