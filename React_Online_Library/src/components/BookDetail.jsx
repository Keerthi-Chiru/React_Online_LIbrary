import { useParams } from 'react-router-dom';
import cover from '../assets/books.png'; 
import books from '../utils/books';
import './bookDetail.css';


export default function BookDetail() {
    const param = useParams()

    for (let i = 0; i < books.length; i++) {     // Loop through the books array to find the book with the matching id
        if (books[i].id === param.id) {
            let book = books[i];
 

    return (
        <>
            <div className="book-detail-container">
            
            <div className="book-detail">
                
                <img src={cover} alt="Book Cover" className="book-cover" width="150px" height="150px" />
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Publisher: {book.publisher}</p>
                <p>{book.description}</p>
                <p>Category: {book.category}</p>
            </div>
            <button className="back-button" onClick={() => window.history.back()}>Back</button>
            </div>
        </>
    )
}}
}

