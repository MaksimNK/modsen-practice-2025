import { FC, useState, useRef, useEffect } from 'react';
import {
  Form,
  InputTitle,
  InputDescription,
  PrioritySelect,
  ErrorMessage,
  SaveButton,
  ButtonGroup,
} from './styled';
import { TaskType } from '../../constants/constant';

interface ICreateTaskFormProps {
  onCreateTask: (newTask: TaskType, targetColumn: string) => void;
  columnTitle: string;
  setIsCreating: (IsCreating: boolean) => void;
}

export const CreateTaskForm: FC<ICreateTaskFormProps> = ({
  onCreateTask,
  columnTitle,
  setIsCreating,
}) => {
  const [newTitle, setNewTitle] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');
  const [newPriority, setNewPriority] = useState<string>('medium');
  const [validationError, setValidationError] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsCreating(false); // Close the form
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCreating(false); // Close the form
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsCreating]);

  const validateForm = (): boolean => {
    if (newTitle.trim().length > 40) {
      setValidationError('Task Title must not exceed 40 characters.');
      return false;
    }
    if (newDescription.trim().length > 50) {
      setValidationError('Task description must not exceed 50 characters.');
      return false;
    }
    if (!['low', 'medium', 'high'].includes(newPriority)) {
      setValidationError('Invalid priority selected.');
      return false;
    }
    setValidationError('');
    return true;
  };

  const handleCreateTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    const uuid = self.crypto.randomUUID();
    const newTask = {
      id: uuid,
      title: newTitle,
      description: newDescription,
      priority: newPriority,
    };
    onCreateTask(newTask, columnTitle);
    setNewTitle('');
    setNewDescription('');
    setNewPriority('medium');
    setIsCreating(false);
  };

  return (
    <Form onSubmit={handleCreateTaskSubmit} ref={formRef}>
      <PrioritySelect
        value={newPriority}
        onChange={(e) => setNewPriority(e.target.value)}
      >
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </PrioritySelect>
      <InputTitle
        type="text"
        placeholder="Task title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        required
      />
      <InputDescription
        type="text"
        placeholder="Add description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      {validationError && <ErrorMessage>{validationError}</ErrorMessage>}
      <ButtonGroup>
        <SaveButton>Save</SaveButton>
      </ButtonGroup>
    </Form>
  );
};
