import Header from '@/components/Header';
import React, { FC } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

interface StyledTheme {
  theme: 'dark';
  primaryColor: string;
  [key: string]: string;
}

const themeToColor = {
  dark: '#242424',
  official: '#c20c0c',
};

const theme: StyledTheme = {
  theme: 'dark',
  primaryColor: themeToColor.dark,
  red: '#c20c0c',
  darkOpacity: ' #2c2c2c',
  grayBorder: '#434343',
  fontColor: '#d0d0d0',
};

const HeaderLayout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
    </ThemeProvider>
  );
};

const Content = styled.div`
  position: fixed;
  display: flex;
  top: 60px;
  width: 100%;
  min-width: 1020px;
  overflow: hidden;
  height: calc(100% - 134px);
  background-color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.darkOpacity : '#fff'};
`;

export default HeaderLayout;
