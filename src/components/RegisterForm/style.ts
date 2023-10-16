import styled from "styled-components/native";

type selectOptionsStyleProps = {
  display: string;
};

const SelectStyle = styled.TouchableOpacity`
  display: flex;
  justify-content: center;

  width: 90%;
  height: 40px;
  background-color: #fdfdfd;
  border-radius: 20px;
  padding: 0 16px;
`;

const OptionsContainerStyle = styled.TouchableOpacity<selectOptionsStyleProps>`
  display: ${({ display }) => (display === "flex" ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 100%;

  background-color: #0009;
  border-radius: 20px;
  padding: 0 16px;

  position: fixed;
  z-index: 100;
`;

const OptionsStyle = styled.TouchableOpacity`
  display: flex;
  justify-content: center;

  width: 90%;
  height: 60px;
  background-color: #343b41;
  padding: 4px;
  border-radius: 20px;
`;

export { SelectStyle, OptionsContainerStyle, OptionsStyle };
