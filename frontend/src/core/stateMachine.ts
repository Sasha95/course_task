import { Status, StatusStates } from "../types/States";

export const StateMachine = (status: Status) => {
    switch (status) {
        case "Archived":
            return [StatusStates.Draft]
        case "Deleted":
            return [StatusStates.Archived]
        case "Published": 
            return [StatusStates.Draft]
        case "Draft":
            return [StatusStates.Archived, StatusStates.Published]
        default:
            break;
    }
}