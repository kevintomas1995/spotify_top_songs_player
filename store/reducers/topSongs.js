import { ADD_TOPSONGS } from "../actions/topSongs";

const initialState = {
  topSongs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOPSONGS:
      const topSongs = action.topSongs;

      return {
        topSongs: topSongs
      };
  }
  return state;
};