import React from "react";
import PropTypes from "prop-types";

export default function FilterCheckBox(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
        onClick={() => props.filter(`${props.type}`)}
        defaultChecked={props.check}
      />
      <label className="form-check-label" for="flexRadioDefault1">
        <h4>{props.text}</h4>
      </label>
    </div>
  );
}
FilterCheckBox.propTypes = {
  filter: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string,
  check: PropTypes.bool,
};
