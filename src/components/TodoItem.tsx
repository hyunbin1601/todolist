import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todoSlice';
import { Todo } from '../features/todos/types';
import styled from 'styled-components';

interface TodoItemProps {
  todo: Todo;
}

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Text = styled.span<{ completed: boolean }>`
  flex: 1;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const Button = styled.button`
  margin-left: 10px;
`;

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();

  return (
    <ItemContainer>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <Text completed={todo.completed}>{todo.text}</Text>
      <Button onClick={() => dispatch(removeTodo(todo.id))}>Delete</Button>
    </ItemContainer>
  );
};

export default TodoItem;
