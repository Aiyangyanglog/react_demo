import React, { Component } from 'react'

class AddComponent extends Component{
    constructor() {
        super()
        console.log('construct')
    }
    componentWillMount() {
        console.log('component will mount')
    }
    componentDidMount() {
        console.log('component did mount')
    }
    componentWillUnmount() {
        console.log('component Will Unmount')
    }
    render() {
        console.log('render')
        return(
            <div>
                <h1>React 小书</h1>
            </div>
        )
    }
}

// componentWillMount：组件挂载开始之前，也就是在组件调用 render 方法之前调用。
// componentDidMount：组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
// componentWillUnmount：组件对应的 DOM 元素从页面中删除之前调用。

// 加载组件控制台输出
// construct
// component will mount
// render
// component did mount

// 删除组件控制台输出
// component will unmount

export default AddComponent