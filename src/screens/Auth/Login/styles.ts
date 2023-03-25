import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: ${RFValue(25)}px;
  flex: 1;
`;
export const ContentHeader = styled.View`
  padding: ${RFValue(20)}px;
  align-items: center;
  justify-content: center;
`;
export const ContentBody = styled.View``;
export const ContentFooter = styled.View`
  margin: 24px 0;
  align-items: center;
  justify-content: center;
`;
export const ViewButton = styled.View`
  flex-direction: row;
`;
export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;
export const Description = styled.Text`
  text-align: center;
  margin-top: ${RFValue(60)}px;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
export const LinkContainer = styled.TouchableWithoutFeedback``;

export const LinkText = styled.Text`
  margin-top: ${RFValue(5)}px;
  margin-bottom: ${RFValue(20)}px;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.GRAY4};
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};
`;
