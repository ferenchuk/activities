import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortId from 'shortid';
import { fetchActivities } from './../../actions/activities';
import ActivityItem from './ActivityItem';

class ActivitiesList extends Component {

	componentDidMount() {
		this.props.fetchActivities();
	}

	render() {
		const { activities } = this.props;
		var activitiesArray = Object.keys(activities.items).map(function(key) {
			return activities.items[key];
		  });

		return (
			<div>
				<div className="total-items">
					{`${activitiesArray.length} items`}
				</div>
				{activitiesArray.length && activitiesArray.map(activity => (
					<ActivityItem {...activity} key={shortId.generate()} />
				))}
			</div>
		)
	}
}

export default connect(state => ({
	activities: state.activities
 }), {
	fetchActivities
 })(ActivitiesList);
