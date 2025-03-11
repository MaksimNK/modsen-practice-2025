import { FC, useEffect, useRef } from 'react';
import { EditMenuItem, EditMenuStyled } from './styled';

interface TaskEditMenuProps {
  onDelete: () => void;
  onClose: () => void;
  onEdit: () => void;
}

export const EditMenu: FC<TaskEditMenuProps> = ({
  onDelete,
  onClose,
  onEdit,
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <EditMenuStyled
      ref={menuRef}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <EditMenuItem
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Edit
      </EditMenuItem>
      <EditMenuItem
        onClick={() => {
          onDelete();
          onClose();
        }}
      >
        Delete
      </EditMenuItem>
    </EditMenuStyled>
  );
};
