import React from 'react';
import Button from '@mui/material/Button';
import NewTask from './NewTask';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  projectId?: number | null;
}

interface TasksProps {
  tasks: Task[];
  onAdd: (task: string) => void;
  onDelete: (id: string) => void;
}

const Tasks: React.FC<TasksProps> = ({ tasks, onAdd, onDelete }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <Button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;