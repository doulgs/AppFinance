import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`;
export const ContentHeader = styled.View`
  width: 100%;
  height: 135px;
  padding: ${RFValue(33)}px;
  margin-top: ${RFValue(33)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const CHeader = styled.View``;
export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSREGULAR};
  color: ${({ theme }) => theme.COLORS.PURPLEDARK3};
`;
export const SubTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.COLORS.GRAY4};
`;

export const ProfileIcon = styled.TouchableOpacity`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.PURPLEDARK2};
  border-radius: 36px;
  align-items: center;
  justify-content: center;
`;
export const Profile = styled.Image`
  width: ${RFValue(54)}px;
  height: ${RFValue(54)}px;
  border-radius: 36px;
`;
export const ContentBody = styled.View``;
