import React from 'react';
import uuid from 'uuid/v4';

import Note from './Note';

const [w, h] = [10, 10];
const snapX = 28;
const snapY = 14;

export default function App() {
  const [elements, setElements] = React.useState([] as any[]);
  const [currentUuid, setCurrentUuid] = React.useState('');
  const [originXY, setOriginXY] = React.useState([0, 0]);

  const onMouseDown = (ev: React.MouseEvent) => {
    const { clientX: x, clientY: y } = ev;
    const id = uuid();

    const fixedX = Math.round(x / snapX) * snapX
    const left = `${fixedX - w - 5}px`;

    const fixedY = Math.round(y / snapY) * snapY;
    const top = `${fixedY - h * 0.5 - 10}px`;

    const newElement = {
      element: <Note key={id} width={w} height={h} left={left} top={top} />,
      id,
    };

    setOriginXY([fixedX, fixedY]);
    setCurrentUuid(id);
    setElements(elements.concat([newElement]));
  };

  const onMouseMove = (ev: React.MouseEvent) => {
    const { buttons } = ev;
    if (buttons !== 1) {
      return; // through
    }

    const { clientX: x, clientY: y } = ev;
    const id = currentUuid;

    const [ox] = originXY;
    const width = w + Math.round((x - ox) / snapX) * snapX;
    const left = `${ox - w - 5}px`;

    const fixedY = Math.round(y / snapY) * snapY;
    const top = `${fixedY - h * 0.5 - 10}px`;

    const newElement = {
      element: <Note key={id} width={width} height={h} left={left} top={top} />,
      id,
    };

    const filtered = elements.filter(v => v.id !== id);
    setElements(filtered.concat([newElement]));
  };

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      style={{
        position: 'absolute',
        width: 500,
        height: 500,
        border: '1px solid #000',
        background: '#B7C1CD',
      }}
    >
      {elements.map(v => v.element)}
    </div>
  );
}
