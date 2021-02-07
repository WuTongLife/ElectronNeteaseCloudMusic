import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.primaryColor};
  padding: 12px;
  align-items: center;
  border-bottom: 2px solid
    ${(props) =>
      props.theme.theme === 'dark' ? '#c20c0c' : props.theme.primaryColor};
  .ant-badge-multiple-words {
    padding: 0 5px;
  }
  .anticon {
    cursor: pointer;
    :hover {
      color: #fff;
    }
  }
`;

export const Logo = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src}); //设置背景图片
  background-repeat: no-repeat; //背景图像将仅显示一次。
  background-attachment: scroll; //
  background-position: -22px 5px; //设置背景图片的的偏移量，这个-50相当于背景整体向左偏移50，就可以显示图片的中心
  background-color: transparent; //
  width: 120px;
`;
