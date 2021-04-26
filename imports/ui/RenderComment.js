import React from 'react';
import PropTypes from 'prop-types';
import {UC_Collection_Access} from './../api/user_comments.js';

export default class RenderComment extends React.Component{
	render() {
		return(
			<>
				<div className='single-block-item-style' key={this.props.comment_prop_obj._id}>
					<img src="/user.jpg" />
					<h4 className='post post__topic'>Firstname Lastname</h4>
					<p>{this.props.comment_prop_obj.comment}</p>
					<p className='post post__stats'>{this.props.comment_prop_obj.likes} 👍👎[s] {''}</p>
					<button className='button' onClick={() => {
						UC_Collection_Access.update({_id: this.props.comment_prop_obj._id}, {$inc: {likes: 1}})
						}}>👍</button>
					<button className='button' onClick={() => {
						UC_Collection_Access.update({_id: this.props.comment_prop_obj._id}, {$inc: {likes: -1}})
						}}>👎</button>
					<button className='button' onClick={() => {
						UC_Collection_Access.remove({_id: this.props.comment_prop_obj._id})
						}}>Delete</button>
				</div>
			</>
		);
	}
};

RenderComment.propTypes = {
	comment_prop_obj: PropTypes.object.isRequired
};
