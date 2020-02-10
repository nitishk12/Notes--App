import React from 'react'
import axios from 'axios'

class NotesForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title ? props.title : '',
            description: props.description ? props.description : '',
            categories: [],
            category: props.category ? props.category : ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3018/categories')
            .then(response => {
                const categories = response.data
                this.setState({ categories })
            })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: this.state.title,
            description: this.state.description,
            category: this.state.category
        }
        this.props.handleSubmit(formData)
    }
    handleCategory = (e) => {
        const category = this.state.categories.find(category => category.name === e.target.value)
        this.setState({ category })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>title</label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
                    <br />
                    <label>description</label>
                    <textarea name='description' value={this.state.description} onChange={this.handleChange} />
                    <br />
                    <select onChange={this.handleCategory}>
                        <option value="">select</option>
                        {this.state.categories.map(category => {
                            return (
                                <option key={category._id} value={category.name}>{category.name}</option>
                            )
                        })}
                    </select>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
export default NotesForm