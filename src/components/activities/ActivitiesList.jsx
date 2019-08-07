import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchActivities } from './../../actions/activities';

class ActivitiesList extends Component {

	componentDidMount() {
		this.props.fetchActivities();
	}

	render() {
		return (
			<div>Activities</div>
		)
	}
}

export default connect(state => ({
	activities: state.activities
 }), {
	fetchActivities
 })(ActivitiesList);
