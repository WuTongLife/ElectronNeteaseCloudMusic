declare namespace API {
  export interface Response {
    code?: number;
    [key: string]: any;
  }

  // request params
  export interface IPageParams {
    /**
     * 取出歌单数量 , 默认为 50
     */
    limit?: number;

    /**
     * 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
     */
    offset?: number;
  }
}

declare namespace Entity {
  export interface IBannerData {
    banners: {
      imageUrl: string;
      targetId: number;
      titleColor: string;
      typeTitle: string;
    }[];
  }
}

/** 基础结构 名称 id */
declare type BaseData = { id: number; name: string };
/** 专辑 */
declare type SimpleAlbum = BaseData & { picUrl: string; alia: string[] };

/**
 * 歌单
 */
declare namespace PlayList {
  /**
   * 歌单分类
   */
  export interface IPlayListCategoryItem {
    /**
     * 分类名称
     */
    name: string;
    resourceCount: number;
    imgId: number;
    imgUrl?: string;
    type: number;
    /**
     * 分类
     */
    category: keyof IPlayListCategoryData['categories'];
    resourceType: number;
    /**
     * 是否是热门
     */
    hot: boolean;
    activity: false;
  }

  export interface IPlayListCategoryData extends API.Response {
    /** 全部分类 */
    all: IPlayListCategoryItem;

    /** 分类的子类 */
    sub: IPlayListCategoryItem[];

    /**
     * 分类的类别{'0': '语种'; '1': '风格'; '2': '场景'; '3': '情感'; '4': '主题';}
     */
    categories: {
      [key: string]: string;
    };
  }

  /**
   * 歌单详情
   */
  export interface IPlayListDetail extends API.Response {
    relatedVideos?: null;
    playlist: {
      id: number;
      tracks: (BaseData & {
        /** 歌手 */
        ar: BaseData[];
        /** 专辑 */
        al: SimpleAlbum;
      })[];
    };
    urls?: null;
    privileges: { id: number }[];
  }

  export interface IPlayListItem {
    id: number;
    type: number;
    name: string;
    copywriter: string;
    picUrl: string;
    canDislike: boolean;
    trackNumberUpdateTime: number;
    playCount: number;
    trackCount: number;
    highQuality: boolean;
    alg: string;
  }

  export interface IPersonalizedPlayList extends API.Response {
    result: IPlayListItem[];
    hasTaste: boolean;
    category: number;
  }

  // request params

  export interface IPlayListParams extends API.IPageParams {
    /** 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot' */
    order?: 'new' | 'hot';

    /**
     * tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
     */
    cat?: string;
  }

  export interface IUserPlayListParams extends API.IPageParams {
    /** 用户id */
    uid: number;
  }

  export interface IUpdatePlaylistParams {
    /** 歌单id */
    id: number;
    /** 歌单名字 */
    name: string;
    /** 歌单描述 */
    desc: string;
    /** 多个用 `;` 隔开,只能用官方规定标签 */
    tags: string;
  }
}

/**
 * 歌手相关API
 */
declare namespace Artists {
  export interface IArtistsModel {
    img1v1Id: number;
    topicPerson: number;
    musicSize: number;
    albumSize: number;
    followed: boolean;
    briefDesc: string;
    alias: [];
    picId: number;
    img1v1Url: string;
    trans: string;
    picUrl: string;
    name: string;
    id: number;
    publishTime: number;
    accountId: number;
    picId_str: string;
    img1v1Id_str: string;
    mvSize: number;
  }

  export interface IArtistSongModel {
    rtUrls: [];
    /** 歌手 */
    ar: BaseData[];
    /** 专辑 */
    al: SimpleAlbum;
  }

  // response data
  export interface IResponseArtists extends API.Response {
    artist: IArtistsModel;
    hotSongs: IArtistSongModel[];
  }

  // request params
  export interface IArtistsAlbumParams extends API.IPageParams {
    /**
     * 歌手id
     */
    id: number;
  }
}

declare namespace Music {
  export interface IMusicModal {
    id: number;
    url: string;
    br: number;
    size: number;
    md5: string;
    code: number;
    expi: number;
    type: string;
    gain: number;
    fee: number;
    uf: any;
    payed: number;
    flag: number;
    canExtend: boolean;
    freeTrialInfo: any;
    level: string;
    encodeType: string;
    freeTrialPrivilege: {
      resConsumable: boolean;
      userConsumable: boolean;
    };
    urlSource: number;
  }

  export interface IMusicDetailResponse extends API.Response {
    data: IMusicModal[];
  }
}
