import { TagItemContainer } from '../TagItemContainer/TagItemContainer'
export function NoteItemContainer({ note, showModalWindow, deleteNote }) {
    return (
        <div className='note-list-item'>
            <div className='note-list-item-content' onClick={() => showModalWindow(note)}>
                <span className='note-list-item-content-text'>{note.text}</span>
                {note.tags.map((tag) => {
                    return (<TagItemContainer tag={tag.textTag} />)
                })
                }
            </div>
            <div className='note-list-item-delete' name='delete' onClick={() => deleteNote(note)}>X</div>
        </div>
    )
}