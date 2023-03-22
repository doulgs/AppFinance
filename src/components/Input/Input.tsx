import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from "react";
import { Ionicons } from "@expo/vector-icons";
import { useField } from "@unform/core";
import { TextInputProps } from "react-native";

import { Container, IConContainer, InputText } from "./styles";
import { useTheme } from "styled-components/native";

interface InputRef {
  focus(): void;
}

interface InputValueReference {
  value: string;
}

interface InpuProps extends TextInputProps {
  name?: string;
  value?: string;
  iconName?: React.ComponentProps<typeof Ionicons>["name"];
  containerStyle?: { [key: string]: string | number };
}

const Input: React.ForwardRefRenderFunction<InputRef, InpuProps> = ({
  iconName,
  name,
  value,
  containerStyle,
  ...rest
}) => {
  const theme = useTheme();

  const [hasError, setHasError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, seIisFilled] = useState(false);

  return (
    <Container style={containerStyle}>
      <IConContainer
        isFilled={isFilled}
        hasError={hasError}
        isFocused={isFocused}
      >
        <Ionicons
          name={iconName}
          size={25}
          color={
            isFocused || hasError || isFilled
              ? theme.COLORS.BLUE1
              : theme.COLORS.GRAY1
          }
        />
      </IConContainer>

      <InputText
        isFilled={isFilled}
        hasError={hasError}
        isFocused={isFocused}
      />
    </Container>
  );
};

export { Input };
