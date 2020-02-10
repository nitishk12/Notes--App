import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class NotesList extends React.Component {
    constructor() {
        super()
        this.state = {
            notes: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3018/notes')
            .then(response => {
                const notes = response.data
                this.setState({ notes })
            })
            .catch(err => {
                console.log('error', err)
            })
    }
    handleRemove = (id) => {
        axios.delete(`http://localhost:3018/notes/${id}`)
            .then(response => {
                this.setState((prevState) => ({
                    notes: prevState.notes.filter(note => note._id !== response.data._id)
                }))
            })
    }
    render() {
        return (
            <div>
                <h2>Listing notes - {this.state.notes.length}</h2>
                <ul>
                    {this.state.notes.map(note => {
                        return <li key={note._id}>
                            <Link to={`/notes/${note._id}`} style={{ paddingLeft: 10 }}>{note.title}</Link>
                            <Link to={`/notes/${note._id}`} style={{ paddingLeft: 10 }}>show</Link>
                            <button onClick={() => { this.handleRemove(note._id) }}>remove</button>
                        </li>
                    })}
                </ul>
                <Link to='/notes/new'>Add a new note</Link>
            </div>
        )
    }
}
export default NotesList