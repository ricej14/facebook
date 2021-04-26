import React from 'react';
import PropTypes from 'prop-types';
import {UP_Collection_Access} from './../api/user_posts.js';
import CommentList from './CommentList.js';
import AddComments from './AddComments.js';

export default class RenderPost extends React.Component{
	render() {
		return(
			<>
				<div key={this.props.post_obj._id} className='single-block-item-style'>
					<img src="/user.jpg" />
					<h3 className='post post__topic'>Firstname Lastname</h3>
					<p>{this.props.post_obj.post}</p>
					<p className='post post__stats'>{this.props.post_obj.likes} 👍[s] {''}</p>
					<button className='button' onClick={() => {
						UP_Collection_Access.update({_id: this.props.post_obj._id}, {$inc: {likes: 1}})
						}}>👍</button>
					<button className='button' onClick={() => {
						UP_Collection_Access.remove({_id: this.props.post_obj._id})
						}}>Delete</button>
					<CommentList
						post_id={this.props.post_obj._id}/>
					<AddComments
						post_id={this.props.post_obj._id}/>
				</div>
			</>
		);
	}
};

RenderPost.propTypes = {
	post_obj: PropTypes.object.isRequired
};
