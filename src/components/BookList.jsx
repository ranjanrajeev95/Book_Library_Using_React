import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
   const { books, removeBook } = useContext(BookContext)

   return (
      books.length ? (
         <div className="book-list">
            <ul>
               {books.map(book => (
                  <BookDetails key={book.id} book={book}  removeBook={removeBook}/>
               ))}
            </ul>
         </div>
      ) : (
         <div className='empty'>
            <h4>Sorry there is no book :</h4>
         </div>
      )
   )
}

export default BookList
