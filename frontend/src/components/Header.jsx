import { GoPerson } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
const Header = () => {

const bag = useSelector(store => store.bag);

    return <>
     <header>
        <div className="logo_container">
            <Link to="/"><img className="home" src="images/simplekart.png" alt="SimpleKart Home"/></Link>
        </div>
        <nav className="nav_bar">
            <Link to="#">Home</Link>
            <Link to="#">Clothing</Link>
            <Link to="#">Electronics</Link>
            <Link to="#">Health & Beauty</Link>
            <Link to="#">Sports</Link>
            
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action-container">
            <GoPerson />
                <span className="action_name">Profile</span>
            </div>

            <div className="action-container">
            <IoMdHeartEmpty />
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action-container" to="/bag">
            <BsHandbag />
                <span className="action_name">Bag</span>
                <span className="item_count">{bag.length}</span>
            </Link>
        </div>
    </header>
    </>
}

export default Header;