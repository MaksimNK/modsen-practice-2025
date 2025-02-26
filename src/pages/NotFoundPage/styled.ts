import styled from 'styled-components';

export const NotFoundPageContainer = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F8FAFC;
  text-align: center;
`;


export const NotFoundTitle = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
`;

export const NotFoundMessage = styled.p`
    font-size: 1.2rem;
    margin-bottom: 30px;
`

export const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 30px;
`;
