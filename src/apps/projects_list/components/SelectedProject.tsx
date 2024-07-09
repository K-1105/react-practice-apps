import Button from '@mui/material/Button';
import React from 'react';
import { TaskProps } from './Tasks';
import Tasks from './Tasks';

interface Project {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

interface SelectedProjectProps {
  project: Project;
  onDelete: () => void;
  onAddTask: (task: Omit<TaskProps, 'id'>) => void;
  onDeleteTask: (id: string) => void;
  tasks: TaskProps[];
  onToggleCompleteTask: (id: string) => void;
}

const SelectedProject: React.FC<SelectedProjectProps> = ({ project, onDelete, onAddTask, onDeleteTask, tasks, onToggleCompleteTask }) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
          <Button className="text-stone-600 hover:text-stone-950" onClick={onDelete}>
            Delete
          </Button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} onToggleComplete={onToggleCompleteTask} />
    </div>
  );
};

export default SelectedProject