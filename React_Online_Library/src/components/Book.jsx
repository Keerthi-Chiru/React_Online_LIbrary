import BookCover from "../assets/books.png"
import"./book.css";
import { Link } from "react-router-dom";

export default function Book(book){
    return (
        <>
            <div className="book">
                <img src={BookCover} alt="Book Cover" className="book-cover" width="150px" height="150px"/>
                <h3>{book.book.title}</h3>
                <p >Author: {book.book.author}</p>
                <p >Publisher: {book.book.publisher}</p>
                <p >{book.book.description.slice(0,50)}</p>
                <p >Category: {book.book.category}</p>
                <Link to={`/book/${book.book.id}`}className="book-link">More info...</Link>

            </div>

        </>
    );
}