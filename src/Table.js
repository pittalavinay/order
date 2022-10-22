

import React,{useState}from 'react'
import {connect} from 'react-redux'
import "./App.css"
import { addtable } from './tablein'
const Table = ({addtable,varia}) => {
    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12];
    const inActive='btn btn-outline-primary m-2';
    const Active='btn btn-outline-primary m-2 active'
  return (
    <div><center className='mt-2'>
        <h2>please select your table</h2>
        {numbers.map((num,index)=>
        <div style={{display:'inline'}} key={index}>
           <button  className={varia===num?Active:inActive} onClick={()=>addtable(num)}>
            {num}
            </button>  
         </div>)}
         {varia}
            </center></div>
  )
}
const mapStateToProps=state=>
({
  varia:state.tablereducer.tablenum
})
export default connect(mapStateToProps,{addtable}) (Table)