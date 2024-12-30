'use client';
import styled from '@emotion/styled';
import Header from './components/Header/TodoHeader';
import List from './components/List/TodoList';
import Search from './components/Search/ToDoSearch';

interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const TodoUserListPage = ({}: Props) => {
  return (
    <Container>
      <Header></Header>
      <Search></Search>
      <List></List>
    </Container>
  );
};

export default TodoUserListPage;
