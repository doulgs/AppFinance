import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 4px;
  margin: 8px 0;
  border-radius: 8px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;
export const InputContainer = styled.TextInput`
  flex: 1;
  border: 0px;
  border-radius: 8px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
