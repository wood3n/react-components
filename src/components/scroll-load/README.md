# scroll-load
## 监听 scroll 事件

滚动加载原理为带有滚动条的容器元素具有`scrollTop`，`scrollHeight`，`clientHeight`这些表示内容滚动区域偏移量的属性：

- `scrollTop`：为容器元素内容区域向上滚动的高度
- `scrollHeight`：容器元素内容区域全部高度
- `clientHeight`: 容器元素内容区域可视高度

当内容区域发生滚动时，`scrollTop > 0`；而当内容区域滚动触底时，则有`scrollTop + clientHeight = scrollHeight`这个关系，凭借这两者可以判断内容区域发生滚动且触底时，就去继续加载数据。

这种方式的缺点是`scroll`事件触发频繁，性能不好，同时无法配合虚拟滚动`virtual scroll`使用。

```typescript
const handleScroll: React.UIEventHandler<HTMLDivElement> = e => {
  const { clientHeight, scrollTop, scrollHeight } = e.target as HTMLDivElement;

  // 向上滚动了，并且滚动区域高度+可视区域高度 = 内容总高度，也就是滚动到底了
  if(scrollTop >= 0 && clientHeight + scrollTop >= scrollHeight) {
    setPageIndex(pageIndex + 1);
  }
};
```

```jsx
<div onScroll={handleScroll}>container</div>
```
## 利用 IntersectionObserver api

在原来`list`元素下补充一个元素，用作监听是否显示的目标元素，并把`root`设置为容器元素：

```typescript
const target = document.querySelector('.more');
if(target) {
  const observer = new IntersectionObserver(([e]) => {
    if(e.intersectionRatio > 0 && data.length < 60) {
      setLoading(true);
      setPageIndex(pageIndex + 1);
    }
  }, {
    root: document.querySelector('.container'),
    threshold: [0, 1]
  });

  observer.observe(target);

  return () => observer.disconnect();
}
```
```jsx
<div
  className="container"
  style={{
    height
  }}
>
  <div className='list'>...</div>
  <div className="more">
    {loading && <div className="loading"><IconLoading /></div>}
  </div>
</div>
```
但是`IntersectionObserver`内部的回调函数无法获取最新的`pageIndex`和`data`状态，这时候需要借助`useRef`来缓存并更新回调函数才行：

```typescript
const handleObserve: IntersectionObserverCallback = ([e]) => {
  if(e.intersectionRatio > 0 && data.length < 60) {
    setLoading(true);
    setPageIndex(pageIndex + 1);
  }
};

useEffect(() => {
  observerCbRef.current = handleObserve;
}, [data]);

new IntersectionObserver((...args) => observerCbRef.current(...args), { ... });
```