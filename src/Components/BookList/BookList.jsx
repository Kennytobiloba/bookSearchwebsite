import React from 'react'
import { useGlobalContext } from '../../context';
import Loader from "../Loader/Loader"
import coveringImg from "../../assets/cover_not_found.jpg"
import "./BookList.css"
import Book from './Book';

// cover_not_found.jpg

const BookList = () => {
  const {books,  loading, resultTitle} = useGlobalContext()
  const booksWithCovers = books.map((singleBooks)=>{
    return{
      ...singleBooks,
      // removing /works/ to get only id
      id: (singleBooks.id).replace("/works/", ""),
      cover_img: singleBooks.cover_id ? `https://covers.openlibrary.org/b/id/${singleBooks.cover_id}-L.jpg` : coveringImg
    }
  })

  console.log(booksWithCovers)
  if(loading) return <Loader/>
  return (
<section className='booklist'>
  <div className="container">
    <div className="section-title">
      <h2>{resultTitle}</h2>
    </div>
    <div className="booklist-content grid">
    {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
              <Book key={index} { ...item}/>
              )
            })
          }
    </div>
  </div>

</section>
  )
}

export default BookList