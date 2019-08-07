import { FETCH_ACTIVITIES_SUCCESS } from "./../constants/activities";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        items: payload.activities
      };

    default:
      return state;
  }
}
