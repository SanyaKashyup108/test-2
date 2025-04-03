import React from 'react'
import { UserContext } from '../components/context/NotesContext'
import {useContext} from 'react'
import NoteDetail from '../pages/NoteDetail'
const Notes = () => {
                const { notes } = useContext(UserContext);
  return (
    <div>
                <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
    </div>
  )
}

export default Notes