import React from 'react'

export default function TodoItems({ editable, item, i, EditTodo, setEditable, Marked, DeleteTodo, setEditvalue }) {
    return (
        <>
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
        </>
    )
}
