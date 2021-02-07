import { request } from 'umi';

// 推荐歌单
export async function recommendResource() {
  return request('/api/personalized?limit=10');
}

// 最新音乐
export async function newSong() {
  return request('/api/personalized/newsong?limit=12');
}
