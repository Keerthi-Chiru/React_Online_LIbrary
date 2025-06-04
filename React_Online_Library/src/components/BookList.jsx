import Book from "./Book";
import "./booklist.css"
import { useSelector } from "react-redux";



export default function BookList({ books }) {
    const booksFromStore = useSelector((store) => store.book.books);
    console.log("Books:", booksFromStore);
    return (
        
        <div className="book-list">
            {booksFromStore.map((book) => (          
                <Book book={book} key={book.id} />
            ))}
        </div>
    );
}