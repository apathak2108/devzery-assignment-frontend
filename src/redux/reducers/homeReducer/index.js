import { FETCH_TEST_CASES_RESQUEST } from "../../actionTypes";

const initialState = {
  testCases: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action) {
    case FETCH_TEST_CASES_RESQUEST:
      return {
        ...state,
        testCases: state?.testCases?.push("1"),
      };
    default:
      return state;
  }
};

export default homeReducer;
