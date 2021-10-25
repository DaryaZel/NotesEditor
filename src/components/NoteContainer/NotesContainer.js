import { NoteItemContainer } from '../NoteItemContainer/NoteItemContainer'
export function NotesContainer({ notes, showModalWindow, deleteNote }) {
    return (
        <div className='main-container-for-list'>
            <div id='list' className='note-list'>
                {notes.map((note) => {
                    return (<NoteItemContainer key={note.id}  note={note} showModalWindow={showModalWindow} deleteNote={deleteNote}/>)
                })
                }
            </div>
        </div>

    )
}