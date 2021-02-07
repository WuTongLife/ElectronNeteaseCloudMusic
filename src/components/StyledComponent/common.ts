import styled from 'styled-components';

interface IMaskDivProps {
  width?: number;
  height?: number;
  opacity?: number;
}

/** 蒙层 */
export const MaskDiv = styled.div<IMaskDivProps>`
  z-index: 999999;
  background-color: #000;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  opacity: ${(props) => props.opacity || 0.7};
`;

export const Box = styled.div<{ padding?: number; margin?: number }>`
  padding: ${(props) => `${props.padding || 0}px`};
  margin: ${(props) => `${props.margin || 0}px`};
`;
