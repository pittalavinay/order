import React from 'react'
import Order from "./Order"
import Card from "./Card"
import Header from "./Header"
import Table from "./Table"
import Filter from './Filter'
const Home = () => {
  return (
    <div>
      <Header/>
      <Table/>
      <Filter/>
      <Card/>
    </div>
  )
}

export default Home
