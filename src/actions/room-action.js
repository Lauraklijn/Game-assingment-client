import axios from "axios";

export const ALL_ROOMS = "room/ALL_ROOMS"; // To import in reducer
export const ROOM_CREATED = "room/ONE_ROOM";

export function createRoom(room) {
  return function(dispatch, getState) {
    console.log("Alan and Laura here from creating room", room);
    return axios
      .post("http://localhost:4000/room", {
        room
      })
      .then(response => {
        console.log(" Response in room action", response);

        dispatch(roomCreated(response));
      });
  };
}

function roomCreated(newRoom) {
  return { type: ROOM_CREATED, payload: newRoom };
}

//   // function seeRooms(name) {
//   //   return {
//   //     type: ALL_ROOMS,
//   //     payload: { name }
//   //   };
//   // }
