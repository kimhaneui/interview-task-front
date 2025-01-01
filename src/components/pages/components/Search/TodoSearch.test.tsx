import useTodoStore from '../../../../store/useTodoStore';
import TodoSearch from './TodoSearch';
import React, { act } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ERROR_MESSAGES } from '../../constants/errorMessages';
import {
  MAX_TODO_LENGTH,
  MAX_UNCOMPLETED_TODOS,
} from '../../constants/todoConstants';

// Mocking the Zustand store
jest.mock('../../../../store/useTodoStore', () => {
  return jest.fn();
});

describe('TodoSearch Component', () => {
  let addTodoMock: jest.Mock;
  let todosMock: Array<{ id: number; text: string; completed: boolean }>;

  beforeEach(() => {
    addTodoMock = jest.fn();
    todosMock = [];
    (useTodoStore as unknown as jest.Mock).mockReturnValue({
      todos: todosMock,
      addTodo: addTodoMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders input box correctly', () => {
    render(<TodoSearch />);
    const input = screen.getByPlaceholderText(ERROR_MESSAGES.EMPTY_TODO);
    expect(input).toBeInTheDocument();
  });

  it('shows error when input is empty and Enter is pressed', () => {
    render(<TodoSearch />);
    const input = screen.getByPlaceholderText(ERROR_MESSAGES.EMPTY_TODO);

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    const errorMessage = screen.getByText(ERROR_MESSAGES.EMPTY_TODO);
    expect(errorMessage).toBeInTheDocument();
  });

  it('shows error when input exceeds maximum length', () => {
    render(<TodoSearch />);
    const input = screen.getByPlaceholderText(ERROR_MESSAGES.EMPTY_TODO);

    fireEvent.change(input, {
      target: { value: 'a'.repeat(MAX_TODO_LENGTH + 1) },
    });

    const errorMessage = screen.getByText(ERROR_MESSAGES.MAX_LENGTH_EXCEEDED);
    expect(errorMessage).toBeInTheDocument();
  });

  it('adds a new todo when valid input is provided', () => {
    render(<TodoSearch />);
    const input = screen.getByPlaceholderText(ERROR_MESSAGES.EMPTY_TODO);

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(addTodoMock).toHaveBeenCalledWith('New Todo');
    expect(addTodoMock).toHaveBeenCalledTimes(1);
  });

  it('shows error when uncompleted todos exceed the maximum limit', () => {
    todosMock = Array.from({ length: MAX_UNCOMPLETED_TODOS }, (_, i) => ({
      id: i,
      text: `Todo ${i}`,
      completed: false,
    }));
    (useTodoStore as unknown as jest.Mock).mockReturnValue({
      todos: todosMock,
      addTodo: addTodoMock,
    });

    render(<TodoSearch />);
    const input = screen.getByPlaceholderText(ERROR_MESSAGES.EMPTY_TODO);

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    const errorMessage = screen.getByText(ERROR_MESSAGES.MAX_UNCOMPLETED_TODOS);
    expect(errorMessage).toBeInTheDocument();
    expect(addTodoMock).not.toHaveBeenCalled();
  });
  it('shows error when a duplicate todo is added', () => {
    todosMock = [{ id: 1, text: 'Existing Todo', completed: false }];
    (useTodoStore as unknown as jest.Mock).mockReturnValue({
      todos: todosMock,
      addTodo: addTodoMock,
    });

    render(<TodoSearch />);
    const input = screen.getByPlaceholderText(ERROR_MESSAGES.EMPTY_TODO);

    // Add a duplicate todo
    fireEvent.change(input, { target: { value: 'Existing Todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    const errorMessage = screen.getByText(ERROR_MESSAGES.DUPLICATE);
    expect(errorMessage).toBeInTheDocument();
    expect(addTodoMock).not.toHaveBeenCalled();
  });
  it('clears the error message after successful todo addition', () => {
    render(<TodoSearch />);
    const input = screen.getByPlaceholderText(ERROR_MESSAGES.EMPTY_TODO);

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    const errorMessage = screen.queryByText(ERROR_MESSAGES.EMPTY_TODO);
    expect(errorMessage).not.toBeInTheDocument();
  });
});
