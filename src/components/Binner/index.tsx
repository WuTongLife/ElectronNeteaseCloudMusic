import React, { FC, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { Carousel } from 'antd';
import { BinnerBackground, ImgParentDiv, ImgTitle } from './styled';
import { IBinnerProps } from './index.d';
import styled from 'styled-components';

const Binner: FC<IBinnerProps> = ({ data }) => {
  return useMemo(
    () => (
      <Carousel autoplay effect="fade">
        {data.map((item) => (
          <BinnerBackground
            key={item.targetId}
            src={`${item.imageUrl}?imageView&blur=40x20`}
          >
            <ImgParentDiv>
              <ImgTitle color={item.titleColor}>{item.typeTitle}</ImgTitle>
              <img src={item.imageUrl} />
            </ImgParentDiv>
          </BinnerBackground>
        ))}
      </Carousel>
    ),
    [data],
  );
};

const BinnerTop = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 200px;
`;

const BinnerItem = styled.div`
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    height: 160px;
  }
`;

export default Binner;

const tempData = {
  banners: [
    {
      imageUrl:
        'http://p1.music.126.net/BfmCOpsTZ7AylvVvLfscmg==/109951165688088898.jpg',
      targetId: 1815902689,
      adid: null,
      targetType: 1,
      titleColor: 'red',
      typeTitle: '独家',
      url: null,
      exclusive: false,
      monitorImpress: null,
      monitorClick: null,
      monitorType: null,
      monitorImpressList: null,
      monitorClickList: null,
      monitorBlackList: null,
      extMonitor: null,
      extMonitorInfo: null,
      adSource: null,
      adLocation: null,
      adDispatchJson: null,
      encodeId: '1815902689',
      program: null,
      event: null,
      video: null,
      song: null,
      scm:
        '1.music-homepage.homepage_banner_force.banner.2739995.-1068434182.null',
    },
    {
      imageUrl:
        'http://p1.music.126.net/ayX-12aQ8TnER_fIF6Z8tw==/109951165688103075.jpg',
      targetId: 5326454936,
      adid: null,
      targetType: 1000,
      titleColor: 'red',
      typeTitle: '独家',
      url: null,
      exclusive: false,
      monitorImpress: null,
      monitorClick: null,
      monitorType: null,
      monitorImpressList: null,
      monitorClickList: null,
      monitorBlackList: null,
      extMonitor: null,
      extMonitorInfo: null,
      adSource: null,
      adLocation: null,
      adDispatchJson: null,
      encodeId: '5326454936',
      program: null,
      event: null,
      video: null,
      song: null,
      scm:
        '1.music-homepage.homepage_banner_force.banner.2733981.-1068341146.null',
    },
    {
      imageUrl:
        'http://p1.music.126.net/C2l649AAT5CE2EzbSu9gmg==/109951165688105388.jpg',
      targetId: 1816007548,
      adid: null,
      targetType: 1,
      titleColor: 'red',
      typeTitle: '独家',
      url: null,
      exclusive: false,
      monitorImpress: null,
      monitorClick: null,
      monitorType: null,
      monitorImpressList: null,
      monitorClickList: null,
      monitorBlackList: null,
      extMonitor: null,
      extMonitorInfo: null,
      adSource: null,
      adLocation: null,
      adDispatchJson: null,
      encodeId: '1816007548',
      program: null,
      event: null,
      video: null,
      song: null,
      scm:
        '1.music-homepage.homepage_banner_force.banner.2731007.-1068313089.null',
    },
    {
      imageUrl:
        'http://p1.music.126.net/8aEkTFAWhSJc_DSbfXs0EA==/109951165688120512.jpg',
      targetId: 1815389717,
      adid: null,
      targetType: 1,
      titleColor: 'red',
      typeTitle: '独家',
      url: null,
      exclusive: false,
      monitorImpress: null,
      monitorClick: null,
      monitorType: null,
      monitorImpressList: null,
      monitorClickList: null,
      monitorBlackList: null,
      extMonitor: null,
      extMonitorInfo: null,
      adSource: null,
      adLocation: null,
      adDispatchJson: null,
      encodeId: '1815389717',
      program: null,
      event: null,
      video: null,
      song: null,
      scm:
        '1.music-homepage.homepage_banner_force.banner.2738988.-1068515120.null',
    },
    {
      imageUrl:
        'http://p1.music.126.net/VekPgukbOBDvC2pCT8-1nA==/109951165688319501.jpg',
      targetId: 1817029500,
      adid: null,
      targetType: 1,
      titleColor: 'red',
      typeTitle: '独家',
      url: null,
      exclusive: false,
      monitorImpress: null,
      monitorClick: null,
      monitorType: null,
      monitorImpressList: null,
      monitorClickList: null,
      monitorBlackList: null,
      extMonitor: null,
      extMonitorInfo: null,
      adSource: null,
      adLocation: null,
      adDispatchJson: null,
      encodeId: '1817029500',
      program: null,
      event: null,
      video: null,
      song: null,
      scm:
        '1.music-homepage.homepage_banner_force.banner.2749007.-1068493792.null',
    },
    {
      imageUrl:
        'http://p1.music.126.net/feRTKF_zaJp3tt3Ao3Im5w==/109951165688137877.jpg',
      targetId: 1806644380,
      adid: null,
      targetType: 1,
      titleColor: 'red',
      typeTitle: '独家',
      url: null,
      exclusive: false,
      monitorImpress: null,
      monitorClick: null,
      monitorType: null,
      monitorImpressList: null,
      monitorClickList: null,
      monitorBlackList: null,
      extMonitor: null,
      extMonitorInfo: null,
      adSource: null,
      adLocation: null,
      adDispatchJson: null,
      encodeId: '1806644380',
      program: null,
      event: null,
      video: null,
      song: null,
      scm:
        '1.music-homepage.homepage_banner_force.banner.2748002.-1068313058.null',
    },
    {
      imageUrl:
        'http://p1.music.126.net/LHA6W3slEgB4zc6gyisTBA==/109951165688151426.jpg',
      targetId: 1817025680,
      adid: null,
      targetType: 1,
      titleColor: 'red',
      typeTitle: '独家',
      url: null,
      exclusive: false,
      monitorImpress: null,
      monitorClick: null,
      monitorType: null,
      monitorImpressList: null,
      monitorClickList: null,
      monitorBlackList: null,
      extMonitor: null,
      extMonitorInfo: null,
      adSource: null,
      adLocation: null,
      adDispatchJson: null,
      encodeId: '1817025680',
      program: null,
      event: null,
      video: null,
      song: null,
      scm:
        '1.music-homepage.homepage_banner_force.banner.2745026.-1068462021.null',
    },
    {
      imageUrl:
        'http://p1.music.126.net/ledt9NeBo2nDRo9xoiMWiA==/109951165688172723.jpg',
      targetId: 5320312303,
      adid: null,
      targetType: 1000,
      titleColor: 'red',
      typeTitle: '独家',
      url: null,
      exclusive: false,
      monitorImpress: null,
      monitorClick: null,
      monitorType: null,
      monitorImpressList: null,
      monitorClickList: null,
      monitorBlackList: null,
      extMonitor: null,
      extMonitorInfo: null,
      adSource: null,
      adLocation: null,
      adDispatchJson: null,
      encodeId: '5320312303',
      program: null,
      event: null,
      video: null,
      song: null,
      scm:
        '1.music-homepage.homepage_banner_force.banner.2728003.-1068487029.null',
    },
    {
      imageUrl:
        'http://p1.music.126.net/raJ07oGOjgnuxDsrbvNcgw==/109951165688301656.jpg',
      targetId: 122481013,
      adid: null,
      targetType: 10,
      titleColor: 'red',
      typeTitle: '新碟首发',
      url: null,
      exclusive: false,
      monitorImpress: null,
      monitorClick: null,
      monitorType: null,
      monitorImpressList: null,
      monitorClickList: null,
      monitorBlackList: null,
      extMonitor: null,
      extMonitorInfo: null,
      adSource: null,
      adLocation: null,
      adDispatchJson: null,
      encodeId: '122481013',
      program: null,
      event: null,
      video: null,
      song: null,
      scm:
        '1.music-homepage.homepage_banner_force.banner.2722003.-1068372703.null',
    },
    {
      imageUrl:
        'http://p1.music.126.net/C7SZWIO9IYuIweOJ8_IVwQ==/109951165688216664.jpg',
      targetId: 1817144720,
      adid: null,
      targetType: 1,
      titleColor: 'red',
      typeTitle: '独家',
      url: null,
      exclusive: false,
      monitorImpress: null,
      monitorClick: null,
      monitorType: null,
      monitorImpressList: null,
      monitorClickList: null,
      monitorBlackList: null,
      extMonitor: null,
      extMonitorInfo: null,
      adSource: null,
      adLocation: null,
      adDispatchJson: null,
      encodeId: '1817144720',
      program: null,
      event: null,
      video: null,
      song: null,
      scm:
        '1.music-homepage.homepage_banner_force.banner.2723005.-1068459290.null',
    },
  ],
  code: 200,
};
