import React from 'react';
import uuid from 'uuid/v4';

export default function App() {
  const [elements, setElements] = React.useState([] as any[]);
  const [currentUuid, setCurrentUuid] = React.useState('');
  const [originXY, setOriginXY] = React.useState([0, 0]);

  const [w, h] = [10, 10];

  const onMouseDown = (ev: React.MouseEvent) => {
    const { clientX: x, clientY: y } = ev;
    const id = uuid();

    const newElement = {
      element: (
        <div
          key={id}
          style={{
            background: 'tomato',
            boxShadow: '1px 1px rgba(0,0,0,0.5)',
            position: 'absolute',
            width: w,
            height: h,
            left: `${x - w - 5}px`,
            top: `${y - h * 0.5 - 10}px`,
            border: '1px solid #000',
          }}
        />
      ),
      id,
    };

    setOriginXY([x, y])
    setCurrentUuid(id);
    setElements(elements.concat([newElement]));
  };

  const onMouseMove = (ev: React.MouseEvent) => {
    const { buttons } = ev;
    if (buttons !== 1) {
      return; // through
    }

    const { clientX: x, clientY: y } = ev;

    const id = currentUuid
    const filtered = elements.filter(v => v.id !== id)
    const [ox, oy] = originXY;

    const newElement = {
      element: (
        <div
          key={id}
          style={{
            background: 'tomato',
            boxShadow: '1px 1px rgba(0,0,0,0.5)',
            position: 'absolute',
            width: w + (x - ox),
            height: h,
            left: `${ox - w - 5}px`,
            top: `${y - h * 0.5 - 10}px`,
            border: '1px solid #000',
          }}
        />
      ),
      id,
    };

    setElements(filtered.concat([newElement]))
  };

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      style={{ position: 'absolute', width: 500, height: 500, border: '1px solid #000', background: '#B7C1CD' }}
    >
      {elements.map(v => v.element)}
    </div>
  );
}
