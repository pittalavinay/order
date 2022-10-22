const initial=[]

export default function orderreducer(state=initial,action)
{
    const{type,payload}=action;
switch(type)
{
    case "order":
        return [...state,payload]
    case "remove":
        return state.filter(product=>product.name!==payload.name)
    default:
        return state;
}
}