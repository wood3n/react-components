# carousel

轮播图组件

## 渐进式显隐的实现

1. 首先有一个最外层的容器元素`carousel`，在组件加载完以后使用`getBoundingRect`获取容器元素的宽度，作为每个轮播元素`carousel-item`的基础宽度
2. 使用一个`carousel-list`元素包裹所有轮播元素，其宽度是所有子元素`carousel-item`宽度的总和计算得来
3. 每个轮播子元素`carousel-item`使用`float`偏移，这样所有子元素就会在`carousel-list`内部排成一行
4. 每个轮播子元素`carousel-item`再使用相对定位`position: relative`，偏移量为`自身宽度*位置`，这样就会让所有`carousel-item`便宜到容器元素`carousel`这里

```jsx
  const items = React.Children.map(children, ((child, index) => (
    <div
      style={{
        width,
        float: 'left',
        position: 'relative',
        left: `-${index*width}px`,
        opacity: current === index ? 1 : 0,
        transition: 'opacity 500ms ease'
      }}
    >
      {child}
    </div>
  )));
```

5. 最后根据轮播顺序使用`opacity`属性控制轮播子元素的显示和隐藏，再配合`transition`动画即可

## 水平滑动轮播的实现

1. 水平轮播图实现的思路主要是利用`float`定位和`transform`变换偏移量来做
2. 首先需要将轮播图子元素的第一个元素使用`React.cloneElement`复制一个放在最后，最后一个元素复制一个放在最前面；

```typescript
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
```

3. 然后和上面`fade`轮播图一样，每个轮播图子元素`carousel-item`使用`float`定位，这样所有的子元素会排列成一行；
3. 设置容器元素`carousel-list`的宽度为所有子元素的总和；
4. 初始加载完以后使用`transform`改变`carousel-list`的偏移量到显示第一个子元素，这样第一个子元素就能正常显示

```typescript
  useEffect(() => {
    const { width = 0 } = carouselRef.current?.getBoundingClientRect() ?? {};
    // 设置初始偏移量
    setAnimation({
      transform: `translateX(-${width}px)`
    });
  }, []);
```
5. 设置定时器

```typescript
  const play = () => {
    let next = current + 1;
    // 设置下一元素的动画，因为初始多一个元素的偏移量，所以这里额外 +1 
    setAnimation({
      transform: `translateX(-${width*(next+1)}px)`,
      transition: 'transform 500ms ease'
    });
    setCurrent(next);
  };

  useEffect(() => {
    updateFnRef.current = play;
  });

  useEffect(() => {
    timerRef1.current = window.setInterval(() => {
      updateFnRef.current?.();
    }, interval);
    return () => window.clearInterval(timerRef1.current);
  }, [])
```

6. 通过当前显示的索引值变化的时候判断是否取消动画并重置显示的索引值

```typescript
  // 最后一个元素的处理
  useEffect(() => {
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
```