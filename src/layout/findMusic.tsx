import React, { FC } from 'react';
import { Tabs } from 'antd';
import { history } from 'umi';
import styled from 'styled-components';
import CustomScrollbars from '@/components/CustomScrollbars';
const { TabPane } = Tabs;

const FindMusicLayout: FC = ({ children }) => {
  const changeTab = (key: string) => {
    history.push(key);
  };

  return (
    <>
      <StyledTabs>
        <Tabs animated={false} tabPosition="top" onChange={changeTab}>
          <TabPane tab="个性推荐" key="/findmusic" />
          <TabPane tab="歌单" key="/findmusic/musiclist" />
          <TabPane tab="主播电台" key="/findmusic/hostradio" />
          <TabPane tab="排行榜" key="1" />
          <TabPane tab="歌手" key="2" />
          <TabPane tab="最新音乐" key="3" />
        </Tabs>
      </StyledTabs>
      <CustomScrollbars>
        <div style={{ padding: '0px 30px', maxWidth: 1100, margin: '0 auto' }}>
          {children}
        </div>
      </CustomScrollbars>
    </>
  );
};

const StyledTabs = styled.div`
  padding: 10px 30px 0px 30px;
  .ant-tabs {
    height: 50px;
  }
  .ant-tabs-tab {
    padding: 5px 0px;
    color: ${(props) => props.theme.fontColor};
    margin: 0 20px 0 0;
    font-size: 16px;
    :hover {
      color: #fff;
    }
  }
  .ant-tabs-tab-btn:active {
    color: #fff;
  }
  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #d0d0d0;
    font-weight: bold;
    font-size: 20px;
  }
  .ant-tabs-ink-bar {
    height: 5px;
    background: ${(props) => props.theme.red};
  }
  .ant-tabs-top > .ant-tabs-nav:before {
    border-bottom: 0px;
  }
`;

export default FindMusicLayout;
