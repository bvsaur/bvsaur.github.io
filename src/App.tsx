import { useState } from 'react'
import { About, Footer, Head, Projects, Skills } from './components'
import Modal from './components/Modal'

const App = () => {
  return (
    <div className="overflow-hidden">
      <Head />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <Modal />
    </div>
  )
}

export default App
