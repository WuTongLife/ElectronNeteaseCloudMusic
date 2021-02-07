declare namespace Model {
  export interface IPlayListCreator {
    /** 头像 */
    avatarUrl: string;
    /** 昵称 */
    nickname: string;
  }
  export interface IPlayListItem {
    id: number;
    coverImgUrl: string;
    creator: IPlayListCreator;
    name: string;
  }

  export interface IMusicListParams {
    playListId: number;
  }

  export interface IMusicItem {
    id: number;
    url?: string;
    name?: string;
    picUrl?: string;
    author?: { id: number; name: string }[];
    [key: string]: any;
  }

  export interface IMusicListModel<T = any> {
    musics: T[];
    currentMusic?: IMusicItem;
    playListDetail?: PlayList.IPlayListDetail;
  }

  export interface IPlayListCategories {
    categories: { name: string; data: PlayList.IPlayListCategoryItem[] }[];
    all: PlayList.IPlayListCategoryItem;
  }
}
