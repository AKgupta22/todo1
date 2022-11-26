import React from "react";
import PropTypes from "prop-types";
export default function FilterBar({ filter }) {
  return (
    <>
      <div className="d-flex justify-content-between filterbar">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onClick={() => filter("All")}
            defaultChecked
          />
          <label className="form-check-label" for="flexRadioDefault1">
            <h4>All</h4>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onClick={() => filter("done")}
          />
          <label className="form-check-label" for="flexRadioDefault2">
            <h4>Completed</h4>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            onClick={() => filter("pending")}
          />
          <label className="form-check-label" for="flexRadioDefault3">
            <h4>Incompleted</h4>
          </label>
        </div>
      </div>
    </>
  );
}
FilterBar.propTypes = {
  filter: PropTypes.func,
};
