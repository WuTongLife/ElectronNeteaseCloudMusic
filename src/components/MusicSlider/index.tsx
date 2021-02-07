import { Slider, Space } from 'antd';
import React, { FC, useCallback, useRef, useState } from 'react';
import throttle from 'lodash/throttle';
import { formatMusicTime } from '@/utils/music';
import styles from './index.less';

interface IMusicSliderProps {
  src?: string;
  audioOnCanPlay: () => void;
  nextMusic: () => void;
}

const MusicSlider = React.forwardRef<HTMLAudioElement, IMusicSliderProps>(
  ({ src, audioOnCanPlay, nextMusic }, ref) => {
    // 是否点击进度条的滑块
    const isFocus = useRef(false);
    // 播放进度，时间
    const [musicTime, setMusicTime] = useState({
      total: 0,
      current: 0,
      totalTime: '00:00',
      currentTime: '00:00',
    });

    // 每秒更新一次
    const handleTime = useCallback(
      throttle((target: EventTarget & HTMLAudioElement) => {
        if (!isFocus.current) {
          setMusicTime({
            total: target.duration,
            totalTime: formatMusicTime(target.duration || 0),
            current: target.currentTime,
            currentTime: formatMusicTime(target.currentTime || 0),
          });
        }
      }, 1000),
      [],
    );

    // 音乐播放更新
    const onTimeUpdate = (
      event: React.SyntheticEvent<HTMLAudioElement, Event>,
    ) => {
      handleTime(event.currentTarget);
    };

    // 开始滑动滑块
    const onChangeSlider = (value: number) => {
      isFocus.current = true;
      setMusicTime({
        ...musicTime,
        current: value,
        currentTime: formatMusicTime(value),
      });
    };

    // 滑动滑块放开后 (当滑动滑块放开后，还未失去焦点，切换浏览器标签页，会一直调用)
    const onAfterChange = (value: number) => {
      let audioRef = ref as React.RefObject<HTMLAudioElement>;
      if (audioRef && audioRef.current && isFocus.current) {
        audioRef.current.currentTime = value;
        isFocus.current = false;
      }
    };

    return (
      <>
        <Space className={styles['slider-time']}>
          {musicTime.currentTime}
          <Slider
            max={musicTime.total}
            value={musicTime.current}
            tipFormatter={null}
            onChange={onChangeSlider}
            onAfterChange={onAfterChange}
          />
          {musicTime.totalTime}
        </Space>
        <audio
          id="audio"
          ref={ref}
          onTimeUpdate={onTimeUpdate}
          // loop
          muted={false}
          preload="preload"
          onCanPlay={audioOnCanPlay}
          crossOrigin="anonymous"
          onEnded={nextMusic}
          src={src}
        />
      </>
    );
  },
);
export default MusicSlider;
