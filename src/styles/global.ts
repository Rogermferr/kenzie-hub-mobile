import styled from "styled-components/native";
import { TextProps } from "./@types";

const ContainerStyle = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 32px;
  padding: 8px 0;
  background-color: #343b41;
  width: 100%;
  height: 100%;
`;

const TextStyle = styled.Text<TextProps>`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "1rem")};
  text-align: center;
  color: ${({ color }) => (color ? `#${color}` : "#fdfdfd")};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : "normal")};
`;

const InputStyle = styled.TextInput`
  width: 90%;
  height: 40px;
  border-radius: 20px;

  padding: 0 16px;

  background-color: #fdfdfd;
`;

const ButtonStyle = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 40px;
  border-radius: 20px;

  background-color: #ff577f;
`;

export { ContainerStyle, TextStyle, InputStyle, ButtonStyle };
