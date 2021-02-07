import { RightOutlined } from '@ant-design/icons';
import { LinkProps } from '@ant-design/pro-layout/lib/typings';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'umi';

interface ILabelLinkProps {
  label: React.ReactNode;
  to: LinkProps['to'];
}

const LabelLink = ({ label, to }: ILabelLinkProps) => {
  return (
    <div style={{ padding: '30px 0 12px 0' }}>
      <Label>
        <Link to={to}>{label}</Link>
      </Label>
      <RightOutlined style={{ fontSize: '20px' }} />
    </div>
  );
};
export default LabelLink;

const Label = styled.span`
  a {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.fontColor};
    :hover {
      color: #fff;
    }
  }
`;
