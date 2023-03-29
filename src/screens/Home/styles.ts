import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`;
export const Salutation = styled.View`
  padding: 16px 0;
  gap: 4px;
`;
export const SalutationTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY2};
  font-size: 22px;
`;
export const SalutationSubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY1};
  font-size: 14px;
  padding-left: 4px;
`;
