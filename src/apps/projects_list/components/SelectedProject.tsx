import React from 'react';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  projectId?: number | null;
}

interface Project {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

interface SelectedProjectProps {
  project: Project;
  onDelete: () => void;
  onAddTask: (task: Omit<Task, 'id'>) => void;
  onDeleteTask: (id: string) => void;
  tasks: Task[];
}

const SelectedProject: React.FC<SelectedProjectProps> = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  // Your component implementation here...
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>{project.dueDate}</p>
      <button onClick={onDelete}>Delete Project</button>
      {/* Add more UI elements and logic as needed */}
    </div>
  );
};

export default SelectedProject;
