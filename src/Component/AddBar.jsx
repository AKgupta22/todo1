import React from 'react'

export default function AddBar({PostData,inputclass,todo,setTodo}) {
    return (
        <>
            <form className='mt-2' onSubmit={PostData}>
                <div className="mb-3">
                    <label className="form-label">Todo</label>
                    <input type="text" className={inputclass} placeholder="Create your Todo" onChange={(e) => setTodo(e.target.value)} value={todo} />
                </div>
                <button type='sumbit' className='btn btn-primary'>Add</button>
            </form>
        </>
    )
}
