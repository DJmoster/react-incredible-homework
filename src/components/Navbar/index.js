import './style.css';
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div>
                <h1>Incredible</h1>
                <div>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'active' : undefined }><h3>Home</h3></NavLink>
                    <NavLink to='/About'><h3>About</h3></NavLink>
                    <NavLink to='/Gallery'><h3>Gallery</h3></NavLink>
                    <NavLink to='/Contact'><h3>Contact</h3></NavLink>
                </div>
            </div>
            <div className="icons">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-solid fa-paper-plane"></i>
            </div>
        </nav>
    );
}