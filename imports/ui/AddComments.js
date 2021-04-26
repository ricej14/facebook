import React from 'react';
import {UC_Collection_Access} from './../api/user_comments.js';
import PropTypes from 'prop-types';

export default class AddComments extends React.Component{
	render() {
		return(
			<div className='single-block-item-style'>
				<form className='form' onSubmit={this.processFormData.bind(this)}>
					<input type='text' className='form__input' name='commentFormInput' placeholder='Comment...'/>
					<button className='button'>Add Comment</button>
				</form>
			</div>
		);
	}
	
	processFormData(event){
		event.preventDefault();
		let newComment = event.target.commentFormInput.value;
		if (newComment){
			event.target.commentFormInput.value = '';
			UC_Collection_Access.insert({
				comment: newComment,
				likes: 0,
				post_id: this.props.post_id
			});
		};
	}
};

AddComments.propTypes = {
	post_id: PropTypes.string.isRequired
};
