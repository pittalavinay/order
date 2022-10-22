import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux'
import { setfil } from './tablein'
import { order } from './tablein'
import './App.css'
const Card = ({fil,order,tableno}) => {
    const[data,setdata]=useState([])
    const[clone,setclone]=useState([])
    useEffect(()=>{fetch("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json ")
    .then(response=>response.json()).then(value=>{setdata(value.items);
    setclone(value.items);})},[])
    useEffect(()=>{
      if(fil!="All Items")
      {
        let vinay=clone.filter(item=>item.category===fil);
        setdata(vinay)
      }
      else{
        setdata(clone)
      }
    }
  ,[fil])
  const Handler=(image,name,prize)=>
  {
order(image,name,prize,tableno)
  }
  return (
    <div>
        <div className='row'>
      {data.map(item=><div className='col-md-4'><div class="card" style={{width:400}}>
  <img class="card-img-top" src={item.url} alt="Cardimage"/>
  <div class="card-body">
    <h4 class="card-title">{item.name}</h4>
    <h5 class="card-title">Rs:{item.prize}</h5>
    <button className='btn btn-primary' onClick={()=>Handler(item.url,item.name,item.prize)}>order</button>
  </div>
</div></div>)}
      </div>
    </div>
  )
}
const mapStateToProps=state=>(
  {
    fil:state.filterreducer.filter,
    tableno:state.tablereducer.tablenum
  }
)
export default connect(mapStateToProps,{setfil,order}) (Card)
