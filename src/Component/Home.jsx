import React, { useState } from 'react'
import FilterBar from './FilterBar'
import AddBar from './AddBar'
import TodoItems from './TodoItems'
export default function Home() {
    let todolist = JSON.parse(localStorage.getItem("todo"))
    const [data, setData] = useState(todolist)
    const [todo, setTodo] = useState("")
    const [editable, setEditable] = useState(-1)
    const [editvalue, setEditvalue] = useState("")
    const [inputclass, setInputclass] = useState("form-control")
    const PostData = (e) => {
        const Regex = new RegExp('[a-z0-9]{1,}')
        e.preventDefault()
        if (Regex.test(todo) === true) {
            setInputclass('form-control')
            const newtodo = [...data, {
                "task": todo,
                "status": "pending"
            }]
            localStorage.setItem("todo", JSON.stringify(newtodo))
            setData(newtodo)
            setTodo("")
        }
        else {
            setInputclass('form-control input-validate')
        }
    }
    const Marked = (i) => {
        let newtodo = [...data]
        newtodo[i].status = newtodo[i].status === "done" ? "pending" : "done"
        localStorage.setItem("todo", JSON.stringify(newtodo))
        setData(newtodo)
    }
    const DeleteTodo = (i) => {
        console.log(i);
        let newtodo = [...data]
        newtodo = newtodo.filter((todo, index) => index !== i)
        localStorage.setItem("todo", JSON.stringify(newtodo))
        setData(newtodo)
    }
    const EditTodo = (e, i) => {
        e.preventDefault()
        let newtodo = [...data]
        newtodo[i].task = editvalue === "" ? newtodo[i].task : editvalue
        localStorage.setItem("todo", JSON.stringify(newtodo))
        setData(newtodo)
        setEditable(-1)
    }

    const Filter = (item) => {
        let newtodo = [...todolist]
        if (item === "done")
            newtodo = newtodo.filter((item, i) => item.status === "done")
        else if (item === "pending")
            newtodo = newtodo.filter((item, i) => item.status === "pending")
        else
            newtodo = todolist
        setData(newtodo)
    }
    return (
        <div>
            <div className="container-fluid mt-2">
                <AddBar
                    PostData={PostData}
                    inputclass={inputclass}
                    todo={todo}
                    setTodo={setTodo}
                />
                {data.length > 0 ? <div>< div className="mt2">
                    <h2 className='mt-2'>Filter Todo</h2>
                    <FilterBar Filter={Filter} />
                </div>
                    <h2 className='mt-2'>Todo List</h2>
                </div> : ""}
                <ul className="list-group w-100 mt-2">
                    {
                        data.map((item, i) => {
                            return <div key={i} className="li-div">
                                <TodoItems
                                    editable={editable}
                                    item={item}
                                    i={i}
                                    EditTodo={EditTodo}
                                    setEditable={setEditable}
                                    Marked={Marked}
                                    DeleteTodo={DeleteTodo}
                                    setEditvalue={setEditvalue}
                                />
                            </div>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
