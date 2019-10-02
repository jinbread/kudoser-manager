import React from 'react'

export default function Form({value, onChange, onCreate, onKeyPress}) {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onCreate}>
                추가
            </button>
        </div>
    )
}