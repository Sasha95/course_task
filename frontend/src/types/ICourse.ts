import { KeyStates } from "./States";

export interface IData {
    caption: {
        first: string;
        second: string;
    }
}

export interface ICourse {
    id: number;
    title: string;
    status: KeyStates;
    img: string;
    date: string;
    data: IData[];
}
