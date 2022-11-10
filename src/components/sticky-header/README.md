# sticky-header

## 监听容器元素滚动触发的 scroll 事件

当滚动元素的`scrollTop`，`scrollLeft`等属性`>0`时，表示内容区域发生了滚动，这时候可以为`header`追加`box-shadow`等属性，显示阴影效果，提升体验。

```tsx
const StickyHeader: React.FC<Props> = ({
  children
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll: React.UIEventHandler<HTMLDivElement> = e => {
    const { scrollTop } = e.target as HTMLDivElement;
    setScrollTop(scrollTop);
  };

  return (
    <div className='sticky-content-container' onScroll={handleScroll}>
      <div
        className={classNames('sticky-header', {
          'bottom-shadow': scrollTop > 0
        })}
      ></div>
      <div className="scroll-content">
        {children}
      </div>
    </div>
  );
};
```

## IntersectionObserver

1. 参考[how-to-detect-when-a-sticky-element-gets-pinned](https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/)

做法有些 hack，利用`-1px`的偏移量，判断吸顶元素在`IntersectionObserverEntry.intersectionRatio`是否`< 1`，非常简单且通用性强，唯一的缺点是用在页面顶部的元素时，用户会感受到吸顶元素`1px`的位移。

注意设置`threshold: [1]`，即当目标元素变得不完全可见时触发`IntersectionObserver`的回调函数。

```jsx
<div className='sticky-content-container'>
  <div className='sticky-header'></div>
  <div className="scroll-content"></div>
</div>
```

```css
.sticky-content-container {
  width: 600px;
  height: 300px;
  overflow: auto;
  border: 1px solid #f0f0f0;
  background: #f0d4d4;
  position: relative;
}

.sticky-header {
  width: 100%;
  height: 68px;
  padding: 12px;
  position: sticky;
  top: 0;
  background: #6b6767;
}

.bottom-shadow {
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
  transition: box-shadow 0.5s;
}

.scroll-content {
  padding: 24px;
  height: 800px;
}
```

```tsx
useEffect(() => {
  const header = document.querySelector('.sticky-header');
  const observer = new IntersectionObserver(([e]) => {
    e.target.classList.toggle('bottom-shadow', e.intersectionRatio < 1);
  }, {
    threshold: [1]
  });

  if (header) {
    observer.observe(header);
  }
}, []);
```
2. 通过一个绝对定位的元素显隐判断是否吸顶，不太通用，但是

```jsx
<div className='sticky-content-container'>
  <div className='sticky-header'></div>
  <div id="observer-target"></div>
  <div className="scroll-content"></div>
</div>
```

```css
#observer-target {
  position: absolute;
  height: 1px;
}
```

```tsx
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
}, []);
```