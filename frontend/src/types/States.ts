export const StatusStates = {
    0: "Draft",
    1: "Archived",
    2: "Published",
    3: "Deleted",
} 

export type States = keyof typeof StatusStates;
// export type State1 = typeof States[keyof typeof States];