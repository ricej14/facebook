import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';

export default class AddPosts extends React.Component{
	render() {
		return(
			<div className='single-block-item-style'>
				<form className='form' onSubmit={this.processFormData.bind(this)}>
					<input type='text' className='form__input' name='postFormInput' placeholder='How is it going?'/>
					<button className='button'>Add Post</button>
				</form>
			</div>
		);
	}
	
	processFormData(event){
		event.preventDefault();
		let newPost = event.target.postFormInput.value;
		if (newPost){
			event.target.postFormInput.value = '';
			UP_Collection_Access.insert({
				post: newPost,
				likes: 0,
				created_at: Date.now()
			});
		};
	}
};
