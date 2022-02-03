import { FC } from 'react';
import styled from 'styled-components';

const RadioButtonLabel = styled.label`
  width: fit-content;
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  gap: 0.5rem;
  padding-block: 0.5rem;
  cursor: pointer;
`;

const RadioButtonText = styled.p`
  align-self: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textClr};
`;

const RadioButtonDot = styled.span<{ checked?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, checked }) =>
    checked ? theme.colors.borderClr : theme.colors.borderClr};
  &::after {
    content: '';
    width: 1rem;
    height: 1rem;
    position: absolute;
    inset: 3px 0 0 3px;
    border-radius: inherit;
    background-color: ${({ theme, checked }) =>
      checked ? theme.colors.secondary : 'transparent'};
    transition: all 0.3s cubic-bezier(0, 0.93, 0.45, 1.21);
    transform: ${({ checked }) => (checked ? `scale(1)` : `scale(0)`)};
  }
`;

export const RadioButton: FC<{
  value: string;
  name: string;
  isSelected: string;
}> = ({ children, value, name, isSelected }) => {
  return (
    <>
      <RadioButtonLabel aria-label={value}>
        <RadioButtonDot checked={isSelected === value} />
        <RadioButtonText>{children}</RadioButtonText>
        <input
          type="radio"
          name={name}
          value={value}
          className="hidden-input"
          aria-hidden
        />
      </RadioButtonLabel>
    </>
  );
};
