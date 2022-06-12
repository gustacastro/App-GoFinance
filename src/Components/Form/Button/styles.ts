import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { AnyStyledComponent } from "styled-components";

export const Container = styled(RectButton as unknown as AnyStyledComponent)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};

  justify-content: center;
  align-items: center;

  padding: 18px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;
