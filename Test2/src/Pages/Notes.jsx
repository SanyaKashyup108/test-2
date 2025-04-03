import React from 'react'
import { UserContext } from '../Context/UserContext'
import {useContext} from 'react'
import NoteItem from './NoteItems'
const Notes = () => {
 const { notes } = useContext(UserContext);
  return (
    <div>
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-4">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
    </div>
  )
}

export default Notes