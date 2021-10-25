import { useState, useEffect } from 'react';
import { Form } from '../Form/Form'
import { NoteItem } from '../NoteItem/NoteItem'
import { NotesContainer } from '../NoteContainer/NotesContainer'
import { Modal } from '../Modal/Modal'
import './App.scss';

function App() {
  const [notes, setNotes] = useState([])
  const [noteForModal, setNoteForModal] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/notes')
        const json = await response.json()
        setNotes(json)
      } catch (e) {
        console.error(e);
      }
    }
    fetchData()
  }, []);

  const createNote = async (textForNote) => {
    let newNoteItem = new NoteItem(textForNote)
    try {
      await fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNoteItem),
      })
      let newArray = [...notes]
      newArray.push(newNoteItem)
      setNotes(newArray)
    } catch (e) {
      console.error(e);
    }
  }

  const deleteNote = async (noteForDelete) => {
    try {
      await fetch(`http://localhost:8000/notes/${noteForDelete.id}`, {
        method: 'DELETE'
      })
      let newArray = [...notes]
      const index = newArray.findIndex(n => n.id === noteForDelete.id);
      if (index !== -1) {
        newArray.splice(index, 1);
      }
      setNotes(newArray)
    } catch (e) {
      console.error(e);
    }
  }

  const changeNote = async (noteForModal) => {
    try {
      await fetch(`http://localhost:8000/notes/${noteForModal.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteForModal),
      })
    } catch (e) {
      console.error(e);
    }
  }

  const showModalWindow = (note) => {
    setNoteForModal(note)
  }

  const closeModalWindow = () => {
    changeNote(noteForModal)
    setNoteForModal(null)
  }

  return (
    <div className="App">
      <Form createNote={createNote} />
      <NotesContainer
        notes={notes}
        showModalWindow={showModalWindow}
        deleteNote={deleteNote}
      />
      {noteForModal ? (
        <Modal closeModalWindow={closeModalWindow} noteForModal={noteForModal} />
      ) : (
        undefined
      )}
    </div>
  );
}

export default App;
