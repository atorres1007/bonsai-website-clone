import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from './Photos/menu-icon.png';
import searchIcon from './Photos/search-icon.png';
function Navbar () {
    const [searchbar, setSearchbar] = useState('closed')
    return(
        <div>
            <nav className="navbar">
                <img className='menu-icon' src={menuIcon}/>
                <Link to = "/"><h1 className='navbar-title'>B O N S A I <span>II</span> P R O J E C T</h1></Link>
                <button className='search-icon-btn' onClick={() => setSearchbar('open')}><img 
                className='search-icon' src={searchIcon}/></button>
                {/*<input className='open' type='text' placeholder="Search..."/>*/}
            </nav>
 
        </div>
    );
}
export default Navbar;