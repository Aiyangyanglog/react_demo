import React, { Component } from 'react';

class LikeButton extends Component {
  static defaultProps = {
    like: '取消',
    notLike: '点赞'
  }

  constructor () {
    super()
    this.state = {
      isLiked: false
    }
  }
  handleClickOnTitle() {
    this.setState({
      isLiked: !this.state.isLiked
    })
    if(this.props.onClick) {
      this.props.onClick()
    }
  }
  render() {
    return (
      <button className='like-btn' style={{backgroundColor: this.props.color}}>
        <span className='like-text' onClick={this.handleClickOnTitle.bind(this)}>{this.state.isLiked ? this.props.like : this.props.notLike}</span>
      </button>
    )
  }
}

export default LikeButton;
