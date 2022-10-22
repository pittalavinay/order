import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
const Header = ({val}) => {
  return (
    <div>
       <nav className='navbar navbar-light bg-dark'>
            <a>Restaurant</a>
<Link to="/Order"><button className='btn btn-primary'>Orders <span className='badge bg-danger'>{val.length}</span></button></Link>
        </nav>
    </div>
  )
}
const mapStateToProps=state=>(
  {
    val:state.orderreducer
  }
)
export default connect(mapStateToProps) (Header)
