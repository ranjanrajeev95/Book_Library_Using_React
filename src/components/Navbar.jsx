import React,{useContext} from 'react'
import {BookContext} from '../contexts/BookContext'

const Navbar = () => {
   const {books} = useContext(BookContext)

   return (
      <div className='navbar'>
         <h2>JavaScript Booklist for Begginers</h2>
         <h3>Currently you have {books.length} books</h3>
      </div>
   )
}

export default Navbar
