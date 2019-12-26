import React, { Component } from 'react'
import AddComponent from './AddComponent'

class DelComponent extends Component{
    constructor() {
        super()
        this.state = {
            isShow: true
        }
    }
    changeState() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        return(
            <div>
                { this.state.isShow ? <AddComponent /> : null }
                <button onClick={this.changeState.bind(this)}>显示或者隐藏标题</button>
            </div>
        )
    }
}

export default DelComponent