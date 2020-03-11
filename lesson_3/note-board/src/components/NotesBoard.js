import React, { useState, useEffect } from 'react'
import BoardHeader from './BoardHeader'
import Note from './Note'
export default function NotesBoard() {
    const [notesList, changeList] = useState({
        notes: []
    })

    useEffect(() => {
        let localNotes = JSON.parse(localStorage.getItem('notesList'))
        changeList({
            notes: localNotes === null ? [] : localNotes.notes})
    }, [])

    
    useEffect(function changeLocStorNotes () {
        console.log(notesList, 'notesList sore before')
        localStorage.setItem('notesList', JSON.stringify(notesList))
    }, [notesList])

  

    function addNote(id) {
        let idNew = Date.now()
        changeList({
            notes: notesList.notes.concat({
                id: idNew,
                x: 100,
                y: 0,
                text: ''

            })
        })
    }

    function deleteNote (id) {
        
        console.log(id, 'id')
        let newList = notesList.notes.filter(e => (e.id !== id))
        changeList({
            notes: newList
        })
    }


    function changeNote (id, changes) {
        let  modifiedNote =  notesList.notes.find(e => e.id === id)
        modifiedNote = {
            ...modifiedNote,
            ...changes
        }
        const newNotes = notesList.notes.map(e => e.id !== id ? e : modifiedNote)
        changeList({
            notes: newNotes
        })
    }
    return (
        <div>
            <BoardHeader addNote={addNote}/>
            <div className="notes-wrapper"> 
                {notesList.notes.map(item => (
                    <Note
                    deleteNote={deleteNote}
                    changeNote={changeNote}
                    key={item.id}
                    note={item}/>
                ))}
            </div>
        </div>
    )
}
