import React, { useReducer } from 'react';

import { INITIAL_STATE, reducer } from '../../reducers/saveEntity.reducer';

const WithSaveEntity = (WrappedComponent) => {
  const ReducerProvider = ({ ...props }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return (
      <WrappedComponent
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        saving={state.saving}
        error={state.error}
        entity={state.entity}
        dispatch={dispatch}
      />
    );
  };

  return ReducerProvider;
};

export default WithSaveEntity;
