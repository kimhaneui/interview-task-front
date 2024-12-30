import {
  Checkbox,
  DeleteButton,
  ListArea,
  Tab,
  Tabs,
  TodoContainer,
  TodoItem,
  TodoListContainer,
  TodoText,
  TotalCount,
} from './TodoList.styles';

const TodoList = () => {
  return (
    <TodoContainer>
      {/* 탭 영역 */}
      <Tabs>
        <Tab>All</Tab>
        <Tab>To Do</Tab>
        <Tab>Done</Tab>
      </Tabs>
      {/* 리스트 영역 */}
      <ListArea>
        {/* 총 개수 영역 */}
        <TotalCount>총 3개</TotalCount>
        {/* 리스트 */}
        <TodoListContainer>
          <TodoItem>
            <Checkbox />
            <TodoText>첫 번째 할 일</TodoText>
            <DeleteButton>X</DeleteButton>
          </TodoItem>
          <TodoItem>
            <Checkbox />
            <TodoText>두 번째 할 일</TodoText>
            <DeleteButton>X</DeleteButton>
          </TodoItem>
          <TodoItem>
            <Checkbox />
            <TodoText>세 번째 할 일</TodoText>
            <DeleteButton>X</DeleteButton>
          </TodoItem>
        </TodoListContainer>
      </ListArea>
    </TodoContainer>
  );
};

export default TodoList;
