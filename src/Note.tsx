import React from 'react';
import styled from 'react-emotion';

export default function Note({
  key,
  width,
  height,
  left,
  top,
}: {
  key: string;
  width: number;
  height: number;
  left: string;
  top: string;
}): JSX.Element {
  const Styled = styled('div')({
    background: 'tomato',
    boxShadow: '1px 1px rgba(0,0,0,0.5)',
    position: 'absolute',
    border: '1px solid #000',
    width,
    height,
    left,
    top,
  });

  return <Styled key={key} />;
}
