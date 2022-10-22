import React,{useState} from 'react'
import {connect} from 'react-redux'
import { setfil } from './tablein'
import { resetfil } from './tablein'
const Filter = ({fil,setfil,resetfil}) => {
    const items=["All Items","Rice Items","Cold Drinks","Pizza","Hot Drinks"]
  
  return (
    <div>
        <center>
            <h4>Filter</h4>
        <select name="filter" className='p-1' onChange={(e)=>setfil(e.target.value)}>
            {
              items.map((item,index)=><option value={item} key={index}>{item}</option>)
            }
        </select>
        {fil}
        </center>
        <br/>
    </div>
  )
}
const mapStateToProps=state=>
({
  fil:state.filterreducer.filter
})
export default connect(mapStateToProps,{setfil,resetfil}) (Filter)
