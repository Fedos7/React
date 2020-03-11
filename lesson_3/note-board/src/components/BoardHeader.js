import React from 'react'

export default function BoardHeader(props) {
    return (
        <div style={{...styleHeader}}>
            <button onClick={props.addNote}
             style={{...styleAddBtn}}> add Note</button>
        </div>
    )
}
const styleHeader = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height:'50px',
    background: '#4a4a4ad6',
    margin:'0'
}

const styleAddBtn = {
    width: '100px',
    height:'30px',
    background: '#171717',
    margin:'0',
    border: 'none',
    color: 'aliceblue',
    borderRadius: '5px',
    cursor: 'pointer'
}