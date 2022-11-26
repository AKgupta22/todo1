import React from "react";
import PropTypes from "prop-types";

export default function ListCheckBox({ item, marked, i }) {
  return (
    <div>
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        id={`${i}CheckboxStretched`}
        checked={item.status === "done" ? true : false}
        onChange={() => marked(i)}
      />
      <label
        className="form-check-label stretched-link"
        for={`${i}CheckboxStretched`}
      >
        {item.task}
      </label>
    </div>
  );
}
ListCheckBox.propTypes = {
  marked: PropTypes.func,
  item: PropTypes.object,
  i: PropTypes.number,
};
