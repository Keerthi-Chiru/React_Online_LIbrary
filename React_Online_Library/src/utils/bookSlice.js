import { createSlice } from '@reduxjs/toolkit';
import books from './books';

const savedBooks = JSON.parse(localStorage.getItem('books'));
const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books:savedBooks,
    },
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
            localStorage.setItem('books', JSON.stringify(state.books));
        }
        

    }

});
console.log(bookSlice.books);


export default bookSlice.reducer;
export const {addBook} = bookSlice.actions;