import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import Badge from "./Badge";
import ListCheckBox from "./ListCheckBox";
import ListForm from "./ListForm";

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
            <ListCheckBox item={item} marked={marked} i={i} />
          ) : (
            ""
          )}
        </div>
        {editable === i ? (
          <ListForm
            editTodo={editTodo}
            i={i}
            item={item}
            setEditvalue={setEditvalue}
          />
        ) : (
          ""
        )}
        {item.status === "done" ? <Badge text="Completed" /> : ""}
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
