import * as types from './../constants/activities';

export const fetchActivities = () => ({
  type: types.FETCH_ACTIVITIES
});

export const fetchActivitiesSuccess = activities => ({
  type: types.FETCH_ACTIVITIES_SUCCESS,
  payload: { activities }
});

export const fetchActivitiesFailed = error => ({
  type: types.FETCH_ACTIVITIES_FAILED,
  payload: { error }
});
