import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_ACTIVITIES } from './../constants/activities';
import {
  fetchActivitiesSuccess,
  fetchActivitiesFailed
} from '../actions/activities';

const fetchActivities = () => (
  axios.get('https://s3.eu-central-1.amazonaws.com/js.smartair.co.il/custom/activities.json')
    .then(response => response.data.activities)
);

function* loadActivities() {
  try {
    const activities = yield call(fetchActivities);
    yield put(fetchActivitiesSuccess(activities));
  } catch (error) {
    yield put(fetchActivitiesFailed());
  }
}

export default function () {
  return [
    takeLatest(FETCH_ACTIVITIES, loadActivities)
  ]
}
  