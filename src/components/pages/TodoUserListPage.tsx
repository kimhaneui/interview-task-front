'use client';
import styled from '@emotion/styled';
import Header from './components/Header/TodoHeader';
import List from './components/List/TodoList';
import Search from './components/Search/TodoSearch';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TodoUserListPage = () => {
  return (
    <Container>
      <Header></Header>
      <Search></Search>
      <List></List>
    </Container>
  );
};

export default TodoUserListPage;
