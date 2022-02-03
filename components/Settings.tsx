import { FC } from 'react';
import styled from 'styled-components';

const SettingsStyle = styled.section`
  width: 300px;
  display: flex;
  flex-flow: column;
  padding: 3rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.main};
  box-shadow: 0 30px 50px ${({ theme }) => theme.colors.cardShadow},
    0 15px 15px ${({ theme }) => theme.colors.cardShadow};
`;
export const Settings: FC = ({ children }) => {
  return <SettingsStyle>{children}</SettingsStyle>;
};
