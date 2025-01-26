import { Link } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="nav nav-item nav-link table">
      <Link to="/" id="home">
        <div className="nav">Home</div>
      </Link>

      <Link to="/SavedCandidates" id="candidates">
        <div className="nav">Potential Candidates</div>
      </Link>
    </nav>
  );
};

export default Nav;
