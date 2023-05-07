import styled from "styled-components";

export const List = styled.ul`
    font-size: 16px;
    line-height: 1.2;
    margin: 0;
    padding: 15px;
`;

export const ListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const Button = styled.button`
    font-size: 14px;
    line-height: 1.2;
    padding: 2px 10px;
    border: 1px solid #262c4d;
    border-radius: 3px;
    color: white;
    background-color: #262c4d;
    margin-left: 20px;
`;