import * as types from '../actions/types';

const initialState = {
  items: [],
  item: {
    title: '',
    body: '',
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS:
      return {
          ...state,
          items: action.payload,
      };
    case types.CREATE_POST:
      return {
          ...state,
          item: {
              ...state.item,
            [action.payload.name]: action.payload.value
          }
      };
    case types.NEW_POST:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      };
    default:
      return state;
  }
}
