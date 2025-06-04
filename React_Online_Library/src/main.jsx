import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  BrowseBooks  from './components/BrowseBooks.jsx'
import Add from './components/Add.jsx'
import Error from './components/Error.jsx'
import BookList from './components/BookList.jsx'
import books from './utils/books.js'
import Homepage from './components/Homepage.jsx'
import BookDetail from './components/BookDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element:<>
        <Homepage />
        <BookList books={books} />
        </>
      },
      {
    path: '/browse',
    element: <BrowseBooks />
  },
  {
    path: '/add',
    element: <Add />
  },
  {
    path: '/book/:id',
    element: <BookDetail />,
  },
  {
    path: '/add',
    element: <Add />
  }
  
],
    errorElement: <Error />
    
}
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
