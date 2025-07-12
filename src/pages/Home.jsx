import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Review from '../components/Review'
import Newsletter from '../components/Newsletter'
import Instagram from '../components/Instagram'
import About from '../components/About'
import Collection from '../components/Collection'
import FeatureProducts from '../components/FeatureProducts'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <FeatureProducts/>
      <Collection/>
      <Review/>
      <Instagram/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
