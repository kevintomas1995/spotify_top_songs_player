export const ADD_TOKEN = 'ADD_TOKEN';

export const addToken = token => {
  return { type: ADD_TOKEN, token: token };
};
