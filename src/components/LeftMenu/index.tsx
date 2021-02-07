import { Menu } from 'antd';
import React from 'react';
import { history, useHistory } from 'umi';
import { CloudOutlined } from '@ant-design/icons';
import IconFont from '../IconFont';
import { StyledMenu } from './styled';
import CustomScrollbars from '../CustomScrollbars';

const { SubMenu } = Menu;

const LeftMenu = () => {
  const { location } = useHistory();
  const keys = location.pathname.match(/^\/[a-z]*/);
  return (
    <StyledMenu>
      <CustomScrollbars>
        <Menu
          selectedKeys={keys ? [keys[0]] : []}
          mode="inline"
          inlineIndent={8}
          style={{ padding: 12 }}
          onClick={(e) => history.push(String(e.key))}
        >
          <Menu.Item key="/findmusic">发现音乐</Menu.Item>
          <Menu.Item key="/video">视频</Menu.Item>
          <Menu.Item key="/friend">朋友</Menu.Item>
          <Menu.Item key="/host">直播</Menu.Item>
          <Menu.Item key="/fm">私人FM</Menu.Item>
          <Menu.ItemGroup key="g2" title="我的音乐">
            <Menu.Item key="11" icon={<IconFont type="icon-music-on-white" />}>
              本地音乐
            </Menu.Item>
            <Menu.Item key="12" icon={<IconFont type="icon-download" />}>
              下载管理
            </Menu.Item>
            <Menu.Item key="13" icon={<CloudOutlined />}>
              我的音乐云盘
            </Menu.Item>
            <Menu.Item key="14" icon={<IconFont type="icon-diantai" />}>
              我的电台
            </Menu.Item>
            <Menu.Item key="15" icon={<IconFont type="icon-wodeshoucang" />}>
              我的收藏
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </CustomScrollbars>
    </StyledMenu>
  );
};
export default LeftMenu;
