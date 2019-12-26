import React, { Component } from 'react'

class Ref extends Component{
    componentDidMount() {
        // console.log(this.input)
        this.input.focus()
    }
    render() {
        return(
            <input ref={(input) => this.input = input}/>
        )
    }
}

export default Ref