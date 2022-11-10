import React, { useEffect, useState } from 'react';
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
  const [pageIndex, setPageIndex] = useState(1);
  const [data, setData] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    loadMore(pageIndex).then(newData => {
      setData([...data, ...newData]);
    }).finally(() => setLoading(false));
  }, [pageIndex]);

  const handleScroll: React.UIEventHandler<HTMLDivElement> = e => {
    const { clientHeight, scrollTop, scrollHeight } = e.target as HTMLDivElement;

    // 向上滚动了，并且滚动区域高度+可视区域高度 = 内容总高度，也就是滚动到底了
    if(data.length < 60 &&
      !loading &&
      scrollTop > 0 &&
      // 需要加上 loading 区域的高度
      clientHeight + 30 + scrollTop >= scrollHeight) {
      setPageIndex(pageIndex + 1);
    }
  };

  return (
    <div
      className="container"
      // 注意 scroll 事件监听加在有滚动条的容器元素上
      onScroll={handleScroll}
      style={{
        height
      }}
    >
      <div className='list'>
        {data.map(v => (
          <div key={String(v)} className='item'>{v}</div>
        ))}
      </div>
      {loading && <div className='scroll-loading'><IconLoading /></div>}
    </div>
  );
};

export default ScrollLoad;
