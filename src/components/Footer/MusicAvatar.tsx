import React from 'react';
import { Avatar } from 'antd';
import { HeartOutlined, UserOutlined, HeartTwoTone } from '@ant-design/icons';
import { StyledAvatarMenu } from '../LeftMenu/styled';
import styled from 'styled-components';
import IconFont from '../IconFont';

const defaultAvatarSrc = require('@/assets/images/default_album.jpg');

interface IMusicAvatarProps {
  currentMusic?: any;
}

const MusicAvatar = ({ currentMusic }: IMusicAvatarProps) => {
  console.log(currentMusic);
  const authorName = (currentMusic?.author || [])
    .map((i: any) => i.name)
    .join('/');
  return (
    <StyledMusicAvater>
      <Avatar
        shape="square"
        size={50}
        icon={<UserOutlined />}
        src={`${currentMusic?.picUrl}?param=50y50` || defaultAvatarSrc}
      />
      <div style={{ marginLeft: 12, color: '#d0d0d0' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '50%' }}>
          <StyledMusicName>{currentMusic?.name}</StyledMusicName>
          <IconFont
            type="icon-xihuan-wangyiicon"
            style={{ flex: '0 0 16px', fontSize: '16px', cursor: 'pointer' }}
          />
        </div>
        <StyledMusicName>{authorName}</StyledMusicName>
      </div>
    </StyledMusicAvater>
  );
};
export default MusicAvatar;

const StyledMusicAvater = styled.div`
  display: flex;
  padding: 12px;
  .ant-avatar {
    flex: 0 0 50px;
    border-radius: 5px;
  }
`;

const StyledMusicName = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  width: 164px;
  font-size: 15px;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;
