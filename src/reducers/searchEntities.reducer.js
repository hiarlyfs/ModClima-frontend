export const INITIAL_STATE = {
  searching: false,
  error: null,
  entities: [],
};

export const ActionTypes = {
  START_SEARCH_ENTITY: 'START_SEARCH_ENTITY',
  SEARCH_ENTITY_SUCCESS: 'SEARCH_ENTITY_SUCCESS',
  SEARCH_ENTITY_FAILURE: 'SEARCH_ENTITY_FAILURE',
};

export function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.START_SEARCH_ENTITY:
      return {
        ...state,
        searching: true,
      };
    case ActionTypes.SEARCH_ENTITY_SUCCESS:
      return {
        searching: false,
        error: null,
        entities: action.payload,
      };
    case ActionTypes.SEARCH_ENTITY_FAILURE:
      return {
        searching: false,
        error: action.payload,
        entities: [],
      };
    default:
      return state;
  }
}
