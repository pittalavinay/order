export const addtable=(value)=>async dispatch=>
    {
dispatch({
    type:"addtable",
    payload:value
})
    }

    export const removetable=(value)=>async dispatch=>
    {
dispatch({
    type:"removetable",
})
    }


    export const setfil=(value)=>async dispatch=>{
        dispatch({
            type:"setfil",
            payload:value
        })
    }
    export const resetfil=(value)=>async dispatch=>{
        dispatch({
            type:"resetfil",
          
        })
    }

    export const order=(image,name,prize,tableno)=>async dispatch=>{
        dispatch({
            type:"order",
            payload:{image:image,
            name:name,
        prize:prize,
    tableno:tableno}
        })
    }
    export const remove=(value)=>async dispatch=>{
        dispatch({
            type:"remove",
            payload:value
        })
    }