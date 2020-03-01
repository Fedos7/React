import React from 'react'

export default function someCommonent({value, inc, add}) {
    return (
        <div>
            {value}
            <button onClick={inc}>add 1</button>
            <button onClick={() => add(5)}>add 5 </button>
        </div>
    )
}
