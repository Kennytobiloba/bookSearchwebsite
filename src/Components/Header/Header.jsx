import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import "./Header.css"
const Header = () => {
  return (
    <div className='holder'>
     <header className='header'>
     <Navbar />
     <div className='header-content flex flex-c text-center text-white'>
      <h2 className='header-title text-capitalize '> Find your book of choice</h2> <br />
      <p className='Header-text fs-18'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe accusantium exercitationem error, ea optio repellendus repellat soluta, deleniti amet suscipit sunt maxime recusandae unde ratione.
      </p>
      <SearchForm/>
     </div>
      
     </header>
    </div>
  )
}

export default Header