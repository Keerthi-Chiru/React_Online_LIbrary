import { useState } from 'react';
import books from '../utils/books';



export default function Filter(props){

    // const filteredBooks = books.filter(book =>
    //     book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     book.author.toLowerCase().includes(searchTerm.toLowerCase()) 
    // );
    console.log(props)
    function handleClick(e){
        SearchTerm= e;
    }
    

}