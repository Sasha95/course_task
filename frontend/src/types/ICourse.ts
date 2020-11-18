import { States } from "./States";

export interface ICourse {
    id?: number;
    title: string;
    status: States;
    img: string;
    date: string;
    data: {
        get: {
            first: string;
            second: string;
        };
        what: {
            first: string;
            second: string;
        };
        how: {
            first: string;
            second: string;
        };
    }
}