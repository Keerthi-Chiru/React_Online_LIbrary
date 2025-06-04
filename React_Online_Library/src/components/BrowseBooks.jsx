
import { useState, useEffect } from 'react';
import './browse.css';
import Book from './Book';
import { useSelector } from 'react-redux';




export default function BrowseBooks() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const booksFromStore = useSelector((store) => store.book.books);
    const [filteredBooks, setFilteredBooks] = useState(booksFromStore);



 
    function handleClick(value) { 
        setFilter(value);
    };
    function handleSearch() {
        console.log(filter);
        console.log(searchTerm);
        console.log(booksFromStore);
        setFilteredBooks(booksFromStore.filter((book) => {
            if (searchTerm === '' && filter === '') {
                return true; // No search term or filter, show all books
            }
            const matchesbook = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase()) 
            
            const matchesFilter = filter ? book.category.toLowerCase() === filter.toLowerCase() : true;
            return matchesbook && matchesFilter;

        }));
    }
    useEffect(() => {
        handleSearch();
    }, [searchTerm, filter]);


    console.log(filteredBooks);
    

    
    

    return (

        <>
        <div className='filter'>
        <input type="text" placeholder="Enter Title or Author" onChange={(e)=>setSearchTerm(e.target.value)} className='input'></input>
        <div className='filter-buttons'>
            <button onClick={()=>handleClick("Fiction")} className='button'>Fiction</button>
            <button onClick={()=>handleClick("Non-Fiction")} className='button'>Non-Fiction</button>
            <button onClick={()=>handleClick("Science")} className='button'>Science</button>
            <button onClick={()=>handleClick("History")} className='button'>History</button>
            <button onClick={()=>handleClick("Technology")} className='button'>Technology</button>
        </div>
        <button onClick={()=>{
            setFilter('');
            setSearchTerm('');
            setFilteredBooks(books);
            const input = document.querySelector('input[type="text"]');
            if (input) {
                input.value = ''; 
            }

        }} className='reset' >Clear Filter</button>
        

        </div>

            <div className="book-list">
            {filteredBooks.map((book) => (
            <Book key={book.id} book={book} />
                        ))}
        </div>
        
        </>
    )
        
        
        
        
}
