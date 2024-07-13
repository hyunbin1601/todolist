import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: 20px;
`;

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <ListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListContainer>
  );
};

export default TodoList;
