import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar.js';
import AddPosts from './AddPosts.js';
import PostList from './PostList.js';
import Footer from './Footer.js';

export default class App extends React.Component {
	render() {
		return(
			<>
				<TitleBar
					title={this.props.titleText} />
				<div className='wrapper'>
					<AddPosts/>
					<PostList
						allPostsList={this.props.allPostsApp} />
				</div>
				<Footer
					footerText={this.props.footerText} />
			</>
		)
	}
};

App.propTypes = {
	titleText: PropTypes.string.isRequired,
	allPostsApp: PropTypes.array.isRequired,
	footerText: PropTypes.string.isRequired
};
