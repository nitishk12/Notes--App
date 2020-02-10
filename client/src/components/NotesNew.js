import React from 'react'
import NotesForm from './NotesForm'

class NotesNew extends React.Component {

    render() {
        return (
            <div>
                <h2>Add a new note</h2>
                <NotesForm />
            </div>
        )
    }
}
export default NotesNew