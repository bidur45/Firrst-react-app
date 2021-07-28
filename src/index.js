  
import React from 'react';
import ReactDOM from 'react-dom'

import './index.css'


const books = [{
  id:1,
  img: 'https://m.media-amazon.com/images/I/714PYe6ugmL._AC_UY218_.jpg',
  title: 'High Performance Habits',
  author: 'Brendon Burchard'
},
{
  id:2,
  img: 'https://m.media-amazon.com/images/I/71A8HHN+PgS._AC_UY327_FMwebp_QL65_.jpg',
  title: "I Alone Can Fix It: Donald J. Trump's Catastrophic Final Year",
  author: 'Carol Leonnig and Philip Rucker '
},
{
id:3,
  img: 'https://images-na.ssl-images-amazon.com/images/I/91CGnSmKmTS._AC_UL200_SR200,200_.jpg',
  title: 'The Paper Palace: A Novel',
  author: 'Miranda Cowley Heller'
},
{
  id:4,
    img: 'https://m.media-amazon.com/images/I/71Yw7yNnDNL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'This Country: My Life in Politics and History',
    author: 'Chris Matthews '
  }]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((Books)=> (<Book key={books.id} {...Books}/>))}
    </section>
  )
}


const Book = (props) => {
  const checkhandler= ()=> alert('I am clicked')
  const examplehandler = (title)=> (console.log(title))

  const {img,title,author} = props
  return (
    <article className='book' onMouseOver = {() => console.log(title)}>
    <img src = {img} alt = '' />
    <h1> {title}  </h1>
    <h4 onMouseOver = {()=> console.log(author)}> {author} </h4>
    <button type="button" className="button" conClick={checkhandler}> Click Me</button>
    <button type="button" onClick={()=> examplehandler(title)}>Button</button>
    </article>

  )
}


ReactDOM.render(<BookList />, document.getElementById('root'));