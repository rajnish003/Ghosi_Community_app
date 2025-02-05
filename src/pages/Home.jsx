import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero_img from '../components/Hero_img'
import Latest_post from '../components/Latest_post'
import Aboutghosi from '../components/Aboutus'
import Youth_vocal from '../components/Youth_vocal'
import NewsEvents from './NewsEvents'
// import Magazine from '../components/Magazine'
import Magazines from '../components/Magazines'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Latest_post/>
        <Hero_img/>
        <Aboutghosi/>
        <Youth_vocal/>
        <Magazines/>
        <Footer/>
    </div>
  )
}

export default Home
