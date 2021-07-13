import styled from "styled-components";

interface StyledSizeOptionProps {
  isSelected: boolean;
}

export const StyledSizeOption = styled.button<StyledSizeOptionProps>`
  width: 2.5rem;
  height: 2.2rem;
  background: ${(props) => (props.isSelected ? "#0a0909" : "#fff")};
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  color: ${(props) => (props.isSelected ? "#fff" : "#555")};
  margin-top: 1rem;
  margin-right: 0.5rem;

  &:hover {
    background: #0a0909;
    color: #fefefe;
    cursor: pointer;
  }
`;