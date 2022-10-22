import React from 'react'
import { connect } from 'react-redux'
import { remove } from './tablein'
import { Link } from 'react-router-dom'
const Order = ({val,remove}) => {
  return (
    <div>
      <nav className='navbar navbar-light bg-dark'>
      <Link to="/"><button className='btn btn-primary'>Home</button></Link>
            <a>Restaurant</a>
            <button className='btn btn-primary'>Orders <span className='badge bg-danger'>{val.length}</span></button>
        </nav><br/>
       <div className='row'>
      {val.map(item=><div className='col-md-4'><div class="card" style={{width:400}}>
  <img class="card-img-top" src={item.image} alt="Cardimage"/>
  <div class="card-body">
    <h4 class="card-title">{item.name}</h4>
    <h5 class="card-title">Rs:{item.prize}</h5>
    <h6 class="card-title">tableno:{item.tableno}</h6>
    <button className='btn btn-danger' onClick={()=>remove(item)}>remove</button>
  </div>
</div></div>)}
      </div>
    </div>
  )
}
const mapStateToProps=state=>(
  {
    val:state.orderreducer
  }
)
export default connect(mapStateToProps,{remove})(Order)
