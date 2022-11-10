import { useState, useRef, useEffect } from 'react';
import { valueToPercent, percentToValue, clamp } from './utils';
import './index.css';

interface Props {
  value?: number,
  onChange?: (v: number) => void;
  min?: number;
  max?: number;
}

const Slider: React.FC<Props> = ({
  value = 0,
  onChange,
  min = 2,
  max = 20
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // 百分比 left
  const [left, setLeft] = useState(0);

  // 将受控的值转换成偏移量
  useEffect(() => {
    setLeft(clamp(valueToPercent(value, min, max), 0, 100));
  }, [value]);

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();

    const { left = 0, width } = containerRef.current?.getBoundingClientRect() ?? {};
    const { clientX } = e;
    // 滑块滑动的偏移百分比，不随 min 和 max 变化
    const leftPercent = (clientX - left) / width!;
    // 将偏移百分比转换成实际值，并收紧在 min 和 max 之间
    const relativeValue = clamp(percentToValue(leftPercent, min, max), min, max);
    setLeft(clamp(leftPercent * 100, 0, 100));
    onChange?.(relativeValue);
  };

  const cancelMove = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', cancelMove);
  };

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = e => {
    // 判断鼠标按键是不是左键
    if (e.button !== 0) {
      return;
    }
    // 阻止选取元素
    e.preventDefault();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', cancelMove);
  };

  useEffect(() => cancelMove, []);

  return (
    <div className="slider-container" ref={containerRef}>
      <div className="tracker"></div>
      <div
        className="slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        style={{ left: `${left}%` }}
      ></div>
    </div>
  );
};

export default Slider;