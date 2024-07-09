import Button from '@mui/material/Button';
import { useState, ChangeEvent } from 'react';
import { TaskProps } from './Tasks';

interface NewTaskProps {
  onAdd: (task: TaskProps) => void;
}

const NewTask: React.FC<NewTaskProps> = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState<string>('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      return;
    }
    // Create a new TaskProps object
    const newTask: TaskProps = {
      id: Math.random().toString(), // Generating a random ID for the task
      text: enteredTask,
      completed: false,
      projectId: null, // Adjust this as necessary if you have projectId
    };

    onAdd(newTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <Button onClick={handleClick}>
        Add Task
      </Button>
    </div>
  );
};

export default NewTask;
