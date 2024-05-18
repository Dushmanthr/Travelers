import Hero from '@/Components/Helper/Hero'
import MobileNav from '@/Components/Helper/MobileNav'
import Navbar from '@/Components/Helper/Navbar'
import TopDestination from '@/Components/Helper/TopDestination'
import React, { useState } from 'react'

const HomePage = () => {

  const [nav, setNav] = useState(false)
  const openNavHandler = () => setNav(true)
  const closeNavHandler = () => setNav(false)
  return (
    <div className="overflow-x-hidden">
      <MobileNav nav={nav} closeNav={closeNavHandler} />
      <Navbar openNav={openNavHandler} />
      <Hero/>
      <TopDestination/>
    </div>
  )
}

export default HomePage
