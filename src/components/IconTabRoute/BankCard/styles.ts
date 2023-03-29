import styled from "styled-components/native";

export const Container = styled.View`
  width: 350px;
  height: 180px;
  border-width: 1px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.LIGHTPURPLE1};
`;
