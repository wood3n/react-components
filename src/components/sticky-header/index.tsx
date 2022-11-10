import React, { useEffect } from 'react';
import './index.css';

interface Props {
  children?: React.ReactNode;
}

const StickyHeader: React.FC<Props> = ({
  children
}) => {
  useEffect(() => {
    const header = document.querySelector('.sticky-header') as HTMLDivElement;
    const observerTarget = document.querySelector('#observer-target');
    const observer = new IntersectionObserver(([e]) => {
      header.classList.toggle('bottom-shadow', !e.isIntersecting);
    }, {
      root: document.querySelector('.sticky-content-container'),
      rootMargin: '-68px 0px 0px 0px'
    });

    if (observerTarget) {
      observer.observe(observerTarget);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className='sticky-content-container'>
      <div className='sticky-header'></div>
      <div id="observer-target"></div>
      <div className="scroll-content">
        {children}
      </div>
    </div>
  );
};

export default StickyHeader;
