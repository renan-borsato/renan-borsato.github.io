import "./Button.css";
import PropTypes from "prop-types";

function Button({ children, onClick }) {
  return (
    <button data-testid="button" className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
