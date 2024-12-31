import { useState } from 'react';
import CloseIcon from '../../../icons/CloseIcon';
import useTodoStore from '../../../../store/useTodoStore';
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
import CheckIcon from '../../../icons/CheckIcon';
const TodoList = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { todos, toggleTodo, deleteTodo } = useTodoStore();
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  // 필터링된 리스트
  const filteredTodos = todos.filter((todo: any) => {
    if (activeTab === 'To Do') return !todo.completed;
    if (activeTab === 'Done') return todo.completed;
    return true;
  });
  return (
    <TodoContainer>
      {/* 탭 영역 */}
      <Tabs>
        <Tab
          isActive={activeTab === 'All'}
          onClick={() => handleTabClick('All')}
        >
          All
        </Tab>
        <Tab
          isActive={activeTab === 'To Do'}
          onClick={() => handleTabClick('To Do')}
        >
          To Do
        </Tab>
        <Tab
          isActive={activeTab === 'Done'}
          onClick={() => handleTabClick('Done')}
        >
          Done
        </Tab>
      </Tabs>
      {/* 리스트 영역 */}
      <ListArea>
        {/* 총 개수 영역 */}
        <TotalCount>총 {filteredTodos.length}개</TotalCount>
        {/* 리스트 */}
        <TodoListContainer>
          {filteredTodos.map((todo: any) => (
            <TodoItem key={todo.id}>
              <Checkbox
                isChecked={todo.completed}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.completed && <CheckIcon />}
              </Checkbox>
              <TodoText isChecked={todo.completed}>{todo.text}</TodoText>
              <DeleteButton onClick={() => deleteTodo(todo.id)}>
                <CloseIcon />
              </DeleteButton>
            </TodoItem>
          ))}
        </TodoListContainer>
      </ListArea>
    </TodoContainer>
  );
};

export default TodoList;
