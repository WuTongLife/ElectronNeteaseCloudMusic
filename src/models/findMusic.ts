import { getBannerList } from '@/service/banner';
import { newSong, recommendResource } from '@/service/findMusic';
import { useEffect, useState } from 'react';

const useFindMusic = () => {
  const [bannerList, setBannerList] = useState<Entity.IBannerData['banners']>(
    [],
  );
  const [recommendList, setRecommendList] = useState([]);
  const [newSongList, setNewSongList] = useState([]);
  useEffect(() => {
    getBannerList().then((res) => {
      setBannerList(res.banners);
    });
    recommendResource().then((res) => {
      setRecommendList(res.result);
    });
    newSong().then((res) => {
      setNewSongList(res.result);
    });
  }, []);

  return { bannerList, recommendList, newSongList };
};
export default useFindMusic;
