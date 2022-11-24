import React, { useState } from 'react'
export default function Home() {
    let todolist = []
    const [data, setData] = useState(todolist)
    const [todo, setTodo] = useState("")
    const [editable, setEditable] = useState(-1)
    const [editvalue, setEditvalue] = useState("")
    const PostData = (e) => {
        const box = document.getElementById('todoinput')
        e.preventDefault()
        if (todo.length > 0) {
            box.classList.remove('input-validate')
            const newdata = [...data, {
                "task": todo,
                "status": "pending"
            }]
            setData(newdata)
            setTodo("")
        }
        else {
            box.classList.add('input-validate')
        }
    }
    const Marked = (i) => {
        let newtodo = [...data]
        newtodo[i].status = newtodo[i].status === "done" ? "pending" : "done"
        setData(newtodo)
    }
    const DeleteTodo = (i) => {
        console.log(i);
        let newtodo = [...data]
        newtodo = newtodo.filter((todo, index) => index !== i)
        setData(newtodo)
    }
    const EditTodo = (e, i) => {
        e.preventDefault()
        let newtodo = [...data]
        newtodo[i].task = editvalue === "" ? newtodo[i].task : editvalue
        setData(newtodo)
        setEditable(-1)
    }
    return (
        <div>
            <div className="container-fluid mt-2">
                <h2>Todo List</h2>
                <ul className="list-group w-100 mt-2">
                    {
                        data.map((item, i) => {
                            return <div key={i} className="li-div">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        {editable !== i ? <div><input className="form-check-input me-1" type="checkbox" value="" id={`${i}CheckboxStretched`} defaultChecked={item.status === "done" ? true : false} onChange={() => Marked(i)} />
                                            <label className="form-check-label stretched-link" for={`${i}CheckboxStretched`}>{item.task}</label></div> : ""}
                                    </div>
                                    {editable === i ? <form className='w-100' onSubmit={(e) => EditTodo(e, i)}> <input type="text" className="form-control" defaultValue={item.task} required onChange={(E) => setEditvalue(E.target.value)} /></form> : ""}
                                    {item.status === "done" ? <span className="badge bg-secondary mx-3">Completed</span> : ""}
                                </li>
                                <div className="d-flex justify-content-around">
                                    <button className="btn btn-sm btn-danger mt-2 mb-2" onClick={() => DeleteTodo(i)}><i className="fa-sharp fa-solid fa-trash"></i></button>
                                    <button className="btn btn-sm btn-danger mt-2 mb-2" onClick={() => setEditable(i)}><i className="fa-solid fa-pen"></i></button>
                                </div>
                            </div>
                        })
                    }
                </ul>
                <form className='mt-2' onSubmit={PostData}>
                    <div className="mb-3">
                        <label className="form-label">Todo</label>
                        <input type="text" id='todoinput' className="form-control" placeholder="Create your Todo" onChange={(e) => setTodo(e.target.value)} value={todo} />
                    </div>
                    <button type='sumbit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}
