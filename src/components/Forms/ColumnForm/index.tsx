import { FC, useState, useRef, useEffect } from 'react';
import {
  Form,
  TextInput,
  ColorInput,
  SubmitButton,
  ErrorMessage,
} from './styled';
import { useReduxActions } from '@hooks/useReduxActions';

interface ColumnFormProps {
  onClose: () => void;
}

export const ColumnForm: FC<ColumnFormProps> = ({ onClose }) => {
  const { createColumn } = useReduxActions();
  const menuRef = useRef<HTMLFormElement | null>(null);

  const [newColumnTitle, setNewColumnTitle] = useState<string>('');
  const [newColumnColor, setNewColumnColor] = useState<string>('#000000');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const validateForm = () => {
    if (!newColumnTitle.trim()) {
      setError('Column title is required.');
      return false;
    }
    if (newColumnTitle.trim().length < 3) {
      setError('Column title must be at least 3 characters long.');
      return false;
    }
    if (newColumnTitle.trim().length > 30) {
      setError('Column title must be less than 30 characters long.');
      return false;
    }
    setError('');
    return true;
  };

  const handleAddColumn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    createColumn({
      id: self.crypto.randomUUID(),
      title: newColumnTitle,
      color: newColumnColor,
    });

    setNewColumnTitle('');
    setNewColumnColor('#000000');
    onClose();
  };

  return (
    <Form onSubmit={handleAddColumn} ref={menuRef}>
      <TextInput
        placeholder="New Column Title"
        value={newColumnTitle}
        onChange={(e) => setNewColumnTitle(e.target.value)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ColorInput
        value={newColumnColor}
        onChange={(e) => setNewColumnColor(e.target.value)}
      />
      <SubmitButton type="submit">Create</SubmitButton>
    </Form>
  );
};
