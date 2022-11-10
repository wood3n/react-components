import { useState } from 'react';
import useInterval from '../../hooks/useInterval';
import './index.css';

/**
 * 计时器
 */
const Clock = () => {
  const [current, setCurrent] = useState(0);
  const [delay, setDelay] = useState(0);

  const { cancel } = useInterval(() => setCurrent(current + 1), delay);

  const toggle = () => {
    if (delay) {
      setDelay(0);
      cancel;
    } else {
      setDelay(1000);
    }
  };

  return (
    <div className='clock'>
      <span>{current}</span>
      <span><button onClick={toggle}>{delay ? '暂停' : '开始'}</button></span>
    </div>
  );
};

export default Clock;