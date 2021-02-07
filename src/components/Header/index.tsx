import {
  CloseOutlined,
  RightOutlined,
  LeftOutlined,
  LineOutlined,
  BorderOutlined,
  SettingOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Badge, Space } from 'antd';
import React from 'react';
import IconFont from '../IconFont';
import { StyledHeader, Logo } from './styled';
const logo = require('@/assets/images/logo.svg');
const Header = () => {
  return (
    <StyledHeader>
      <div style={{ display: 'flex', flex: '0 0 200px' }}>
        <IconFont
          type="icon-netease_music"
          style={{ fontSize: '30px', display: 'block' }}
        />
        <Logo src={logo} />
      </div>
      <Space size={20} style={{ flex: '0 0 200px' }}>
        <LeftOutlined />
        <RightOutlined />
        {/* <IconFont type="icon-yuyin" style={{ fontSize: '20px' }} /> */}
      </Space>
      <Space
        size={24}
        style={{ justifyContent: 'flex-end', width: '100%', fontSize: '16px' }}
      >
        <SettingOutlined />
        <IconFont type="icon-chuangkou" />
        <Badge count={1} size="small" offset={[5, 0]}>
          <MailOutlined style={{ fontSize: '16px', color: '#adafb2' }} />
        </Badge>
        <LineOutlined />
        <BorderOutlined />
        <CloseOutlined />
      </Space>
    </StyledHeader>
  );
};
export default Header;
