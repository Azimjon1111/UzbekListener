import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: 'Azimjon',
            // Surname: 'Bekmuratov',
            // occupation: 'Frontend developer and  Financial analyist',
            // date: new Date()
            count: 0
        };
    }
    increase(){
        this.setState({
            count: this.state.count + 1
        })
    }
    decrease(){
        this.setState({
            count: this.state.count - 1
        })
    }
    reset(){
        this.setState({
            count: 0
        })
    }
    render(){
        return(
            <>
            {/* <h3>Hello, My Fullname is {this.state.name} {this.state.Surname}. I am {this.state.occupation}. it is {this.state.date.toLocaleString()}</h3>
            <h2>{new Date().getFullYear()}</h2> */}
            <h1>Counter</h1>
            <h2>{this.state.count}</h2>
            <button onClick={(e)=> this.decrease(e)}>-</button>
            <button onClick={(e)=> this.reset(e)} style={{margin: '15px'}}>reset</button>
            <button onClick={(e)=> this.increase(e)}>+</button>
            </>
        )
    }
}
export default State
