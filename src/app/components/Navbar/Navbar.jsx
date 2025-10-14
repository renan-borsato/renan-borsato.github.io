import Link from "next/link";
import "./Navbar.css";
import PropTypes from "prop-types";

function Navbar({ options }) {
  return (
    <nav data-testid="nav" className="navbar">
      <ul data-testid="ul">
        {(options || []).map((option, index) => (
          <li key={index} data-testid={`li${index}`}>
            <Link data-testid={`a${index}`} className="link" href={option.path}>
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navbar;
