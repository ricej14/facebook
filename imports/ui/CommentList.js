import React from 'react';
import RenderComment from './RenderComment.js';
import PropTypes from 'prop-types';
import {UC_Collection_Access} from './../api/user_comments.js';

export default class CommentList extends React.Component {
	render() {
		return(
			<>
				{this.renderAllComments()}
			</>
		)
	}

	renderAllComments() {
		const PostComments = UC_Collection_Access.find({post_id: this.props.post_id}, {sort: {likes: -1}}).fetch();
		if(PostComments.length == 0) {
			return (
					<p className='single-block-item-style'>No Comments (Yet!)</p>
			);
		} else {
			return PostComments.map((comment) => {
				return <RenderComment key={comment._id} comment_prop_obj={comment} />
			});
		}
	}
};

CommentList.propTypes = {
	post_id: PropTypes.string.isRequired
};
