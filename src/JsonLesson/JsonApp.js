import React, { Component } from 'react'
import Users from './users.json'
export default class JsonApp extends Component {
    render() {
        return (
            <div>
                {Users.map((post)=> {
                    return(
                        <>
                        <h1>Name:{post.name}</h1>
                        <h2>Age:{post.age}</h2>
                        <h3>Is he/she student?{post.isStudent}</h3>
                        <h4>Location: {post.city}</h4>
                        </>
                    )
                } )}
            </div>
        )
    }
}
