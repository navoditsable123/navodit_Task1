import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" href="#">EVENTS</NavLink>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link active" to="/add">AddEvents</NavLink>
                        <NavLink className="nav-item nav-link" to="/show">ShowEvents</NavLink>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;