import React, { useReducer } from 'react';

import { INITIAL_STATE, reducer } from '../../reducers/searchEntities.reducer';

const WithSearchEntities = (WrappedComponent) => {
  const ReducerProvider = ({ ...props }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return (
      <WrappedComponent
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        searching={state.searching}
        error={state.error}
        data={state.entities}
        dispatch={dispatch}
      />
    );
  };

  return ReducerProvider;
};

export default WithSearchEntities;
