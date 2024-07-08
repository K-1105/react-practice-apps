import Button from '@mui/material/Button';
import { useState, ChangeEvent } from 'react';

interface NewTaskProps {
  onAdd: (task: string) => void;
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
    onAdd(enteredTask);
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
      <Button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>
        Add Task
      </Button>
    </div>
  );
};

export default NewTask;
