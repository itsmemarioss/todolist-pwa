import { useContext } from 'react';
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskIcon from '@mui/icons-material/Task';
import { TodoContext } from '../Provider/Provider';

const TaskList = () => {
  const { tasks, removeTask } = useContext(TodoContext);

  return (
    <List dense={false}>
        {tasks && tasks.map( task =>
          <ListItem key={task.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={ () => {removeTask(task.id)}}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <TaskIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${task.description}`}
              secondary={`${task.isDone ? "Done" : "To Do"}`}
            />
          </ListItem>,
        )}
      </List>
  );
}

export default TaskList;
