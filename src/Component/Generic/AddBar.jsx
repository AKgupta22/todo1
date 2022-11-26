import React from "react";
import PropTypes from "prop-types";

export default function AddBar({ postData, inputclass, todo, setTodo }) {
  return (
    <form className="mt-2" onSubmit={postData}>
      <div className="mb-3">
        <label className="form-label">Todo</label>
        <input
          type="text"
          className={inputclass}
          placeholder="Create your Todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
      </div>
      <button type="sumbit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}
AddBar.propTypes = {
  postData: PropTypes.func,
  inputclass: PropTypes.string,
  todo: PropTypes.string,
  setTodo: PropTypes.func,
};
