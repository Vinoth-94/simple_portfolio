import { useState } from 'react'

import Navigation from './Navigation'
import About from './About'
import Experience from './/Experience'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Awards from './Awards'
import Contact from './Contact'


function App() {


  return (
    <div className="App">

      <Navigation />
      <About />
      <Experience />
      {/* <Education /> */}
      <Skills />
      <Projects />

      <Contact />
      {/* <Awards /> */}
      
    </div>
  )
}

export default App
