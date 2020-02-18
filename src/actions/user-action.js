import axios from "axios";

export const USER_LOGIN = "user/LOGIN";
export const USER_CREATED = "user/SIGNUP";
export const ROOM_CREATED = "user/ROOM";

export function login(email, password) {
  return function(dispatch, getState) {
    console.log(email, password);
    return axios
      .post("http://localhost:4000/login", {
        email,
        password
      })
      .then(response => {
        console.log(response.data);
        dispatch(loginAction(response.data.token, response.data.email));
      });
  };
}

function loginAction(token, email) {
  return {
    type: USER_LOGIN,
    payload: { token, email }
  };
}

export function signUp(email, password) {
  return function(dispatch, getState) {
    console.log(email, password);
    return axios
      .post("http://localhost:4000/signup", {
        email,
        password
      })
      .then(response => {
        console.log(response.data);
        dispatch(signUpSucces(response));
      });
  };
}

function signUpSucces() {
  return { type: USER_CREATED };
}

export function createRoom(room) {
  return function(dispatch, getState) {
    console.log("Alan here from creating room", room);
    return axios
      .post("http://localhost:4000/room", {
        room
      })
      .then(response => {
        dispatch(roomCreated(response));
      });
  };
}

function roomCreated() {
  return { type: ROOM_CREATED };
}
