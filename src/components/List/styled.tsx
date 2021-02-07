import { Card } from 'antd';
import styled from 'styled-components';

export const PlayList = styled.div<{ count?: number }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    min-width: 140px;
    width: ${(props) => `calc(${100 / (props.count || 5)}% - 12px)`};
    margin-bottom: 15px;
  }
`;

export const PlayButton = styled.div<{ position?: 'center' | 'rightBottom' }>`
  position: absolute;
  overflow: hidden;
  bottom: 0px;
  transition: bottom 0.5s;
  display: flex;
  justify-content: ${(props) =>
    props.position === 'center' ? 'center' : 'flex-end'};
  opacity: 0;
  transition: opacity 1s;
  align-items: ${(props) =>
    props.position === 'center' ? 'center' : 'flex-end'};
  height: 100%;
  padding: 12px;
`;

export const PlayItemCover = styled.img`
  width: 100%;
  height: 100%;
  :hover {
    & + div {
      bottom: 0px;
    }
  }
`;

export const StyledCard = styled(Card)`
  background: rgba(0, 0, 0, 0) !important;
  cursor: pointer;
  .ant-card-body {
    padding: 5px 0px;
    height: 50px;
    color: ${(props) => props.theme.fontColor};
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    :hover {
      color: #fff;
    }
  }

  .ant-card-meta-detail {
    font-size: 12px;
    color: aliceblue;

    .ant-card-meta-title {
      font-size: 12px;
      color: aliceblue;
    }

    .ant-card-meta-description {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .ant-avatar {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }

  .ant-card-cover {
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    :hover {
      ${PlayButton} {
        opacity: 1;
        transition: opacity 1s;
      }
    }
  }
`;

export const PlayNumber = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  padding: 4px 8px;
  align-items: center;
  color: #fff;
  font-size: 12px;
  flex-basis: 10px;
`;

export const StyledNewMusic = styled.div`
  display: flex;
  padding-right: 12px;
  border-radius: 5px;
  :hover {
    background-color: #3b3b3b;
  }
  .ant-avatar {
    flex: 0 0 50px;
  }
`;
