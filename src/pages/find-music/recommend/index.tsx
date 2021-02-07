import React from 'react';
import Binner from '@/components/Binner';
import { useModel } from 'umi';
import LabelLink from '@/components/LabelLink';
import { List } from 'antd';
import PlayListItem from '@/components/List/PlayListItem';
import NewMusicItem from '@/components/List/NewMusicItem';

const PersonalRecommend = () => {
  const { bannerList, recommendList, newSongList } = useModel('findMusic');
  const { initPlayListDetail } = useModel('musiclist');
  return (
    <div>
      <Binner data={bannerList} />
      <LabelLink label="推荐歌单" to={''} />
      <List
        grid={{ column: 5, gutter: 12 }}
        dataSource={recommendList}
        renderItem={(item: any) => (
          <List.Item>
            <PlayListItem
              imgUrl={`${item.picUrl}?param=250y250`}
              description={item.name}
              playNumber={item.playCount}
              onClickPlay={() => initPlayListDetail(item.id)}
            />
          </List.Item>
        )}
      />
      <LabelLink label="最新音乐" to={''} />
      <List
        grid={{ column: 3, gutter: 12 }}
        dataSource={newSongList}
        renderItem={(item: any) => (
          <List.Item>
            <NewMusicItem
              picUrl={item.picUrl}
              name={item.song.name}
              alias={item.song.alias}
              artists={item.song.artists}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PersonalRecommend;
