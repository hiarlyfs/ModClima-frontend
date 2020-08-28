import React, { useState, useCallback } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import NewEntity from './components/NewEntity';
import Routes from './Routes';

function App() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [newEntity, setNewEntity] = useState({});

  const closeSnackback = useCallback(() => setShowSnackbar(false), []);

  const ws = new WebSocket('ws://localhost:3030');
  ws.onmessage = (event) => {
    setShowSnackbar(true);
    setNewEntity(JSON.parse(event.data));
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showSnackbar}
        onCLose={closeSnackback}
        autoHideDuration={6000}
      >
        <MuiAlert
          elevation={0}
          variant='filled'
          onClose={closeSnackback}
          severity='success'
        >
          <NewEntity entity={newEntity} />
        </MuiAlert>
      </Snackbar>
      <Routes />
    </>
  );
}

export default App;
