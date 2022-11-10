# img-lazyload

## 参考

https://web.dev/lazy-loading-images/

## 实现

### img的loading属性

```html
<img loading="lazy" />
```

### IntersectionObserver

除了 IE 浏览器，其他主流浏览器全部支持，使用`IntersectionObserver`需要两步进行：

1. 在`html`注入这段代码，以监听所有`img`元素使用懒加载

```js
// 获取所有带有 lazy class 的 img 元素
const lazyImages = [...document.querySelectorAll("img.lazy")];
const lazyBackgrounds = [...document.querySelectorAll("img.lazy-background")];

let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      if(entry.target instanceof HTMLImageElement) {

      }
      let lazyImage = entry.target as HTMLImageElement;
      lazyImage.src = lazyImage.dataset.src!;
      lazyImage.srcset = lazyImage.dataset.srcset!;
      lazyImage.classList.remove("lazy");
      lazyImageObserver.unobserve(lazyImage);
    }
  });
});

lazyImages.forEach(function(lazyImage) {
  lazyImageObserver.observe(lazyImage);
});
```

2. 使用`img`的时候用`data-src`和`data-srcset`分别替换`src`和`srcset`属性，而原本的`src`属性传递图像加载过程中过渡显示的图像，可以使用较小图片的`dataUrl-base64`编码格式

```html
<img
  class="lazy"
  data-src="https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/tacos-2x.jpg"
  data-srcset="https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/tacos-2x.jpg 2x, https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/tacos-1x.jpg 1x"
  width="240"
  height="240"
  alt="图像"
/>
```

3. 对于在 CSS 中使用`background`的元素，也可以通过`IntersectionObserver`来实现懒加载背景图：

```html

<div class="lazy"></div>

<style>
.lazy {
  padding-top: 28.0519480519%;
  background-image: url("https://res.cloudinary.com/drp9iwjqz/image/upload/e_blur:2000,f_auto,q_auto/v1508291830/jeremywagner.me/using-webp-images/tacos-1x.jpg");
}

.lazy.visible {
  background-image: url("https://res.cloudinary.com/drp9iwjqz/image/upload/f_auto,q_auto/v1508210556/jeremywagner.me/using-webp-images/tacos-2x.jpg");
}
</style>
```

### 判断元素是否进入可视区域