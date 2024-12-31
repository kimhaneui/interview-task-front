import { useState } from 'react';
import { Container, InputBox } from './ToDoSearch.styles';
import useTodoStore from '../../../../store/useTodoStore';
const ToDoSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useTodoStore();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.trim() === '') return;
      addTodo(inputValue);
      setInputValue(''); 
    }
  };

  return (
    <Container>
      <InputBox
        type="text"
        value={inputValue}
        placeholder="할 일을 입력해주세요"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
    </Container>
  );
};

export default ToDoSearch;
