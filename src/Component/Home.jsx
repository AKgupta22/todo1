import React, { useEffect, useState } from 'react'
export default function Home() {
    const [data, setdata] = useState([{
        "task": "abc",
        "status": "pending"
    },
    {
        "task": "xyz",
        "status": "done"
    }

    ])
    const [todo, settodo] = useState("")


    const PostData = (e) => {
        const box = document.getElementById('todoinput')
        e.preventDefault()
        if (todo.length > 0) {
            box.classList.remove('input-validate')
            const newdata = [...data, {
                "task": todo,
                "status": "pending"
            }]
            setdata(newdata)
            settodo("")
        }
        else {
            box.classList.add('input-validate')
        }
    }



    useEffect(() => {
    }, [data])
    return (
        <div>
            <div className="container-fluid mt-2">
                <h2>Todo List</h2>
                <ul className="list-group w-100 mt-2">
                    {
                        data.map((item, i) => {
                            return <li key={i} className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <input className="form-check-input me-1" type="checkbox" value="" id={`${i}CheckboxStretched`} defaultChecked={item.status === "done" ? true : false} />
                                    <label className="form-check-label stretched-link" for={`${i}CheckboxStretched`}>{item.task}</label>
                                </div>
                                {item.status === "done" ? <span className="badge bg-secondary">Completed</span> : ""}
                            </li>
                        })
                    }
                </ul>
                <form className='mt-2' onSubmit={PostData}>
                    <div className="mb-3">
                        <label className="form-label">Todo</label>
                        <input type="text" id='todoinput' className="form-control" placeholder="Create your Todo" onChange={(e) => settodo(e.target.value)} value={todo} />
                    </div>
                    <button type='sumbit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}
