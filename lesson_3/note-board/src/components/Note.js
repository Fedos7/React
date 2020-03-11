import React  from 'react'

export default function Note({note, changeNote, deleteNote}) {
    // const [state, setstate] = useState(initialState)
    console.log(note)
    let prevPos = {x:0, y:0}

    function changeText (e) {
        changeNote(note.id, {text:e.target.value})
    }
    function onDrag (e) {
        console.log('down', e)
        prevPos = {
            x: e.clientX,
            y: e.clientY

        }
        document.addEventListener('mousemove', startDrag)
        document.addEventListener('mouseup', stoptDrag)
    }
    function startDrag (e) {
        
        console.log('move', e)
        let {x, y} = note
        // console.log(note, e.clientX, e.clientY)
        // console.log({
        //     x: x + e.clientX - prevPos.x,
        //     y: x + e.clientY - prevPos.y 
        // })
        // changeNote(note.id, {text: 'aaaaaaaaaaaa'})
        changeNote(note.id, {
            x: x + (e.clientX - prevPos.x),
            y: y + (e.clientY - prevPos.y)
        })
    }

    function stoptDrag (e) {
        console.log('up', e)
        document.removeEventListener('mousemove', startDrag)
        document.removeEventListener('mouseup', stoptDrag)
    }
    return (
        <div className="noteStyle"
        
        id={note.id}
        style={{top:note.y, left:note.x}}> 
        
        <div className="headerNote"> 
            <p  onMouseDown={onDrag}>✥</p>
            <button
            className="btnDelStyle"
            onClick={() => deleteNote(note.id)}
            >x</button>
        </div>
            <textarea
            onChange={changeText}
            value={note.text}
            name={note.id}
            className="textStyle"
            style={{background: '#a7a7a745'}}
            >
            </textarea> 
        </div>
    )
}

