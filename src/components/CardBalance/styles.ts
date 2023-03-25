import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${RFValue(270)}px;
  height: ${RFValue(120)}px;
  border-radius: 53px;
  background-color: ${({ theme }) => theme.COLORS.PURPLEDARK3};
`;
export const Content = styled.ImageBackground`
  width: ${RFValue(270)}px;
  height: ${RFValue(120)}px;
  border-radius: 50px;
`;
