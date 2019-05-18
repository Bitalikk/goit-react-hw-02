import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;
export const HumburgerButton = styled.button`
  padding: 0;
  width: 50px;
  border: 0;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  outline: 0;
  font-size: 40px;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 300px;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.14);
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 8px 12px;

  :hover {
    background-color: rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
`;
