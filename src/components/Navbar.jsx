import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: "15px", background: "#111", color: "white" }}>
            <Link to="/" style={{ marginRight: "20px", color: "white"}}>Home</Link>
            <Link to="/python" style={{ marginRight: "20px", color: "white"}}>Python</Link>
            <Link to="/cpp" style={{ color: "white"}}>C++</Link>
        </nav>
    );
}

export default Navbar;