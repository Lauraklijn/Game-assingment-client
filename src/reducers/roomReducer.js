import { ROOM_CREATED } from "../actions/room-action";
import { ALL_ROOMS } from "../actions/room-action";
import { JOIN_ROOM } from "../actions/room-action";

const initialState = {
  all: []
};

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
    case JOIN_ROOM:
      return {
        all: [...state.all, action.payload]
      };

    default:
      return state;
  }
};
