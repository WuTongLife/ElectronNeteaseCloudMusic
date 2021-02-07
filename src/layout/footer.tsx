import Footer from '@/components/Footer';
import LeftMenu from '@/components/LeftMenu';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useModel } from 'umi';

const FooterLayout: FC = ({ children }) => {
  const {
    musicListModel: { currentMusic },
    preMusic,
    nextMusic,
  } = useModel('musiclist');

  return (
    <>
      <Content>
        <LeftMenu />
        <div
          style={{ width: 'calc(100% - 200px)', height: 'calc(100% - 75px)' }}
        >
          {children}
        </div>
      </Content>
      <Footer
        currentMusic={currentMusic}
        nextMusic={nextMusic}
        previousMusic={preMusic}
      />
    </>
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
export default FooterLayout;
