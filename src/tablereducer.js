const initial={
    tablenum:null
}

export default function tablereducer(state=initial,action)
{
const{type,payload}=action;
switch(type)
{
    case "addtable":
        return {...state,tablenum:payload}
    case "removetable":
        return {...state,tablenum:payload}
    default:
        return state
}
}