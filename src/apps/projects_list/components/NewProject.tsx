import React, { useRef } from 'react';
import Modal from './Modal';
import Input from './Input';
import Button from '@mui/material/Button';
import { Project } from '../ProjectsListApp';  // Adjust the import path as needed
import { ModalHandle } from './Modal';  // Adjust the import path as needed

interface NewProjectProps {
  onAdd: (projectData: Omit<Project, 'id'>) => void;
  onCancel: () => void;
}


const NewProject: React.FC<NewProjectProps> = ({ onAdd, onCancel }) => {
  const modalRef = useRef<ModalHandle>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const enteredTitle = titleRef.current?.value;
    const enteredDescription = descriptionRef.current?.value;
    const enteredDueDate = dueDateRef.current?.value;

    if (!enteredTitle || !enteredDescription || !enteredDueDate) {
      modalRef.current?.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
    onCancel();
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <Button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </Button>

            <Button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </Button>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
