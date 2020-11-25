import { Status, StatusStates } from "../types/States";

export const StateMachine = (status: Status) => {
    if (status==="Archived") {        
        return [StatusStates[StatusStates.Draft] as Status]
    } else if(status==="Deleted"){
        return [StatusStates[StatusStates.Archived]  as Status]
    }else if(status==="Published"){
        return [StatusStates[StatusStates.Draft]  as Status]
    }else{
        return [
            StatusStates[StatusStates.Archived] as Status, StatusStates[StatusStates.Published]  as Status
        ]
    }
}