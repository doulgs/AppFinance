import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { Container, InputContainer } from "./styles";
import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps {
  RightIcon?: boolean;
  LeftIcon?: boolean;
  iconNameLeft?: React.ComponentProps<typeof Ionicons>["name"];
  iconNameRight?: React.ComponentProps<typeof Ionicons>["name"];
  iconSize?: number;
  iconColor?: string;
}

const Input: React.FC<InputProps> = ({
  RightIcon,
  LeftIcon,
  iconNameLeft,
  iconNameRight,
  iconSize,
  iconColor,
  ...rest
}) => {
  const { COLORS } = useTheme();
  return (
    <Container>
      {LeftIcon && (
        <Ionicons
          name={iconNameLeft}
          size={iconSize}
          color={iconColor || COLORS.GRAY3}
          style={{ marginHorizontal: 12 }}
        />
      )}

      <InputContainer autoCapitalize={"none"} {...rest} />

      {RightIcon && (
        <Ionicons
          name={iconNameRight}
          size={iconSize}
          color={iconColor || COLORS.GRAY3}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </Container>
  );
};

export default Input;
