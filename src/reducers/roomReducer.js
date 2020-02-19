import { ROOM_CREATED } from "../actions/room-action";
import { ALL_ROOMS } from "../actions/room-action";

const initialState = {
  all: []
};

/*
{
  type: 'room/ONE_ROOM',
  payload: room
}

*/
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_ROOMS:
      return {
        all: [...action.payload]
      };
    case ROOM_CREATED:
      return {
        all: [...state.all, action.payload]
      };

    default:
      return state;
  }
};
