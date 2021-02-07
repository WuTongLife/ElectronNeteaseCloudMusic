import React, { useEffect, useState } from 'react';
import { PlayButton, PlayItemCover, StyledCard, PlayNumber } from '../styled';
import IconFont, { PlayIcon } from '@/components/IconFont';

export interface IPlayListItemProps {
  /** 封面 */
  imgUrl: string;
  /** 头像 */
  avatarUrl?: string;
  loadImg?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onClickPlay?: () => void;
  onClickPause?: () => void;
  isPlay?: boolean;
  style?: React.CSSProperties;
  playButtonPosition?: 'center' | 'rightBottom';
  playNumber?: number;
}

// 歌单
const PlayListItem = ({
  imgUrl,
  description,
  onClickPlay,
  onClickPause,
  loadImg,
  style,
  playButtonPosition = 'rightBottom',
  playNumber = 0,
}: IPlayListItemProps) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let image = new Image();
    image.onload = () => {
      setLoading(true);
    };
    image.src = imgUrl;
  }, [imgUrl]);
  return (
    <StyledCard
      style={style}
      bordered={false}
      cover={
        <>
          {loading ? (
            <PlayItemCover src={imgUrl} />
          ) : (
            <PlayItemCover src={loadImg} />
          )}
          <PlayNumber>
            <IconFont style={{ marginRight: 3 }} type="icon-play1" />
            {playNumber}
          </PlayNumber>
          <PlayButton position={playButtonPosition} className="play-icon">
            <PlayIcon onClick={onClickPlay} />
          </PlayButton>
        </>
      }
    >
      {description}
    </StyledCard>
  );
};

export default PlayListItem;
