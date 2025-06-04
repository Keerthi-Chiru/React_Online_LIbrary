import './nav.css';
import home from '../assets/home.png';
import book from '../assets/book.png';
import add from '../assets/add.png';
import { Link } from 'react-router-dom';



export default function Nav(){
    return(
        <>
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <Link to="/"><img src={home} className='icons'></img>Home</Link>
                    </li>
                    <li>
                        <Link to="/browse"><img src={book} className='icons'></img>Browse Books</Link>
                    </li>
                    <li>
                        <Link to="/add"><img src={add} className='icons'></img>Add Book</Link>    
                    </li>
                </ul>
            </nav>
        </>
    )
}