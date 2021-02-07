import { getMusicDetail } from '@/service/music';
import { getPlayListDetail } from '@/service/playList';
import { nextItem, preItem } from '@/utils/music';
import { useCallback, useState } from 'react';

const handleCurrentMusic = (
  target: { url: string } & PlayList.IPlayListDetail['playlist']['tracks'][0],
) => {
  return {
    id: target?.id,
    name: target?.name,
    picUrl: target?.al.picUrl,
    author: target?.ar || [],
    url: target.url,
  };
};

const initMusicList = {
  musics: [],
};

const useMusicListModel = () => {
  // 歌曲列表
  const [musicListModel, setMusicListModel] = useState<
    Model.IMusicListModel<PlayList.IPlayListDetail['playlist']['tracks'][0]>
  >(initMusicList);

  // 获取歌单详情音乐
  const initPlayListDetail = useCallback((playListId: number) => {
    getPlayListDetail(playListId).then((res) => {
      if (res.code === 200) {
        let target = res.playlist.tracks[0];
        fetchMusic(target.id, (data) => {
          setMusicListModel({
            musics: res.playlist.tracks,
            playListDetail: res,
            currentMusic: handleCurrentMusic({ ...target, url: data.url }),
          });
        });
      }
    });
  }, []);

  const fetchMusic = useCallback(
    (id: number, callback: (music: Music.IMusicModal) => void) => {
      getMusicDetail(id).then((res) => {
        if (res.code === 200) {
          callback(res.data[0]);
        }
      });
    },
    [],
  );

  const nextMusic = useCallback(async () => {
    let { musics, currentMusic } = musicListModel;
    if (currentMusic?.id) {
      const target = nextItem(musics, currentMusic?.id);
      fetchMusic(target.id, (data) => {
        setMusicListModel({
          ...musicListModel,
          currentMusic: handleCurrentMusic({ ...target, url: data.url }),
        });
      });
    }
  }, [musicListModel]);

  const preMusic = useCallback(() => {
    let { musics, currentMusic } = musicListModel;
    if (currentMusic?.id) {
      const target = preItem(musics, currentMusic?.id);
      fetchMusic(target.id, (data) => {
        setMusicListModel({
          ...musicListModel,
          currentMusic: handleCurrentMusic({ ...target, url: data.url }),
        });
      });
    }
  }, [musicListModel]);

  return { musicListModel, initPlayListDetail, preMusic, nextMusic };
};

export default useMusicListModel;
