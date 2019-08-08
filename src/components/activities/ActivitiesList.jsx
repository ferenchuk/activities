import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortId from 'shortid';
import { fetchActivities } from './../../actions/activities';
import ActivityItem from './ActivityItem';

class ActivitiesList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			limit: 2
		}

		this.loadMore = this.loadMore.bind(this);
	}

	componentDidMount() {
		this.props.fetchActivities();
	}

	loadMore() {
		const { limit } = this.state;
		this.setState({ limit: limit + 1 });
	}

	render() {
		const { activities } = this.props;
		const { limit } = this.state;

		return (
			<div>
				<div className="activities-head">
					<div className="total-items">
						{`${activities.items.length} items`}
					</div>
				</div>
				{activities.items.length && activities.items.slice(0, limit).map(activity => (
					<ActivityItem {...activity} key={shortId.generate()} />
				))}

				{ activities.items.length > limit  && (
					<div className="load-more">
						<button onClick={this.loadMore}>Load More</button>
					</div>
				)}
			</div>
		)
	}
}

export default connect(state => ({
	activities: state.activities
 }), {
	fetchActivities
 })(ActivitiesList);
