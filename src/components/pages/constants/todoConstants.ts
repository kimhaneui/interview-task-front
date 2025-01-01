export const MAX_TODO_LENGTH = 20; // 최대 글자 수
export const MAX_UNCOMPLETED_TODOS = 10; // 최대 처리되지 않은 '할 일' 수

export const TABS = {
    ALL: 'All',
    TO_DO: 'To Do',
    DONE: 'Done',
  } as const;
  
  export type TabType = keyof typeof TABS;
  