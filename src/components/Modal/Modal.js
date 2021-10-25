import { useState } from 'react';
import './modal.scss';
export function Modal({ closeModalWindow, noteForModal }) {
    const [textForModal, setTextForModal] = useState(noteForModal.text)
    const handleChange = (event) => {
        setTextForModal(event.target.value)
        noteForModal.text = textForModal
    }
    return (
        <div className='modal' onClick={() => closeModalWindow()}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <textarea rows="10" cols="45" name="text" value={textForModal} onChange={handleChange} />
            </div>
        </div>
    )
}
