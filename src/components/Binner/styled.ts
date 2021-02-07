import styled from 'styled-components';

export const BinnerBackground = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-size: 6000px;
  background-position: center center;
  img {
    margin: 0 auto;
    border-radius: 5px;
    height: 200px;
  }
`;

export const ImgParentDiv = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const ImgTitle = styled.div<{ color: string }>`
  position: absolute;
  padding: 2px 4px;
  font-size: 12px;
  background-color: ${(props) => props.color};
  color: #fff;
  right: 0;
  bottom: 0;
  border-radius: 5px 0px;
`;
