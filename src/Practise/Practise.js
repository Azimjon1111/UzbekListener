import { getAllByText } from '@testing-library/dom'
import React, { Component } from 'react'

class Practise extends Component {
    constructor(){
        super()
        this.state = {
            num: ''
        }
    }
    numbers(e){
        this.setState({
            num: this.state.num + `${e}`
        })
    }
    btn(e){
        this.setState({
            num: e
        })
    }
    reset(){
        this.setState({
            num: ''
        })
    }
    render() {
        return (
            <div>
                <input style={{fontSize: '30px'}} value={this.state.num}  />
                    <button onClick={()=> this.numbers(1)}>1</button>
                    <button onClick={()=> this.numbers(2)}>2</button>
                    <button onClick={()=> this.numbers(3)}>3</button>
                    <button onClick={()=> this.numbers(4)}>4</button>
                    <button onClick={()=> this.numbers(5)}>5</button>
                    <button onClick={()=> this.numbers(6)}>6</button>
                    <button onClick={()=> this.numbers(7)}>7</button>
                    <button onClick={()=> this.numbers(8)}>8</button>
                    <button onClick={()=> this.numbers(9)}>9</button>
                    <button onClick={()=> this.numbers(0)}>0</button>
                    <button onClick={()=> this.btn('+')}>+</button>
                    <button onClick={()=> this.btn('-')}>-</button>
                    <button onClick={(e)=> this.reset(e)}>Zero</button>
            </div>
        )
    }
}
export default Practise