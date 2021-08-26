export const ADD_TOPSONGS = 'ADD_TOPSONGS';

export const addTopSongs = topSongs => {
  return { type: ADD_TOPSONGS, topSongs: topSongs };
};
