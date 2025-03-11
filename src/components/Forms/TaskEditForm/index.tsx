import { FC, useState, useRef, useEffect } from 'react';
import { TaskType } from '@myTypes/task';
import { useToast } from '@hooks/useToast'; // Импорт useToast

import {
  Form,
  InputTitle,
  InputDescription,
  PrioritySelect,
  ErrorMessage,
  SaveButton,
  ButtonGroup,
} from './styled';

interface TaskEditFormProps {
  task: TaskType;
  onSave: (updatedTask: TaskType) => void;
  setIsEditing: (isEditing: boolean) => void;
}

export const TaskEditForm: FC<TaskEditFormProps> = ({
  task,
  onSave,
  setIsEditing,
}) => {
  const [editedTitle, setEditedTitle] = useState<string>(task.title);
  const [editedDescription, setEditedDescription] = useState<string>(
    task.description || ''
  );
  const [editedPriority, setEditedPriority] = useState<string>(task.priority);
  const [validationError, setValidationError] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const { showToast } = useToast();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsEditing(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsEditing(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsEditing]);

  const validateForm = (): boolean => {
    if (editedTitle.trim().length > 40) {
      setValidationError('Task Title must not exceed 40 characters.');
      return false;
    }
    if (editedDescription.trim().length > 50) {
      setValidationError('Task description must not exceed 50 characters.');
      return false;
    }
    if (!['low', 'medium', 'high'].includes(editedPriority)) {
      setValidationError('Invalid priority selected.');
      return false;
    }
    setValidationError('');
    return true;
  };

  const handleSaveSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    onSave({
      id: task.id,
      title: editedTitle,
      description: editedDescription,
      priority: editedPriority,
    });
    setIsEditing(false);
    showToast('Task updated successfully!', 'success');
  };

  return (
    <Form onSubmit={handleSaveSubmit} ref={formRef}>
      <PrioritySelect
        value={editedPriority}
        onChange={(e) => setEditedPriority(e.target.value)}
      >
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </PrioritySelect>
      <InputTitle
        type="text"
        placeholder="Task title"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        required
      />
      <InputDescription
        type="text"
        placeholder="Add description"
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      {validationError && <ErrorMessage>{validationError}</ErrorMessage>}
      <ButtonGroup>
        <SaveButton type="submit">Save</SaveButton>
      </ButtonGroup>
    </Form>
  );
};
