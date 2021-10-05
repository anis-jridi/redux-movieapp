import { ADD_MOVIE, DELETE_MOVIE } from "./actionType";

export const handelDelete = (id) => {
  return {
    type: DELETE_MOVIE,
    payload: id,
  };
};

export const handelAdd = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: newMovie,
  };
};
