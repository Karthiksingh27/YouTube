import YTLogo from '../images/youtube_logo_icon_167938.png'
import '../styles/navbar.css'
import notification from '../images/notification.png'
import vedio from '../images/createVedio.png'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
             <div  className='logo'>
                <img width={100}  src={YTLogo} alt=""/>
            </div>
            <div  className='searchBar'>
                <input type='text' placeholder='search'/>
            </div>
            <div  className='userOptions'>
                <div className="navlinks">
                    <Link to="/">Home </Link>
                    <Link to="/add-video">Add video</Link>
                </div>
                <div className='notification'>
                <img  width={30} src={notification} alt="" />
                </div>
                <div className='vedio'>
                <img  width={30} src={vedio} alt=""  />
                </div>
                <div className='profile'>
                <h4>K</h4>
                </div>
            </div>
        </div>
    );
}
export default Navbar;