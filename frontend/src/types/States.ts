export enum StatusStates {
    "Draft" = 0,
    "Archived" = 1,
    "Published" = 2,
    "Deleted" = 3,
    "All" = 4,
};

export type States = keyof typeof StatusStates;
export type KeyStates = Extract<keyof States, StatusStates>;

type SetDifference<A, B> = A extends B ? never : A;

export type Status = SetDifference<States, "All">