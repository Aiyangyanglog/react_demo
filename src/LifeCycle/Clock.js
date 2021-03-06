import React, { Component } from 'react'

class Clock extends Component{
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }
    componentWillMount () {
        // 启动定时器
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },1000)
    }
    componentWillUnmount () {
        // 销毁定时器
        clearInterval(this.timer)
      }
    render() {
        return(
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default Clock