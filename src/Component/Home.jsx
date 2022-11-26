import React, { useEffect, useState } from "react";
import FilterBar from "./Generic/FilterBar";
import AddBar from "./Generic/AddBar";
import TodoItems from "./Generic/TodoItems";

export default function Home() {
  let [todolist, setTodolist] = useState([]);
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("");
  const [editable, setEditable] = useState(-1);
  const [editvalue, setEditvalue] = useState("");
  const [inputclass, setInputclass] = useState("form-control");

  useEffect(() => {
    if (!localStorage.getItem("todo")) {
      localStorage.setItem("todo", JSON.stringify([]));
    }
    setTodolist(JSON.parse(localStorage.getItem("todo")));
    setData(JSON.parse(localStorage.getItem("todo")));
  },[localStorage.getItem("todo")]);

  const postData = (e) => {
    const Regex = new RegExp("[a-zA-Z0-9]{1,}");
    e.preventDefault();
    if (Regex.test(todo) === true) {
      setInputclass("form-control");
      const newtodo = [
        ...data,
        {
          task: todo,
          status: "pending",
        },
      ];
      if (editable !== -1) {
        editTodo(editable);
      }
      localStorage.setItem("todo", JSON.stringify(newtodo));
      setData(newtodo);
      setTodo("");
    } else {
      setInputclass("form-control input-validate");
    }
  };

  const marked = (i) => {
    let newtodo = [...data];
    newtodo[i].status = newtodo[i].status === "done" ? "pending" : "done";
    localStorage.setItem("todo", JSON.stringify(newtodo));
    setData(newtodo);
  };

  const deleteTodo = (i) => {
    let newtodo = [...data];
    newtodo = newtodo.filter((todo, index) => index !== i);
    localStorage.setItem("todo", JSON.stringify(newtodo));
    setData(newtodo);
  };

  const editTodo = (i) => {
    let newtodo = [...data];
    newtodo[i].task = editvalue === "" ? newtodo[i].task : editvalue;
    localStorage.setItem("todo", JSON.stringify(newtodo));
    setData(newtodo);
    setEditable(-1);
  };

  const filter = (item) => {
    let newtodo = [...todolist];
    if (item === "done")
      newtodo = newtodo.filter((item, i) => item.status === "done");
    else if (item === "pending")
      newtodo = newtodo.filter((item, i) => item.status === "pending");
    else newtodo = todolist;
    setData(newtodo);
  };

  return (
    <div className="container-fluid mt-2">
      <AddBar
        postData={postData}
        inputclass={inputclass}
        todo={todo}
        setTodo={setTodo}
      />
      {todolist?.length > 0 ? (
        <div>
          <div className="mt2">
            <h2 className="mt-2">Filter Todo</h2>
            <FilterBar filter={filter} />
          </div>
          <h2 className="mt-2">Todo List</h2>
        </div>
      ) : (
        ""
      )}
      <ul className="list-group w-100 mt-2">
        {data?.map((item, i) => {
          return (
            <div key={i} className="li-div">
              <TodoItems
                editable={editable}
                item={item}
                i={i}
                editTodo={editTodo}
                setEditable={setEditable}
                marked={marked}
                deleteTodo={deleteTodo}
                setEditvalue={setEditvalue}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
