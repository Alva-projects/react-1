
import "../components/styles/Navbar.css"


function Navbar () {
    return(
        <>
        <div className="navbar-container">
            <div className="navbar-items">
                <ul>
                    <a href="#Home">Home</a>
                    <a href="#Portfolio">Portfolio</a>
                    <a href="#Contact">Contact</a>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;