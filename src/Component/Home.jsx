import React, { useState } from 'react'
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
                <form className='mt-2' onSubmit={PostData}>
                    <div className="mb-3">
                        <label className="form-label">Todo</label>
                        <input type="text" className={inputclass} placeholder="Create your Todo" onChange={(e) => setTodo(e.target.value)} value={todo} />
                    </div>
                    <button type='sumbit' className='btn btn-primary'>Add</button>
                </form>
                {data.length > 0 ? <div>< div className="mt2">
                    <h2 className='mt-2'>Filter Todo</h2>
                    <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => Filter("All")} defaultChecked />
                            <label className="form-check-label" for="flexRadioDefault1">
                                <h4>All</h4>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => Filter("done")} />
                            <label className="form-check-label" for="flexRadioDefault2">
                                <h4>Completed</h4>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onClick={() => Filter("pending")} />
                            <label className="form-check-label" for="flexRadioDefault3">
                                <h4>Incompleted</h4>
                            </label>
                        </div>
                    </div>
                </div>
                    <h2 className='mt-2'>Todo List</h2>
                </div> : ""}
                <ul className="list-group w-100 mt-2">
                    {
                        data.map((item, i) => {
                            return <div key={i} className="li-div">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        {editable !== i ? <div><input className="form-check-input me-1" type="checkbox" value="" id={`${i}CheckboxStretched`} checked={item.status === "done" ? true : false} onChange={() => Marked(i)} />
                                            <label className="form-check-label stretched-link" for={`${i}CheckboxStretched`}>{item.task}</label></div> : ""}
                                    </div>
                                    {editable === i ? <form className='w-100' onSubmit={(e) => EditTodo(e, i)}> <input type="text" className="form-control" defaultValue={item.task} required onChange={(E) => setEditvalue(E.target.value)} /></form> : ""}
                                    {item.status === "done" ? <span className="badge bg-secondary mx-3">Completed</span> : ""}
                                </li>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-sm btn-danger mt-2 mb-2" onClick={() => DeleteTodo(i)}><i className="fa-sharp fa-solid fa-trash"></i></button>
                                    <button className="btn btn-sm btn-danger mt-2 mb-2" onClick={() => setEditable(i)}><i className="fa-solid fa-pen"></i></button>
                                </div>
                            </div>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
