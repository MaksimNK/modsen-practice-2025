import { FC, useState } from 'react';
import { FormContainer, InputField, SaveButton, ErrorMessage } from './styled';
import { useToast } from '@hooks/useToast';

interface IColumnEditFormProps {
  title: string;
  titleBarColor: string;
  onSave: (updateColumn: { title: string; color: string }) => void;
}

export const ColumnEditForm: FC<IColumnEditFormProps> = ({
  title,
  titleBarColor,
  onSave,
}) => {
  const [editedTitle, setEditedTitle] = useState<string>(title);
  const [editedColor, setEditedColor] = useState<string>(titleBarColor);
  const [titleError, setTitleError] = useState<string | null>(null);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!editedTitle.trim()) {
      setTitleError('Title cannot be empty');
      return;
    }
    if (editedTitle.trim().length > 30) {
      setTitleError('Title cannot be more than 30 chars');
      return;
    }
    if (editedTitle.trim().length < 3) {
      setTitleError('Title cannot be less than 3 chars');
      return;
    }

    setTitleError(null);
    onSave({ title: editedTitle, color: editedColor });
    showToast('Column updated successfully!', 'success');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        placeholder="Column Title"
      />
      {titleError && <ErrorMessage>{titleError}</ErrorMessage>}
      <InputField
        type="color"
        value={editedColor}
        onChange={(e) => setEditedColor(e.target.value)}
      />
      <SaveButton type="submit">Save</SaveButton>
    </FormContainer>
  );
};
