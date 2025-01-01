import styled from '@emotion/styled';
import { CheckboxProps, TabProps } from '../../types/Todo.types';

export const TodoContainer = styled.div`
  width: 737px;
  min-height: 580px;
  margin-top: 20px;
  top: 388px;
  left: 591px;
  padding: 32p;
  gap: 32px;
  border-radius: 24px;
  box-shadow: 0px 16px 32px 0px #0000001f;
`;

export const Tabs = styled.div`
  display: flex;
  width: 324px;
  height: 40px;
  margin: 0 auto;
  padding-top: 25px;
`;

export const Tab = styled.button<TabProps>`
  width: 108px;
  height: 40px;
  padding: 8px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  background: ${({ isActive }) => (isActive ? '#EBF4FF' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#2182F3' : '#454545')};
`;


export const ListArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 673px;
  min-height: 444px;
  margin: 0 auto;
`;

export const TotalCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 673px;
  height: 60px;
  padding: 16px 0 0 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const TodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 673px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  height: 96px;
`;

export const Checkbox = styled.div<CheckboxProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({ isChecked }) => (isChecked ? 'transparent' : '#e5e5e5')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isChecked }) => (isChecked ? '#2182F3' : 'transparent')};
`;

export const TodoText = styled.span<CheckboxProps>`
  font-size: 16px;
  padding-left: 10px;
  color: ${({ isChecked }) => (isChecked ? '#868686' : '#333')};
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 20px;
  border: none;
  color: #b9b9b9;
  display: flex;
  background: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
