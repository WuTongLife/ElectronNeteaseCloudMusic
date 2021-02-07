import { Slider, Space } from 'antd';
import React from 'react';

const PlaySlider = () => {
  return (
    <div style={{ width: 500, padding: 12 }}>
      <Space>
        <Space></Space>
        <Slider defaultValue={30} />
      </Space>
    </div>
  );
};
export default PlaySlider;
