const initial={
    filter:"All Items"
}

export default function filterreducer(state=initial,action)
{
const{type,payload}=action;
switch(type)
{
    case "setfil":
        return {...state,filter:payload}
    case "resetfil":
        return {...state,filter:"All Items"}
    default:
        return state;
}
}