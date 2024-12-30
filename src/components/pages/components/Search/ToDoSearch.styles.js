import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 92px;
  padding-top: 30px;
`;

export const InputBox = styled.input`
  width: 737px;
  padding: 32px;
  border-radius: 24px;
  border: none;
  background: #e5e5e5;
  font-size: 16px;
  color: #333333;
  &::placeholder {
    color: #b9b9b9;
  }
`;
