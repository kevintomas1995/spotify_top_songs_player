import { ADD_TOKEN } from "../actions/token";

const initialState = {
  token: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      const token = action.token;

      return {
        token: token
      };
  }
  return state;
};