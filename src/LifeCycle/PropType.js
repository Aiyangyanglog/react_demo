import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PropType extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired
        // PropTypes.array
        // PropTypes.bool
        // PropTypes.func
        // PropTypes.number
        // PropTypes.object
        // PropTypes.string
        // PropTypes.node
        // PropTypes.element
    }
    
    render() {
        const { comment } = this.props
        return(
            <div className='comment'>
                <div className='comment-user'>
                <span>{comment.username} </span>：
                </div>
                <p>{comment.content}</p>
            </div>
        )
    }
}

export default PropType