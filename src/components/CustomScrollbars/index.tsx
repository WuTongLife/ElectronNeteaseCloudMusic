import React, { Component, FC } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbars: FC<any> = (props) => {
  let { forwardedRef, ...others } = props;

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      thumbMinSize={30}
      ref={forwardedRef}
      {...others}
    />
  );
};

export default CustomScrollbars;
