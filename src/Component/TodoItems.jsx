import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
export default function TodoItems({
  editable,
  item,
  i,
  editTodo,
  setEditable,
  marked,
  deleteTodo,
  setEditvalue,
}) {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          {editable !== i ? (
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
          ) : (
            ""
          )}
        </div>
        {editable === i ? (
          <form className="w-100" onSubmit={() => editTodo(i)}>
            {" "}
            <input
              type="text"
              className="form-control"
              defaultValue={item.task}
              required
              onChange={(E) => setEditvalue(E.target.value)}
            />
          </form>
        ) : (
          ""
        )}
        {item.status === "done" ? (
          <span className="badge bg-secondary mx-3">Completed</span>
        ) : (
          ""
        )}
      </li>
      <div className="d-flex justify-content-between">
        <Button
          names={"btn-sm btn-danger mt-2 mb-2"}
          text={<i className="fa-sharp fa-solid fa-trash"></i>}
          handler={() => deleteTodo(i)}
        />
        <Button
          names={"btn-sm btn-danger mt-2 mb-2"}
          text={<i className="fa-solid fa-pen"></i>}
          handler={() => setEditable(i)}
        />
      </div>
    </>
  );
}

TodoItems.propTypes = {
  editable: PropTypes.number,
  item: PropTypes.object,
  i: PropTypes.number,
  editTodo: PropTypes.func,
  setEditable: PropTypes.func,
  marked: PropTypes.func,
  deleteTodo: PropTypes.func,
  setEditvalue: PropTypes.func,
};
