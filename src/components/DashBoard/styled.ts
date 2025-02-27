import styled from 'styled-components';

export const PageContainer = styled.div`
    font-family: "Plus Jakarta Sans", sans-serif;
    display: flex;
    flex-direction: column;
    background-color: #F8FAFC;
    min-height: 100%;
`

export const BoardContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 16px;
    background-color: #fff;
    overflow-x: auto;
    box-sizing: border-box;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
    &::-webkit-scrollbar {
      display: none;
    }
`;
