import { Dispatch, ReactElement, SetStateAction } from "react";
import { StyledSizeOption } from "./styled";

interface SizeOptionProps {
  size: number;
  selected: number | undefined;
  setSize: Dispatch<SetStateAction<number | undefined>>;
}

export function SizeOption({
  size,
  selected,
  setSize,
}: SizeOptionProps): ReactElement<React.FC> {
  const isSelected = size === selected;

  return (
    <StyledSizeOption
      data-testid="option"
      isSelected={isSelected}
      onClick={() => setSize(size)}
    >
      {size}
    </StyledSizeOption>
  );
}
