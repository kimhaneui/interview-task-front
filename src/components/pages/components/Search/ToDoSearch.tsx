import { useMemo, useState } from 'react';
import { Container, InputBox, ErrorMessage } from './TodoSearch.styles';
import useTodoStore from '../../../../store/useTodoStore';
import { Itodo } from '../../types/Todo.types';
import { MAX_TODO_LENGTH, MAX_UNCOMPLETED_TODOS } from '../../constants/todoConstants';
import { ERROR_MESSAGES } from '../../constants/errorMessages';


const TodoSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const { todos, addTodo } = useTodoStore();

  const uncompletedTodosCount = useMemo(() => {
    return todos.filter((todo: Itodo) => !todo.completed).length;
  }, [todos]);

  const resetInput = () => {
    setInputValue('');
    setError('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (inputValue.trim() === '') {
        setError(ERROR_MESSAGES.EMPTY_TODO);
        return;
      }
      if (inputValue.length > MAX_TODO_LENGTH) {
        setError(ERROR_MESSAGES.MAX_LENGTH_EXCEEDED);
        return;
      }
      if (uncompletedTodosCount >= MAX_UNCOMPLETED_TODOS) {
        setError(ERROR_MESSAGES.MAX_UNCOMPLETED_TODOS);
        return;
      }

      addTodo(inputValue);
      resetInput();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length <= MAX_TODO_LENGTH) {
      setInputValue(value);
      setError('');
    } else {
      setError(ERROR_MESSAGES.MAX_LENGTH_EXCEEDED);
    }
  };

  return (
    <Container>
      <InputBox
        type="text"
        value={inputValue}
        placeholder={ERROR_MESSAGES.EMPTY_TODO}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* 에러 메시지 표시 */}
    </Container>
  );
};

export default TodoSearch;
