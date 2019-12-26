import React, { Component } from 'react'

//dangerouslySetHTML 和 style 属性
class Style extends Component{
    constructor() {
        super()
        this.state = {
            content: '<h1>React.js 小书</h1>',
            color: 'red'
        }
    }
    render() {
        return(
            <div className='editor-wrapper' 
                dangerouslySetInnerHTML={{__html: this.state.content}}
                style={{fontSize: '12px', color: this.state.color}}>
            </div>
        )
    }
}

export default Style