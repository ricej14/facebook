import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'; //Kept getting 'Tracker not defined' without this??
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import {UC_Collection_Access} from './../imports/api/user_comments.js';
import App from './../imports/ui/App.js';

Meteor.startup(() => {
	Tracker.autorun(() => {
		const allPostsInDB = UP_Collection_Access.find({}, {sort: {created_at: -1}}).fetch();
		let title = '441 Facebook';

	 	ReactDOM.render(<App
			titleText={title}
			allPostsApp={allPostsInDB}
			footerText={'\u00A9441 Facebook'}
		/>, document.getElementById('content'));
	});
});
