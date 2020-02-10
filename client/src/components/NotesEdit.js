import React from 'react'
import NotesForm from './NotesForm'
import axios from 'axios'

class NotesEdit extends React.Component {
    constructor() {
        super()
        this.state = {
            note: {}
        }
    }
    handleSubmit = (formData) => {
        axios.put(`http://localhost:3018/notes/${this.props.match.params.id}`, formData)
            .then(response => {
                const note = response.data
                this.props.history.push(`http://localhost:3018/notes/${note._id}`)
            })
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3018/notes/${id}`)
            .then(response => {
                const note = response.data
                this.setState({ note })
            })
            .catch((err) => {
                alert(err)
            })
    }
    render() {
        return (
            <div>
                <h2>Edit Notes</h2>
                {
                    Object.keys(this.state.note).length !== 0 && <NotesForm {...this.state.note} handleSubmit={this.handleSubmit} />
                }
            </div>
        )
    }
}
export default NotesEdit