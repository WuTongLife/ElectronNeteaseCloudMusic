import { PlayIcon } from '@/components/IconFont';
import { EllipsisBox, FlexCenter } from '@/components/StyledComponent';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import React from 'react';
import { StyledNewMusic } from '../styled';

interface INewMusicItemProps {
  name: string;
  picUrl: string;
  alias?: string[];
  artists: { name: string }[];
}

const NewMusicItem = ({ name, alias, artists, picUrl }: INewMusicItemProps) => {
  return (
    <StyledNewMusic>
      <Avatar
        shape="square"
        size={50}
        icon={<UserOutlined />}
        src={`${picUrl}?param=50y50`}
      />
      <FlexCenter
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          cursor: 'pointer',
        }}
      >
        <PlayIcon backgrountSize={25} fontSize={15} />
      </FlexCenter>
      <Space direction="vertical" style={{ marginLeft: 12, color: '#d0d0d0' }}>
        <EllipsisBox fontSize={12}>
          {name}
          {alias && alias.length > 0 && (
            <span style={{ color: '#727272' }}>（{alias.join('/')}）</span>
          )}
        </EllipsisBox>
        <EllipsisBox fontSize={12}>
          <span style={{ color: '#727272' }}>
            {artists.map((i) => i.name).join('/')}
          </span>
        </EllipsisBox>
      </Space>
    </StyledNewMusic>
  );
};

export default NewMusicItem;
