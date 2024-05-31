import './CategoryPage.css';
import { Link } from 'react-router-dom';

function CategoryPage() {
    return (
        <>
            <div className='categories'>
                <div className='category-btn'>
                    <Link to="/spanish">
                        <img className="image" src="./src/img/spanish3.jpg" alt="" />
                    </Link>
                    <h1>SPANISH</h1>
                </div>
                <div className='category-btn'>
                    <Link to="/math">
                        <img className="image" src="./src/img/mathematics.png" alt="" />
                    </Link>
                    <h1>MATH</h1>
                </div>
                <div className='category-btn'>
                    <Link to="/coding">
                        <img className="image" src="./src/img/coding.jpg" alt="" />
                    </Link>
                    <h1>CODING</h1>
                </div>
                <div className='category-btn'>
                    <Link to="/science">
                        <img className="image" src="./src/img/sciences.avif" alt="" />
                    </Link>
                    <h1>SCIENCE</h1>
                </div>
            </div>
        </>
    );
}

export default CategoryPage;
