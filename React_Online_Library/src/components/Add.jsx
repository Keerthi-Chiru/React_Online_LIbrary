    import { useState } from 'react';
    import { useSelector } from 'react-redux';
    import { useDispatch } from 'react-redux';
    import { addBook } from '../utils/bookSlice';
    import { useNavigate } from 'react-router-dom';
    import './add.css'





    export default function Add() {

            const booksFromStore = useSelector((store) => store.book.books);
    const [data, setData] = useState({
        "id": booksFromStore.length + 1,
        "title": "",
        "author": "",
        "published": "",
        "publisher": "",
        "pages": 0,
        "description": "",
        "website": "",
        "category": ""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function add(e) {
        e.preventDefault();
        if (data.title === "" || data.author === "" || data.publisher === "" || data.published === "" || data.pages === 0 || data.description === "" || data.website === "" || data.category === "") {
            alert("Please fill all the fields");
            return;
        }
        if (data.pages < 0) {
            alert("Number of pages cannot be negative");
            return;
        }
        dispatch(addBook(data));
        alert("Book added successfully");

        navigate('/browse');

    }
        




        return(
            <div className='add-container'>
            <h1 className='heading'>Add Books</h1>
            <p className='subheading'>Add books to your library by entering details.</p>
            <form className='form' onSubmit={add}>
                <input type="text" placeholder="Enter Title" className='input' onChange={(e)=> setData({...data, "title":e.target.value})} ></input>
                <input type="text" placeholder="Enter Author" className='input' onChange={(e)=> setData({...data, "author":e.target.value})}></input>
                <input type="text" placeholder="Enter Publisher" className='input' onChange={(e)=> setData({...data, "publisher":e.target.value})}></input>
                <input type="date" placeholder="Enter Published Date" className='input' onChange={(e)=> setData({...data, "published":e.target.value})}></input>
                <input type="number" placeholder="Enter Number of Pages" className='input' onChange={(e)=> setData({...data, "pages":e.target.value})}></input>
                <input type="text" placeholder="Enter Description" className='input' onChange={(e)=> setData({...data, "description":e.target.value})}></input >
                <input type="text" placeholder="Enter Website" className='input' onChange={(e)=> setData({...data, "website":e.target.value})}></input>
                <div className='radio-buttons' >
                    <label onChange={(e) => setData({ ...data, "category": e.target.value })}>
                        <input type="radio" name="category" value="Fiction" /> Fiction
                    </label>
                    <label onChange={(e) => setData({ ...data, "category": e.target.value })}>
                        <input type="radio" name="category" value="Non-Fiction" /> Non-Fiction
                    </label >
                    <label onChange={(e) => setData({ ...data, "category": e.target.value })}>
                        <input type="radio" name="category" value="Science" /> Science
                    </label>
                    <label onChange={(e) => setData({ ...data, "category": e.target.value })}>
                        <input type="radio" name="category" value="History" /> History
                    </label>
                    <label onChange={(e) => setData({ ...data, "category": e.target.value })}>
                        <input type="radio" name="category" value="Technology" /> Technology
                    </label >
                </div>
                <button type="submit" className='button' >Add Book</button>
            </form>
            </div>
        )
    }