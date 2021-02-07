import { request } from 'umi';

/**
 * 歌单分类（语种，风格，场景，情感，主题等）
 */
export async function getMusicDetail(id: number) {
  return request<Music.IMusicDetailResponse>('/api/song/url?id=' + id);
}
