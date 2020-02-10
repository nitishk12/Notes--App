import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class NotesShow extends React.Component {
    constructor() {
        super()
        this.state = {
            note: {}
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3018/notes/${id}`)
            .then(response => {
                const note = response.data
                this.setState({ note })
            })
    }
    render() {
        return (
            <div>
                <h2>Notes Show</h2>
                <p>{this.state.note.title} - {this.state.note.description}</p>
                <Link to={`/notes/edit/${this.props.match.params.id}`} style={{ paddingLeft: 10 }}>Edit</Link>
                <Link to='/notes' style={{ paddingLeft: 10 }}>back</Link>
            </div>
        )
    }
}
export default NotesShow