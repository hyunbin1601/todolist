import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const App = () => {
  return (
    <AppContainer>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </AppContainer>
  );
};

export default App;
