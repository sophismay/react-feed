import React, { Component } from 'react'
import CommentForm from '../commentform/CommentForm'

let CommentsBox = new React.createClass({

	render(){
		return (
			<div>
				<CommentForm postId={this.props.postId} 
					onCommentSubmit={this.props.onCommentSubmit} />
				{ this.props.comments.map( comment => {
					return <div className="comment-row"><span> <b>{comment.name}:</b> {comment.comment} </span></div>
				})}
			</div>
		)
	}
})

export default CommentsBox