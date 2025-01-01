import React, { act } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./components/List/TodoList";
import useTodoStore from "../../store/useTodoStore";

jest.mock("../../store/useTodoStore", () => {
  let todos = [
    { id: 1, text: "첫 번째 할 일", completed: false },
    { id: 2, text: "두 번째 할 일", completed: true },
  ];

  return () => ({
    todos,
    activeTab: "All",
    setActiveTab: jest.fn(),
    addTodo: jest.fn((text) => {
      todos.push({ id: Date.now(), text, completed: false });
    }),
    toggleTodo: jest.fn((id) => {
      todos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    }),
    deleteTodo: jest.fn((id) => {
      todos = todos.filter((todo) => todo.id !== id);
    }),
  });
});

describe("TodoList Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the correct number of todos for the active tab", () => {
    render(<TodoList />);

    // 초기 탭: All
    expect(screen.getByText("총 2개")).toBeInTheDocument();

    // To Do 탭 클릭
    fireEvent.click(screen.getByText("To Do"));
    expect(screen.getByText("총 1개")).toBeInTheDocument();

    // Done 탭 클릭
    fireEvent.click(screen.getByText("Done"));
    expect(screen.getByText("총 1개")).toBeInTheDocument();
  });

  it("adds a new todo", () => {
    const { addTodo } = useTodoStore();
    render(<TodoList />);

    act(() => {
      addTodo("새 할 일");
    });

     waitFor(() =>
      expect(screen.getByText("새 할 일")).toBeInTheDocument()
    );
  });

  it("toggles the completed state of a todo", async () => {
    const { toggleTodo } = useTodoStore();
    render(<TodoList />);

    // 첫 번째 체크박스 클릭 전
    const firstCheckbox = screen.getByText("첫 번째 할 일").previousSibling;
    expect(firstCheckbox).not.toHaveTextContent("CheckIcon");

    // 클릭 후 완료 상태 반전
    toggleTodo(1)

    // 완료 상태 반영 확인
    await waitFor(() => {
      expect(screen.getByTestId("check-icon")).toBeInTheDocument()
    });
  });

  it("deletes a todo and updates the list count", () => {
    const { deleteTodo } = useTodoStore();
    render(<TodoList />);
  
    // 초기 상태에서의 할 일 개수 확인
    const initialCount = screen.getByText(/총 \d+개/).textContent;
    
    act(() => {
      deleteTodo(1);
    });
  
    // 삭제 후 개수 확인
    waitFor(() => {
      const updatedCount = screen.getByText(/총 \d+개/).textContent;
      expect(updatedCount).not.toBe(initialCount); // 개수가 변경되었는지 확인
    });
  });
  
});

