import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ResumeAI
      </Link>

      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/create">Create Resume</Link>
      </div>
    </nav>
  );
}

export default Navbar;