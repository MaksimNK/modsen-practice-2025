import React, { FC, useState, useRef, useEffect, useCallback } from "react";
import { EditFormStyled, TaskTitle } from "./styled";

interface TaskEditFormProps {
    title: string;
    description?: string;
    priority: string;
    onSave: (updatedTask: { title: string; description?: string; priority: string }) => void;
    onCancel: () => void;
}


export const TaskEditForm: FC<TaskEditFormProps> = ({
    title,
    description,
    priority,
    onSave,
    onCancel,
}) => {
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);
    const [editedPriority, setEditedPriority] = useState(priority);
    const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSave = useCallback(() => {
        onSave({
            title: editedTitle,
            description: editedDescription,
            priority: editedPriority,
        });
    }, [editedTitle, editedDescription, editedPriority, onSave]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                handleSave();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleSave]);

    const handlePriorityClick = () => {
        setIsPriorityDropdownOpen(!isPriorityDropdownOpen);
    };

    const handlePrioritySelect = (selectedPriority: string) => {
        setEditedPriority(selectedPriority);
        setIsPriorityDropdownOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSave();
    };

    return (
        <EditFormStyled onSubmit={handleSubmit} ref={formRef}>
            <div className="priority-selector-container">
                <div className="selected-priority" onClick={handlePriorityClick}>
                    <span className={`task-priority-label ${editedPriority}`}>
                        {editedPriority.toUpperCase()}
                    </span>
                </div>

                {isPriorityDropdownOpen && (
                    <div className="priority-options-dropdown">
                        <div
                            className="priority-option low"
                            onClick={() => handlePrioritySelect("low")}
                        >
                            Low
                            <span className={`task-priority-label low`}>Low</span>
                        </div>
                        <div
                            className="priority-option medium"
                            onClick={() => handlePrioritySelect("medium")}
                        >
                            Medium
                            <span className={`task-priority-label medium`}>Medium</span>
                        </div>
                        <div
                            className="priority-option high"
                            onClick={() => handlePrioritySelect("high")}
                        >
                            High
                            <span className={`task-priority-label high`}>High</span>
                        </div>
                    </div>
                )}
                <select
                    value={editedPriority}
                    onChange={(e) => setEditedPriority(e.target.value)}
                    tabIndex={-1}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            
            <TaskTitle>
                <input
                    type="text"
                    placeholder="Task title"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    required
                    style={{ border: "none", marginBottom: "0" }}
                />
            </TaskTitle>
            <input
                type="text"
                placeholder="Task description"
                value={editedDescription || ""}
                onChange={(e) => setEditedDescription(e.target.value)}
            />


        </EditFormStyled>
    );
};
