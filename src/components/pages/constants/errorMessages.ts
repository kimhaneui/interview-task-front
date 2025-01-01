import { MAX_TODO_LENGTH, MAX_UNCOMPLETED_TODOS } from "./todoConstants";

export const ERROR_MESSAGES = {
    EMPTY_TODO: '할 일을 입력해주세요.',
    MAX_LENGTH_EXCEEDED: `할 일은 최대 ${MAX_TODO_LENGTH}자까지 입력 가능합니다.`,
    MAX_UNCOMPLETED_TODOS: `처리되지 않은 '할 일'은 최대 ${MAX_UNCOMPLETED_TODOS}개까지 가능합니다.`,
    DUPLICATE: '이미 동일한 할 일이 있습니다.'
  };
  