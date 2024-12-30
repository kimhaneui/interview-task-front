import { useState } from 'react';
import CloseIcon from '../../../icons/CloseIcon';
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
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <TodoContainer>
      {/* 탭 영역 */}
      <Tabs>
        <Tab
          isActive={activeTab === 'All'}
          onClick={() => handleTabClick('All')}>
          All
        </Tab>
        <Tab
          isActive={activeTab === 'To Do'}
          onClick={() => handleTabClick('To Do')}>
          To Do
        </Tab>
        <Tab
          isActive={activeTab === 'Done'}
          onClick={() => handleTabClick('Done')}>
          Done
        </Tab>
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
            <DeleteButton>
              <CloseIcon></CloseIcon>
            </DeleteButton>
          </TodoItem>
          <TodoItem>
            <Checkbox />
            <TodoText>두 번째 할 일</TodoText>
            <DeleteButton>
              <CloseIcon></CloseIcon>
            </DeleteButton>
          </TodoItem>
          <TodoItem>
            <Checkbox />
            <TodoText>세 번째 할 일</TodoText>
            <DeleteButton>
              <CloseIcon></CloseIcon>
            </DeleteButton>
          </TodoItem>
        </TodoListContainer>
      </ListArea>
    </TodoContainer>
  );
};

export default TodoList;
