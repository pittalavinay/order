import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Home"
import Order from "./Order"
const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/Order" element={<Order/>}></Route>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App