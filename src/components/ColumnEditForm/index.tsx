import { FC, useState } from 'react';
import { FormContainer, InputField, SaveButton } from './styled';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title: editedTitle, color: editedColor });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputField
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        placeholder="Column Title"
      />
      <InputField
        type="color"
        value={editedColor}
        onChange={(e) => setEditedColor(e.target.value)}
      />
      <SaveButton type="submit">Save</SaveButton>
    </FormContainer>
  );
};
