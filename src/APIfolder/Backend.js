import React,{ Component } from 'react'

 class Backend extends Component {
    
    state = {
        user: []
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((respone) => respone.json())
        .then(res => { 
            console.log(res)
            this.setState({user: res})
         })
    }
    
    render() {
        return (
            <> 
                {this.state.user.map((users) => (
                   <>
                   <h1>Background:</h1>
                   <p>FullName: {users.name} {users.username}</p>
                   <p>Address: {users.address.street} in {users.address.city} </p>
                   </>
                ))}
            </>
        )
    }
}
export default Backend