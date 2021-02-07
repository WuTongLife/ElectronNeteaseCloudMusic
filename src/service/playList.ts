import { request } from 'umi';

/**
 * 歌单分类（语种，风格，场景，情感，主题等）
 */
export async function getPlayListCategorys() {
  return request<PlayList.IPlayListCategoryData>('/api/playlist/catlist');
}

/**
 * 热门歌单分类
 */
export async function getPlayListHotCategorys() {
  return request<PlayList.IPlayListCategoryData>('/api/playlist/hot');
}

/**
 * 获取歌单
 */
export async function getTopPlayList(params?: PlayList.IPlayListParams) {
  return request('/api/top/playlist', {
    method: 'POST',
    data: params,
  });
}

/**
 * 获取歌单详情
 */
export async function getPlayListDetail(id: number) {
  return request<PlayList.IPlayListDetail>('/api/playlist/detail?id=' + id);
}

/**
 * 推荐歌单
 */
export async function personalizedPlayList() {
  return request<PlayList.IPersonalizedPlayList>('/api/personalized');
}

// 必须登录才能调用的接口

/**
 * 获取用户歌单
 */
export async function userPlaylist(params: PlayList.IUserPlayListParams) {
  return request('/api/user/playlist', {
    method: 'POST',
    data: params,
  });
}

/**
 * 更新歌单
 */
export async function updatePlaylist(params: PlayList.IUpdatePlaylistParams) {
  return request('/api/playlist/update', {
    method: 'POST',
    data: params,
  });
}
