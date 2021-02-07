import { createFromIconfontCN } from '@ant-design/icons';
import { IconFontProps } from '@ant-design/icons/lib/components/IconFont';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2153456_rof7urdd5ud.js',
});

export default IconFont;

export const PlayIcon = ({
  backgrountSize = 32,
  fontSize = 20,
  ...props
}: Partial<IconFontProps> & { backgrountSize?: number; fontSize?: number }) => (
  <span
    style={{
      backgroundColor: '#fff',
      width: backgrountSize,
      height: backgrountSize,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <IconFont
      {...props}
      type="icon-play"
      style={{
        fontSize: `${fontSize}px`,
      }}
    />
  </span>
);
