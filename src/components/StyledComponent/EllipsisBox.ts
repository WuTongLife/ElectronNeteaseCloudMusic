import styled from 'styled-components';

export const EllipsisBox = styled.div<{
  line?: number;
  maxWidth?: number;
  fontSize?: number;
}>`
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.line};
  line-clamp: ${(props) => props.line};
  -webkit-box-orient: vertical;
  max-width: ${(props) => props.maxWidth};
  font-size: ${(props) => props.fontSize}px;
`;
EllipsisBox.defaultProps = {
  line: 1,
};
