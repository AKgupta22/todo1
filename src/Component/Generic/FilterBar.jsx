import React from "react";
import PropTypes from "prop-types";
import FilterCheckBox from "./FilterCheckBox";

export default function FilterBar({ filter }) {
  return (
    <div className="d-flex justify-content-between filterbar">
      <FilterCheckBox filter={filter} type="All" text="All" check={true} />
      <FilterCheckBox
        filter={filter}
        type="done"
        text="Completed"
        check={false}
      />
      <FilterCheckBox
        filter={filter}
        type="pending"
        text="Incompleted"
        check={false}
      />
    </div>
  );
}
FilterBar.propTypes = {
  filter: PropTypes.func,
};
