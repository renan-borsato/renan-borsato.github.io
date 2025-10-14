import { useState } from "react";
import "./Dropdown.css";
import PropTypes from "prop-types";

const Dropdown = ({ onPreview, onEdit, onClone, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      onDelete();
      setIsOpen(false);
    }
  };

  return (
    <div data-testid="dropdown" className="dropdown">
      <button
        data-testid="menuButton"
        className="dropdown-btn"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-container">
          <button
            data-testid="previewButton"
            className="dropdown-item"
            onClick={() => {
              onPreview();
              setIsOpen(false);
            }}
          >
            Preview
          </button>
          <button
            data-testid="editButton"
            className="dropdown-item"
            onClick={() => {
              onEdit();
              setIsOpen(false);
            }}
          >
            Edit
          </button>
          <button
            data-testid="cloneButton"
            className="dropdown-item"
            onClick={() => {
              onClone();
              setIsOpen(false);
            }}
          >
            Clone
          </button>
          <div className="dropdown-divider"></div>
          <button
            data-testid="deleteButton"
            className="dropdown-item danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  onPreview: PropTypes.func,
  onEdit: PropTypes.func,
  onClone: PropTypes.func,
  onDelete: PropTypes.func,
};

Dropdown.defaultProps = {
  onPreview: () => {},
  onEdit: () => {},
  onClone: () => {},
  onDelete: () => {},
};

export default Dropdown;
