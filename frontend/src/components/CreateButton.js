import React from "react";
import { Link } from "react-router-dom";

const CreateButton = () => {
  return (
    <Link to="/create">
      <a className="btn-floating btn-large waves-effect waves-light red create-btn-custom-styles">
        <i className="material-icons">add</i>
      </a>
    </Link>
  );
};

export default CreateButton;
