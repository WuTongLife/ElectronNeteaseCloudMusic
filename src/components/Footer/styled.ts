import styled from 'styled-components';

export const StyledFooter = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 75px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primaryColor};
  border-top: 1px solid ${(props) => props.theme.grayBorder};
`;
