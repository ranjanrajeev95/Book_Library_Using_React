import React, { useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
   const { dispatch } = useContext(BookContext)
   const [title, setTitle] = useState('')
   const [author, setAuthor] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch({type:'ADD_BOOK', book:{title,author}})
      setTitle('')
      setAuthor('')
   }
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               placeholder="Title"
               required
            />
            <input
               type="text"
               value={author}
               onChange={(e) => setAuthor(e.target.value)}
               placeholder="Author"
               required
            />
            <input type="submit" value="Add" />
         </form>
      </div>
   )
}

export default BookForm
