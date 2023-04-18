import React from "react"
import { useState, useEffect } from "react"
import Layout from "./Layout"
import Admin from "./Admin"
import User from "./User"
import './style/Home.css'


const Home = () => {

  const [sector, setSector] = useState('')
  const [employees, setEmployees] = useState()

  const defineSector = (sectorPrm) => {
    setSector(sectorPrm)
  }

  function ContentNormal () {
    if (sector === 'admin') {
      return (
        <Admin />
      )
    }
    else if (sector === 'user') {
      return (
        <User />
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  return (
    <Layout>
      <div>
        <div id="home-section1-normal">
          <h1>Generation Thailand</h1>
          <h1>React - Assessment</h1>
          <div id="home-section1-normal-btn">
            <button onClick={() => defineSector('user')}>User Home Sector</button>
            <button onClick={() => defineSector('admin')}>Admin Home Sector</button>
          </div>
        </div>
        <ContentNormal />
      </div>
    </Layout>
  )

}



export default Home
