import React from 'react';
import RenderPost from './RenderPost.js';
import PropTypes from 'prop-types';

export default class PostList extends React.Component {
	render() {
		return(
			<>
				{this.renderAllPosts()}
			</>
		)
	}

	renderAllPosts() {
		if(this.props.allPostsList.length == 0) {
			return(
					<div className='single-block-item-style'>
						<p>Add a new topic to get started!</p>
					</div>
			);
		} else {
			return this.props.allPostsList.map((post) => {
				return <RenderPost key={post._id} post_obj={post} />
			});
		}
	}
};

PostList.propTypes = {
	allPostsList: PropTypes.array.isRequired
};
