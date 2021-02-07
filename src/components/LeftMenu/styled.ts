import styled from 'styled-components';

export const StyledAvatarMenu = styled.div`
  width: 200px;
  min-width: 200px;
  max-width: calc(100% - 820px);
  height: 100%;
`;

export const StyledMenu = styled(StyledAvatarMenu)`
  border-right: 1px solid ${(props) => props.theme.grayBorder};
  .ant-menu {
    background-color: rgba(0, 0, 0, 0);
    .ant-menu-item {
      color: #d0d0d0;
      height: 36px;
      line-height: 36px;
      margin-top: 2px;
      border-radius: 4px;
      :after {
        border-right: 0px;
      }
      :not(:last-child) {
        margin-bottom: 0px;
      }
    }
    .ant-menu-item-group-title {
      color: #7c7c7c;
      padding: 8px;
      font-size: 13px;
    }
    .ant-menu-item-active {
      color: #fff;
    }
    :not(.ant-menu-item-group) > .ant-menu-item-selected {
      font-weight: bold;
      font-size: 16px;
    }
  }
  .ant-menu-inline {
    border-right: 0px solid #f0f0f0;
  }
  .ant-menu-item-selected,
  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background-color: ${(props) => props.theme.grayBorder} !important;
  }
`;
