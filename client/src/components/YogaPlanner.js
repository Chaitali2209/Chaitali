import './YogaPlanner.css'

import React from 'react'
import Hero from './Hero.jsx'
import Programs from './Programs.jsx'
import Resons from './Resons.jsx'
import { NavBar } from './NavBar'
import { Footer } from './Footer'
export const YogaPlanner = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Programs />
      <Resons />
      <Footer />
    </div>
  )
}


