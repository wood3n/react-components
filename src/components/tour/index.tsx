import React, { useState, useRef } from 'react';

const Tour: React.FC = () => {
  const nodeRef = useRef<HTMLButtonElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>();

  const handle = () => {
    const { left, right, top, bottom, width, height } = nodeRef.current?.getBoundingClientRect() ?? {};
    const offsetRight = document.documentElement.clientWidth - (right ?? 0);

    setStyle({
      boxSizing: 'content-box',
      left: 0,
      top: 0,
      width,
      height,
      borderColor: 'rgba(147, 147, 147, 0.6)',
      borderStyle: 'solid',
      borderWidth: `${top}px ${offsetRight}px ${bottom}px ${left}px`
    });
  };

  return (
    <div>
      <button ref={nodeRef}>按钮</button>
      <div style={{ margin: 24 }}><button onClick={handle}>定位</button></div>
      <div
        style={{
          position: 'fixed',
          ...style
        }}
      ></div>
    </div>
  );
};

export default Tour;