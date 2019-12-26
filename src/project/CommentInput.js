import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 1.页面加载完成自动聚焦到评论输入框。
// 2.把用户名持久化，存放到浏览器的 LocalStorage 中。页面加载时会把用户名加载出来显示到输入框，用户就不需要重新输入用户名了。
// 3.把已经发布的评论持久化，存放到浏览器的 LocalStorage 中。页面加载时会把已经保存的评论加载出来，显示到页面的评论列表上。
// 4.评论显示发布日期，如“1 秒前”，”30 分钟前”，并且会每隔 5 秒更新发布日期。
// 5.评论可以被删除。
// 6.类似 Markdown 的行内代码块显示功能，用户输入的用 `` 包含起来的内容都会被处理成用 <code> 元素包含。例如输入 `console.log` 就会处理成 <code>console.log</code> 再显示到页面上。
class CommentInput extends Component{
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    componentWillMount () {
        this._loadUsername()
    }
    _loadUsername() {
        const username = localStorage.getItem('username')
        if(username) {
            this.setState({ username })
        }
    }
    componentDidMount() {
        this.textarea.focus()
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleUsernameBlur(event) {
        this._saveUsername(event.target.value)
    }
    _saveUsername (username) {
        localStorage.setItem('username', username)
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit() {
        if (this.props.onSubmit) {
            // 子组件CommentInput将值传给父组件CommentApp
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: new Date()
            })
            this.setState({ content: '' })
        }
    }
    render() {
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名: </span>
                    <div className='comment-field-input'>
                        <input 
                        value={this.state.username} 
                        onBlur={this.handleUsernameBlur.bind(this)}
                        onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容: </span>
                    <div className='comment-field-input'>
                        <textarea
                        ref={(textarea) => this.textarea = textarea}
                        value={this.state.content}
                        onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
} 

export default CommentInput