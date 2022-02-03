import { FC, useState } from 'react';
import styled, { css } from 'styled-components';

const SwitcherBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  padding-block: 0.5rem;
  position: relative;
  background-color: ${props => props.theme.colors.main};
`;

const SwitcherLabel = styled.label<{ isSwitched: boolean }>`
  grid-column: 2;
  width: 40px;
  height: 25px;
  position: relative;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.bg};
  cursor: pointer;
  &::after {
    content: '';
    width: 17px;
    height: 17px;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme, isSwitched }) =>
      isSwitched ? 'transparent' : theme.colors.borderClr};
    background-color: ${({ theme, isSwitched }) =>
      isSwitched ? theme.colors.secondary : theme.colors.main};
    transition: all 0.3s cubic-bezier(0, 0.93, 0.45, 1.21);
    ${props =>
      props.isSwitched &&
      css`
        transform: translateX(15px);
      `}
  }
`;

const SwitcherText = styled.p`
  grid-column: 1;
  align-self: center;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.textClr};
`;

export const Switcher: FC<{
  name: string;
  active?: boolean;
  handler: (val: boolean) => void;
}> = ({ children, name, active = false, handler }) => {
  const [isSwitched, setIsSwitched] = useState(active);

  // const switchTheme = () => {
  //   let getTheme = document.documentElement.dataset.theme;
  //   if (getTheme !== 'light') {
  //     document.documentElement.setAttribute('data-theme', 'light');
  //   } else {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //   }
  // };

  const toggle = () => {
    setIsSwitched(!isSwitched);
    handler(!isSwitched);
  };

  return (
    <SwitcherBlock>
      <SwitcherText>{children}</SwitcherText>
      <SwitcherLabel isSwitched={isSwitched} aria-label={name}>
        <input
          type="checkbox"
          value={name}
          className="hidden-input"
          aria-hidden
          onChange={toggle}
        />
      </SwitcherLabel>
    </SwitcherBlock>
  );
};
