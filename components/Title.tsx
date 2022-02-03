import { FC } from 'react';
import styled from 'styled-components';

const H1Style = styled.h1.attrs(() => ({
  className: 'title',
}))`
  grid-column: 1 /-1;
  color: ${({ theme }) => theme.colors.textClr};
  margin-block-end: 2rem;
  font-size: 1.6em;
`;

const H2Style = styled.h2.attrs(() => ({
  className: 'block-title',
}))`
  grid-column: 1 /-1;
  color: ${({ theme }) => theme.colors.textClr};
  margin-block: 1.5rem 1rem;
  font-size: 1.1em;
`;

export const Title: FC<{ type: 'h1' | 'h2' }> = ({ type, children }) => {
  switch (type) {
    case 'h2':
      return <H2Style>{children}</H2Style>;
    default:
      return <H1Style>{children}</H1Style>;
  }
};
