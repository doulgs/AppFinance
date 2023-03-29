import React from "react";
import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Octicons } from "@expo/vector-icons";

// import { Container } from './styles';

interface Props extends TouchableOpacityProps {
  focused?: boolean;
  color: string;
  size: number;
  iconName: keyof typeof Octicons.glyphMap;
}

const IconTabRoute: React.FC<Props> = ({
  focused,
  color,
  size,
  iconName,
  ...rest
}) => {
  return (
    <View style={{ alignItems: "center", gap: 3 }}>
      <Octicons name={iconName} size={size} color={color} />
      {focused && (
        <View
          style={{
            height: 5,
            width: 5,
            borderRadius: 5,
            backgroundColor: color,
          }}
        ></View>
      )}
    </View>
  );
};

export { IconTabRoute };
