import React from 'react'

export default function TodoItem({data, id, check}) {
    console.log(data);
    return (
        <div className="todo-item">
            <p className="numb">{id + 1}</p>
            <input onChange={()=>check(data.id)} type="checkbox" />
            <p>{data.message}</p>
        </div>
    )
}
