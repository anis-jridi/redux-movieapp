import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  FILTER_MOVIE,
  RATING_MOVIE,
} from "./actionType";

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

export const handelFilter = (x) => {
  return {
    type: FILTER_MOVIE,
    payload: x,
  };
};

export const handelEdit = (editMovie) => {
  return {
    type: EDIT_MOVIE,
    payload: editMovie,
  };
};

// export const handelRate = (y) => {
//   return {
//     type: RATING_MOVIE,
//     payload: y,
//   };
// };
