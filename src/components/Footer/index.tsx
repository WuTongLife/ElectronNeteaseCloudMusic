import {
  LeftCircleOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  RightCircleOutlined,
} from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { Space } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import MusicSlider from '../MusicSlider';
import MusicAvatar from './MusicAvatar';
import RightTool from './RightTool';
import { StyledFooter } from './styled';

interface IFooterProps {
  previousMusic: () => void;
  nextMusic: () => void;
  currentMusic?: any;
}

const Footer = ({ previousMusic, nextMusic, currentMusic }: IFooterProps) => {
  // audio的dom
  const audioRef = useRef<HTMLAudioElement>(null);
  // 开始按钮
  const [isStart, isStartOperate] = useBoolean(false);

  // 改变音量
  const changeVolume = useCallback((value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  }, []);

  const audioOnCanPlay = () => {
    if (isStart) {
      audioRef.current?.play();
    } else {
      isStartOperate.setTrue();
    }
  };

  return (
    <StyledFooter>
      <MusicAvatar currentMusic={currentMusic} />
      <Space direction="vertical" align="center">
        <Space style={{ fontSize: '24px', textAlign: 'center' }}>
          <LeftCircleOutlined onClick={previousMusic} />
          {isStart ? (
            <PauseCircleOutlined
              disabled={!currentMusic}
              onClick={isStartOperate.setFalse}
            />
          ) : (
            <PlayCircleOutlined onClick={isStartOperate.setTrue} />
          )}
          <RightCircleOutlined onClick={nextMusic} />
        </Space>
        <MusicSlider
          ref={audioRef}
          src={currentMusic?.url}
          audioOnCanPlay={audioOnCanPlay}
          nextMusic={nextMusic}
        />
      </Space>
      <RightTool />
    </StyledFooter>
  );
};
export default Footer;
