import React, { useState, useEffect } from 'react'
import PageLoader from './components/PageLoader'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import './index.css'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    // just to smilate the loading
    setTimeout(() => {
      setIsDataLoaded(true)
      setLoading(false)
    }, 5000)
  }

  return (
    <div>
      {loading ? <PageLoader /> : null}
      {isDataLoaded ? (
        <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      ) : null}
    </div>
  )
}

export default App
