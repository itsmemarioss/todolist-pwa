import React from 'react';
import StickyFooter from './layout/StickyFooter';
import { TextField } from '@mui/material';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <StickyFooter>
      <TextField id="new-task" label="New task" variant="standard" fullWidth />
      <TaskList />
    </StickyFooter>
  );
}

export default App;
