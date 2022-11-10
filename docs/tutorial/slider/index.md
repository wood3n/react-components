# Slider

## demo

<iframe src="https://codesandbox.io/embed/fervent-tereshkova-hohcrk?fontsize=14&hidenavigation=1&theme=dark"
     width="100%"
     height="500"
     title="fervent-tereshkova-hohcrk"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## development

Slider 组件实现的思路：

- 监听桌面端[`MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent)，`MouseEvent`分为以下几个阶段
1. `mousedown`: 鼠标按键点击事件，可以通过`button`属性判断点击的按键；`mousedown`和`click`事件主要的不同点是`click`事件还伴随着`mouseup`事件的完成，而`mousedown`是鼠标按键点击后立即触发；
2. `mousemove`: 鼠标移动事件
3. `mouseup`: 鼠标按键释放事件

- 判断鼠标点击按键是否是左键，如果是左键则通过`addEventListener`再次监听`mousemove`和`mouseup`事件，这里不能通过在元素上设置 React 的`onMouseMove`和`onMouseUp`事件，具体原因不详；

```typescript
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
```

- 通过`mousemove`事件的`clientX`属性获取鼠标光标移动过程中在页面可视区域内的坐标；
- 通过`getBoundingClientRect`获取滑块父元素相对于页面可视区域左侧的`left`坐标（可能为负值），这样通过`clientX-left`的方式直接得到滑块元素相对于父元素左侧的偏移量，再除以父元素的宽度，就可以得到偏移量百分比；

```typescript
  const handleMouseMove = (e: MouseEvent) => {
    const { left = 0, width } = containerRef.current?.getBoundingClientRect() ?? {};
    const { clientX } = e;
    // 滑块滑动的偏移百分比，不随 min 和 max 变化
    const leftPercent = (clientX - left) * 100 / width!;
  };
```
- 但是，由于滑块的绝对定位特性，所以其左右滑动的位置可能会超过父元素宽度，所以要把百分比限制在`[0, 100]`之间，这里通过一个`clamp`函数来实现：

```typescript
function clamp(value: number, min: number, max: number) {
  if (value == null) {
    return min;
  }
  return Math.min(Math.max(min, value), max);
}

clamp(leftPercent, 0, 100)
```
- 得到真正的偏移量百分比以后，还需要将这个百分比转换成`Slider`组件的`min`和`max`之间确定的值，毕竟`min`和`max`一定都是`[0, 100]`，这里通过`percentToValue`函数来实现：

```typescript
function percentToValue(percent: number, min: number, max: number) {
  return (max - min) * percent + min;
}
```
相反，如果将外界给定的值转换成百分比的话，使用`valueToPercent`函数：

```typescript
function valueToPercent(value: number, min: number, max: number) {
  return ((value - min) * 100) / (max - min);
}
```