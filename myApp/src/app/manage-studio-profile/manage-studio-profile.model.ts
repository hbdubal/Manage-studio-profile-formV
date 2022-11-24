export interface ManageStudioProfile {
    studioName?: string;
    studioAddress?: string;
    studioDesc?: string;
    studioEquipment?: string;
    state?:string;
    city?:string;
}
export class Country {
    countryId!: number;
    countryName!: string;
}

export class State {
    stateId!: number;
    stateName!: string;
    countryId!: number
}

export class City {
    cityId!: number;
    cityName!: string;
    stateId!: number;
}
