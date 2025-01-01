import { useState, useMemo } from 'react';
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
import { Itodo } from '../../types/Todo.types';
import { TABS, TabType } from '../../constants/todoConstants';

const filterTodos = (todos: Itodo[], tab: string): Itodo[] => {
  switch (tab) {
    case TABS.TO_DO:
      return todos.filter((todo) => !todo.completed);
    case TABS.DONE:
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};

const TodoList = () => {
  const [activeTab, setActiveTab] = useState<TabType>('ALL'); 
  const { todos, toggleTodo, deleteTodo } = useTodoStore();

  const filteredTodos = useMemo(() => filterTodos(todos, TABS[activeTab]), [todos, activeTab]);

  const handleTabClick = (tabName: TabType) => {
    setActiveTab(tabName);
  };

  return (
    <TodoContainer>
      <Tabs>
        {Object.keys(TABS).map((tabKey) => (
          <Tab
            key={tabKey}
            isActive={activeTab === tabKey}
            onClick={() => handleTabClick(tabKey as TabType)}
          >
            {TABS[tabKey as TabType]}
          </Tab>
        ))}
      </Tabs>
      <ListArea>
        <TotalCount>총 {filteredTodos.length}개</TotalCount>
        <TodoListContainer>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id}>
              <Checkbox isChecked={todo.completed} onClick={() => toggleTodo(todo.id)}>
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
