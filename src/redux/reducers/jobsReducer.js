import { GET_JOBS, HAS_ERROR_FALSE, HAS_ERROR_TRUE, IS_LOADING_FALSE, IS_LOADING_TRUE } from "../actions";

const initialState = {
  content: [],
  controls: {
    isLoading: false,
    hasError: false,
  },
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_TRUE:
      return {
        ...state,
        controls: {
          ...state.controls,
          isLoading: true,
        },
      };

    case IS_LOADING_FALSE:
      return {
        ...state,
        controls: {
          ...state.controls,
          isLoading: false,
        },
      };

    case HAS_ERROR_TRUE:
      return {
        ...state,
        controls: {
          ...state.controls,
          hasError: true,
        },
      };

    case HAS_ERROR_FALSE:
      return {
        ...state,
        controls: {
          ...state.controls,
          hasError: false,
        },
      };
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default jobsReducer;
