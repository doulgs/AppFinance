import styled from "styled-components/native";
import { Fontisto } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled(RectButton).attrs({
  elevation: 2,
})`
  width: ${RFValue(130)}px;
  height: ${RFValue(60)}px;
  margin: ${RFValue(10)}px;
  border-radius: ${RFValue(5)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
`;
export const IconeGoogle = styled.Image`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-left: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;
export const Icone = styled(Fontisto)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
