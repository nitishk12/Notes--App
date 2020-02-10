import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CategoryShow extends React.Component {
    constructor() {
        super()
        this.state = {
            category: {}
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:3018/categories/${this.props.match.params.id}`)
            .then(response => {
                const category = response.data
                this.setState({ category })
            })
    }
    render() {
        return (
            <div>
                <h2>Show Category</h2>
                <p>{this.state.category.name}</p>
                <Link to={`/categories/edit/${this.props.match.params.id}`} style={{ paddingLeft: 10 }}>edit</Link>
                <Link to='/categories' style={{ paddingLeft: 10 }}>back</Link>
            </div>
        )
    }
}
export default CategoryShow