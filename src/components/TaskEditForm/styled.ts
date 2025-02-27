import styled from 'styled-components';

export const EditFormStyled = styled.form`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 30px;
    box-shadow: 0 1px 2px #0000001A;

    input, select {
        margin-bottom: 10px;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 1rem;
    }

    select {
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url('data:image/svg+xml;utf8,<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: 5px;
        padding-right: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 8px;
        margin-bottom: 10px;
        font-size: 1rem;
    }

    button {
        padding: 8px 15px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        font-size: 0.9rem;
        width: 100%;
        margin-bottom: 5px;

        &:first-child {
            background-color: #007bff;
            color: white;

            &:hover {
                background-color: #0056b3;
            }
        }

        &:last-child {
            background-color: #dc3545;
            color: white;
            &:hover {
                background-color: #c82333;
            }
        }
    }

    .priority-selector-container {
        margin-bottom: 10px;
        position: relative;
    }

    .selected-priority {
        cursor: pointer;
        font-size: 0.8rem;
        color: #fff;
        background-color: #ffc107;
        padding: 3px 6px;
        border-radius: 30px;
        margin-top: 5px;
        display: inline-block;
        text-align: left;

        &.high {
            background-color: #dc3545;
            color: white;
        }
        &.medium {
            background-color: #EEF2FF;
            color: #4F46E5;
        }
        &.low {
            background-color: #28a745;
            color: white;
        }
    }

    .priority-options-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        z-index: 11;
        width: 100%;
        padding: 5px 0;
        display: flex;
        flex-direction: column;
    }

    .priority-option {
        padding: 8px;
        cursor: pointer;
        text-align: left;
        font-size: 1rem;
        color: #333;

        &:hover {
            background-color: #f0f0f0;
        }

        &.high {
            color: #dc3545;
        }
        &.medium {
            color: #4F46E5;
        }
        &.low {
            color: #28a745;
        }
    }

    select {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`;

export const TaskTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin: 0 0 5px 0;
`;


export const TaskPriority = styled.span`
    cursor: pointer;
    text-align: center;
    width: auto;
    min-width: 50px;
    font-size: 1rem;
    color: #fff;
    background-color: #ffc107;
    padding: 8px;
    border-radius: 8px;
    margin-top: 5px;
    display: block;
    text-align: left;
    width: 100%;

    &.high {
        background-color: #dc3545;
        color: white;
    }
    &.medium {
        background-color: #EEF2FF;
        color: #4F46E5;
    }
    &.low {
        background-color: #28a745;
        color: white;
    }
`;