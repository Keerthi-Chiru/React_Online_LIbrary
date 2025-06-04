import './home.css';
import openBook from '../assets/open-book.png';


export default function Homepage() {
    return (
        <> <div className="homepage">
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <img src={openBook} alt="Open Book" className="open-book-image" />
        <h1 style={{margin:"10px"}}>Welcome to the Online Library</h1>
        <img src={openBook} alt="Open Book" className="open-book-image" />
        </div>
        <p style={{margin:"0px", fontSize:"18px"}}>One Stop destination for all your reading needs</p>

        </div>
        <div className="categories">
            <h2 style={{fontSize:"30px", margin:"10px 0px 0px 5px"}}>Categories</h2>
            <ul className='category-list'>
                <li>Fiction</li>
                <li>Non-Fiction</li>
                <li>Science</li>
                <li>History</li>
                <li>Technology</li>
            </ul>
        </div>
        </>

        )
        }
        