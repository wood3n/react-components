import React, { useEffect, useState, useRef } from 'react';
import IconLoading from '@/components/icons/loading';
import './index.css';

interface Props {
  height?: number;
}

interface Load {
  (pageIndex: number): Promise<number[]>;
}

const loadMore: Load = async (pageIndex) => new Promise((resolve) => {
  window.setTimeout(() => {
    resolve(Array(10).fill(0).map((_, i) => (pageIndex - 1) * 10 + i + 1));
  }, 1000);
});

const ScrollLoad: React.FC<Props> = ({
  height = 240
}) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<number[]>([]);
  const observerCbRef = useRef<IntersectionObserverCallback>(() => {});

  useEffect(() => {
    if(pageIndex) {
      loadMore(pageIndex).then(newData => {
        setData([...data, ...newData]);
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [pageIndex]);

  const handleObserve: IntersectionObserverCallback = ([e]) => {
    if(e.intersectionRatio > 0 && data.length < 60) {
      setLoading(true);
      setPageIndex(pageIndex + 1);
    }
  };

  useEffect(() => {
    observerCbRef.current = handleObserve;
  }, [data]);

  useEffect(() => {
    const target = document.querySelector('.scroll-more');
    if(target) {
      const observer = new IntersectionObserver((...args) => observerCbRef.current(...args), {
        root: document.querySelector('.scroll-container'),
        threshold: [0, 1]
      });

      observer.observe(target);

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div
      className="scroll-container"
      style={{
        height
      }}
    >
      <div className='scroll-list'>
        {data.map(v => (
          <div key={String(v)} className='scroll-item'>{v}</div>
        ))}
      </div>
      <div className="scroll-more">
        {loading && <div className="scroll-loading"><IconLoading /></div>}
      </div>
    </div>
  );
};

export default ScrollLoad;
