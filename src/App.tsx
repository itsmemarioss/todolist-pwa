import React from 'react';
import StickyFooter from './layout/StickyFooter';
import TaskList from './components/TaskList/TaskList';
import TodoProvider from './components/Provider/Provider';
import NewTask from './components/NewTask/NewTask';

function App() {
  return (
    <TodoProvider>
      <StickyFooter>
        <NewTask />
        <TaskList />
      </StickyFooter>
    </TodoProvider>
  );
}

export default App;
