import React from "react";
import PropTypes from "prop-types";

export default function ListForm({ editTodo, i, item, setEditvalue }) {
  return (
    <form className="w-100" onSubmit={() => editTodo(i)}>
      {" "}
      <input
        type="text"
        className="form-control"
        defaultValue={item.task}
        required
        onChange={(e) => setEditvalue(e.target.value)}
      />
    </form>
  );
}
ListForm.propTypes = {
  editTodo: PropTypes.func,
  item: PropTypes.object,
  i: PropTypes.number,
  setEditvalue: PropTypes.func,
};
