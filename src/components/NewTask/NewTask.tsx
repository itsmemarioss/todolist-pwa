import { useContext, useState } from "react";
import { TextField } from "@mui/material";
import { TodoContext } from "../Provider/Provider";

const NewTask = () => {
  const { addTask } = useContext(TodoContext);
  const [text, setText] = useState("");

  const sendValue = () => {
    addTask(text);
    setText("");
  }

  return (
  
        <TextField id="new-task"
          placeholder='Add a new task'
          fullWidth
          autoFocus
          label="New task"
          variant="standard"
          value={text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setText(event.target.value);
          }}
          onKeyDown={(e) => {
            if(text && e.keyCode === 13){
              sendValue()
            }
          }}
        />
  
  );
}

export default NewTask;
