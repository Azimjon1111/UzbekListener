import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {

    componentDidMount(){
        axios.get('')
    }
    render() {
        return (
            <div>
              <h1>List of Posts</h1>  
            </div>
        )
    }
}
export default PostList