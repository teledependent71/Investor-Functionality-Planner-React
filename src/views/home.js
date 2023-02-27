import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Functionality Planner</title>
        <meta property="og:title" content="Investor Functionality Planner" />
      </Helmet>
    </div>
  )
}

export default Home
