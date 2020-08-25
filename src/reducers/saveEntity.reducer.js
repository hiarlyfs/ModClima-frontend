export const INITIAL_STATE = {
  saving: false,
  error: null,
  entity: null,
};

export const ActionTypes = {
  START_SAVE_ENTITY: 'START_SAVE_ENTITY',
  SAVE_ENTITY_SUCCESS: 'SAVE_ENTITY_SUCCESS',
  SAVE_ENTITY_FAILURE: 'SAVE_ENTITY_FAILURE',
};

export function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.START_SAVE_ENTITY:
      return {
        ...state,
        saving: true,
      };
    case ActionTypes.SAVE_ENTITY_SUCCESS:
      return {
        ...state,
        saving: false,
        error: null,
        entity: action.payload,
      };
    case ActionTypes.SAVE_ENTITY_FAILURE:
      return {
        saving: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
