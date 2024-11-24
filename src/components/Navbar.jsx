import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#159723" }}>
      <h1>Ayurvedic Skincare</h1>
      <div>
        <button>
          <Link to="/know-your-skin-type">Know Your Skin Type</Link>
        </button>
        <button>
          <Link to="/consult">Consult</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
