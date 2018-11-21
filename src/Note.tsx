import React from 'react';
import { css } from 'react-emotion';

export default function Note({
  width,
  height,
  left,
  top,
}: {
  width: number;
  height: number;
  left: string;
  top: string;
}): JSX.Element {
  const style = css({
    background: 'tomato',
    boxShadow: '1px 1px rgba(0,0,0,0.5)',
    position: 'absolute',
    border: '1px solid #000',
    width,
    height,
    left,
    top,
  });

  return <div className={style} />;
}
