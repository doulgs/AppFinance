import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 193px;
  height: 63px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PURPLEDARK2};
`;
export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.WHITE_100};
`;
