import { FC } from "react";
import styled from 'styled-components';

interface TaskEditMenuProps {
    onDelete: () => void;
    onClose: () => void;
    onEdit: () => void; 
}

const EditMenuStyled = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 30px;
    padding: 10px 0;
    box-shadow: 0 1px 2px #0000001A;
    z-index: 10;
    min-width: 120px;
    font-size: 0.9rem;
`;

const EditMenuItem = styled.button`
    display: block;
    width: 100%;
    padding: 8px 20px;
    text-align: left;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #333;
    &:hover {
        background-color: #f0f0f0;
    }
`;


export const TaskEditMenu: FC<TaskEditMenuProps> = ({ onDelete, onClose, onEdit }) => {
    return (
        <EditMenuStyled
            onClick={(e) => e.stopPropagation()}
            onBlur={onClose}
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