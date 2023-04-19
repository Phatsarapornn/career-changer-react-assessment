import './style/Navbar.css';

const Navbar = () => {
    return (
        <div id="navbar">
            <ul id="navbar-right">
                <li><a href={'/'}>Home</a></li>
                <li><a href={'/Owner'}>Owner</a></li>
            </ul>
        </div>
    )
}

export default Navbar