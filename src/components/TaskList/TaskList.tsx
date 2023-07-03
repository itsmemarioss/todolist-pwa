import { useContext } from 'react';
import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoContext } from '../Provider/Provider';

const TaskList = () => {
  const { tasks, removeTask, changeStatus } = useContext(TodoContext);

  return (
    <List dense={false}>
      {tasks && tasks.map(task =>
        <ListItem key={task.id}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => { removeTask(task.id) }}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemButton role={undefined} onClick={() => changeStatus(task.id)} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={task.isDone}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': task.id }}
              />
            </ListItemIcon>
            <ListItemText
              style={{ textDecoration: task.isDone ? "line-through" : "" }}
              primary={`${task.description}`}
              secondary={`${task.isDone ? "Done" : "To Do"}`}
            />
          </ListItemButton>

        </ListItem>,
      )}
    </List>
  );
}

export default TaskList;
