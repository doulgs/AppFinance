import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  Loading?: boolean;
  title?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  Loading = false,
  title,
  children,
  ...rest
}) => {
  return (
    <Container {...rest} activeOpacity={0.8}>
      {Loading ? (
        <ActivityIndicator size={25} color="#FAFAFA" />
      ) : children ? (
        children
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
