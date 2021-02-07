import { request } from 'umi';

/**
 * 轮播图
 */
export async function getBannerList() {
  return request<Entity.IBannerData>('/api/banner?type=0');
}
