import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero_img from '../components/Hero_img'
import Latest_post from '../components/Latest_post'
import AboutUs from '../pages/AboutUs'
import Youth_vocal from '../components/Youth_vocal'
import NewsEvents from './NewsEvents'

const Home = () => {
  return (
    <div>
        <Latest_post/>
        <Hero_img/>
        <AboutUs/>
        <Youth_vocal/>
        <NewsEvents/>
    </div>
  )
}

export default Home
