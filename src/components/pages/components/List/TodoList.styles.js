import styled from '@emotion/styled';

export const TodoContainer = styled.div`
  width: 737px;
  height: 580px;
  top: 388px;
  left: 591px;
  padding: 32p;
  gap: 32px;
  border-radius: 24px;
  box-shadow: 0px 16px 32px 0px #0000001f;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 8px;
  width: 324px;
  height: 40px;
  margin: 0 auto;
`;

export const Tab = styled.button`
  width: 108px;
  height: 40px;
  padding: 8px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const ListArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 673px;
  height: 444px;
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
  gap: 16px;
  width: 673px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  width: 673px;
  height: 96px;
  padding: 16px;
  gap: 16px;
  background: #f9f9f9;
  border-radius: 8px;
`;

export const Checkbox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TodoText = styled.span`
  font-size: 16px;
  color: #333;
`;

export const DeleteButton = styled.button`
  width: 14px;
  height: 14px;
  border: none;
  color: #b9b9b9;
  display: flex;
  background: none;
  justify-content: center;
  align-items: center;
`;
