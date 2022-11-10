import { useEffect, useRef } from 'react';

type Fn = () => void;

const useInterval = (fn: Fn, interval = 1000) => {
  const cbRef = useRef<Fn>();
  const timerRef = useRef<number>();

  // 更新函数
  useEffect(() => {
    cbRef.current = fn;
  });

  const cancel = () => {
    console.log('清除定时器');
    clearInterval(timerRef.current);
  };

  const run = () => {
    timerRef.current = window.setInterval(() => {
      console.log('执行定时器');
      cbRef.current?.();
    }, interval);
  };

  useEffect(() => {
    console.log('interval:', interval);
    if (interval) {
      console.log('设置定时器');
      run();

      // 下次重置定时器之前清除上次设置的定时器
      return cancel;
    }
  }, [interval]);

  return {
    cancel
  };
};

export default useInterval;