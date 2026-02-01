import React from 'react'
import { Hero } from './Hero'
import About from './About'
import { Projects } from './projects'
import { Contact } from './Contact'
import { Footer } from '../navigation/Footer'

function Index() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Index
