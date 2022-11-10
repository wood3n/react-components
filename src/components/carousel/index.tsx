import classNames from 'classnames';
import React, { useState, useEffect, useRef } from 'react';
import './index.css';

interface Props {
  interval?: number;
  fade?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

/**
 * 轮播图
 */
const Carousel: React.FC<Props> = ({
  interval = 1500,
  fade = false,
  className,
  style,
  children
}) => {
  // 当前轮播图索引
  const [current, setCurrent] = useState(0);
  // 每副轮播图的宽度
  const [width, setWidth] = useState<number>(0);
  const [animation, setAnimation] = useState<React.CSSProperties>({});
  const carouselRef = useRef<HTMLDivElement>(null);
  const timerRef1 = useRef<number>();
  const timerRef2 = useRef<number>();
  const updateFnRef = useRef<() => void>();
  const childCount = React.Children.count(children);
  // 前置和后置克隆的子元素
  const preCloneSlides: JSX.Element[] = [];
  const postCloneSlides: JSX.Element[] = [];

  const items = React.Children.map(children, ((child, index) => {
    const childStyle: React.CSSProperties = {
      width,
      float: 'left'
    };

    if(fade) {
      childStyle.position = 'relative',
      childStyle.left = `-${index*width}px`;
      childStyle.opacity = current === index ? 1 : 0;
      childStyle.transition = 'opacity 500ms ease';
    }

    const childEl = (
      // @ts-expect-error child error type
      <div key={child.key || index} style={childStyle}>
        {child}
      </div>
    );

    if(!fade) {
      // 克隆最后一一个元素放在最前面
      if(index === childCount - 1) {
        preCloneSlides.push(React.cloneElement(childEl, {
          key: '-1'
        }));
      }

      // 克隆第一个元素放在最后面
      if(index === 0) {
        postCloneSlides.push(React.cloneElement(childEl, {
          key: childCount + 1
        }));
      }
    }

    return childEl;
  }));

  const play = () => {
    let next = current + 1;
    if(fade) {
      if(next >= childCount) {
        next = 0;
      }
    } else {
      // 设置下一元素的动画，因为初始多一个元素的偏移量
      setAnimation({
        transform: `translateX(-${width*(next+1)}px)`,
        transition: 'transform 500ms ease'
      });
    }
    setCurrent(next);
  };

  useEffect(() => {
    updateFnRef.current = play;
  });

  // 最后一个元素的处理
  useEffect(() => {
    if(fade) return;
    // 当 current 到最后一个索引 +1 的时候，设置定时器清除动画，同时重置 current
    if (current >= childCount) {
      timerRef2.current = window.setTimeout(() => {
        setCurrent(current - childCount);
        setAnimation({
          transform: `translateX(-${width}px)`
        });
      }, 300);

      return () => window.clearTimeout(timerRef2.current);
    }
  }, [current]);

  useEffect(() => {
    const { width = 0 } = carouselRef.current?.getBoundingClientRect() ?? {};
    // 初始化子元素宽度
    setWidth(width);
    // 设置初始偏移量
    if(!fade) {
      setAnimation({
        transform: `translateX(-${width}px)`
      });
    }

    timerRef1.current = window.setInterval(() => {
      updateFnRef.current?.();
    }, interval);
    return () => window.clearInterval(timerRef1.current);
  }, []);

  return (
    <div ref={carouselRef} className={classNames('carousel', className)} style={style}>
      <div
        className="carousel-list"
        style={{
          width: width * (childCount + preCloneSlides.length + postCloneSlides.length),
          ...animation
        }}
      >
        {preCloneSlides.concat(items ?? [], postCloneSlides)}
      </div>
      <ul className="carousel-dots" style={{ width }}>
        {Array(childCount).fill(1).map((_, index) => (
          <li
            key={index}
            className={classNames('carousel-dot', current === index && 'active')}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;