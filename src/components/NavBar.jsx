import { Link } from "react-router-dom";
import "./NavBar.css"
function NavBar() {
    return(
        <div id="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/new">Add New</Link>
        </div>
    )
}

export default NavBar;