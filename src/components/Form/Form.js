import { useState } from "react"

export function Form({ createNote }) {
    const [inputText, setInputText] = useState('')
    const handleChange = (event) => {
        setInputText(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (event.target.text.value) {
            createNote(event.target.text.value)
        }
        setInputText('')
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-container">
                <input type='text' name='text' id='text' className="form-container__input" value={inputText} placeholder="Note..." maxLength="100" onChange={handleChange}></input>
                <input type='submit' name='enter' id='add' className="form-container__button" value="Add"></input>
            </div>
        </form>
    )
}