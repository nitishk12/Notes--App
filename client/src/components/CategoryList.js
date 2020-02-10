import React from 'react'
import axios from 'axios'
import CategoryForm from './CategoryForm'
import { Link } from 'react-router-dom'

class CategoryList extends React.Component {
    constructor() {
        super()
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3018/categories')
            .then(response => {
                const categories = response.data
                this.setState({ categories })
            })
    }
    handleSubmit = (formData) => {
        axios.post('http://localhost:3018/categories', formData)
            .then(response => {
                const category = response.data
                this.setState((prevState) => ({
                    categories: [...prevState.categories, category]
                }))
            })
    }
    handleRemove = (id) => {
        axios.delete(`http://localhost:3018/categories/${id}`)
            .then(response => {
                this.setState((prevState) => ({
                    categories: prevState.categories.filter(category => category._id !== response.data._id)
                }))
            })
    }
    render() {
        return (
            <div>
                <h2>Listing categories - {this.state.categories.length}</h2>
                <ul>
                    {this.state.categories.map(category => {
                        return <li key={category._id}>{category.name}<button onClick={() => { this.handleRemove(category._id) }}>remove</button>
                            <Link to={`/categories/${category._id}`}>show</Link>
                        </li>
                    })}
                </ul>
                <CategoryForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default CategoryList