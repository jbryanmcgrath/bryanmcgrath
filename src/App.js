import React, { useState } from 'react';
import Nav from './components/Nav/navbar';
import About from './components/About/about';
import ContactForm from './components/ContactForm/contactform';
import Project from './components/Projects/project';



function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    if (currentPage === 'home') {
      return <About />
    } else if (currentPage === 'projects') {
      return <Project />
    } else if (currentPage === 'contact') {
      return <ContactForm />
    }
  }
  return (
    <div>

      <Nav setCurrentPage={setCurrentPage} />
      <main>
        {
          renderPage()
        }
      </main>
    </div>
  )
}

export default App;
