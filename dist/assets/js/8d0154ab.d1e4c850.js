"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const l={},a="carousel",o={unversionedId:"tutorial/carousel/index",id:"tutorial/carousel/index",title:"carousel",description:"demo",source:"@site/docs/tutorial/carousel/index.md",sourceDirName:"tutorial/carousel",slug:"/tutorial/carousel/",permalink:"/tutorial/carousel/",draft:!1,editUrl:"https://github.com/wood3n/react-components/tree/master/docs/tutorial/carousel/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/"},next:{title:"img-lazyload",permalink:"/tutorial/image-lazyload/"}},c={},s=[{value:"demo",id:"demo",level:2},{value:"\u6e10\u8fdb\u5f0f\u663e\u9690\u7684\u5b9e\u73b0",id:"\u6e10\u8fdb\u5f0f\u663e\u9690\u7684\u5b9e\u73b0",level:2},{value:"\u6c34\u5e73\u6ed1\u52a8\u8f6e\u64ad\u7684\u5b9e\u73b0",id:"\u6c34\u5e73\u6ed1\u52a8\u8f6e\u64ad\u7684\u5b9e\u73b0",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"carousel"},"carousel"),(0,i.kt)("h2",{id:"demo"},"demo"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/react-carousel-schcf5?fontsize=14&hidenavigation=1&theme=dark",width:"100%",height:"500",title:"react-carousel",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("p",null,"\u8f6e\u64ad\u56fe\u7ec4\u4ef6"),(0,i.kt)("h2",{id:"\u6e10\u8fdb\u5f0f\u663e\u9690\u7684\u5b9e\u73b0"},"\u6e10\u8fdb\u5f0f\u663e\u9690\u7684\u5b9e\u73b0"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9996\u5148\u6709\u4e00\u4e2a\u6700\u5916\u5c42\u7684\u5bb9\u5668\u5143\u7d20",(0,i.kt)("inlineCode",{parentName:"li"},"carousel"),"\uff0c\u5728\u7ec4\u4ef6\u52a0\u8f7d\u5b8c\u4ee5\u540e\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"getBoundingRect"),"\u83b7\u53d6\u5bb9\u5668\u5143\u7d20\u7684\u5bbd\u5ea6\uff0c\u4f5c\u4e3a\u6bcf\u4e2a\u8f6e\u64ad\u5143\u7d20",(0,i.kt)("inlineCode",{parentName:"li"},"carousel-item"),"\u7684\u57fa\u7840\u5bbd\u5ea6"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"carousel-list"),"\u5143\u7d20\u5305\u88f9\u6240\u6709\u8f6e\u64ad\u5143\u7d20\uff0c\u5176\u5bbd\u5ea6\u662f\u6240\u6709\u5b50\u5143\u7d20",(0,i.kt)("inlineCode",{parentName:"li"},"carousel-item"),"\u5bbd\u5ea6\u7684\u603b\u548c\u8ba1\u7b97\u5f97\u6765"),(0,i.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u8f6e\u64ad\u5b50\u5143\u7d20",(0,i.kt)("inlineCode",{parentName:"li"},"carousel-item"),"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"float"),"\u504f\u79fb\uff0c\u8fd9\u6837\u6240\u6709\u5b50\u5143\u7d20\u5c31\u4f1a\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"carousel-list"),"\u5185\u90e8\u6392\u6210\u4e00\u884c"),(0,i.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u8f6e\u64ad\u5b50\u5143\u7d20",(0,i.kt)("inlineCode",{parentName:"li"},"carousel-item"),"\u518d\u4f7f\u7528\u76f8\u5bf9\u5b9a\u4f4d",(0,i.kt)("inlineCode",{parentName:"li"},"position: relative"),"\uff0c\u504f\u79fb\u91cf\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"\u81ea\u8eab\u5bbd\u5ea6*\u4f4d\u7f6e"),"\uff0c\u8fd9\u6837\u5c31\u4f1a\u8ba9\u6240\u6709",(0,i.kt)("inlineCode",{parentName:"li"},"carousel-item"),"\u4fbf\u5b9c\u5230\u5bb9\u5668\u5143\u7d20",(0,i.kt)("inlineCode",{parentName:"li"},"carousel"),"\u8fd9\u91cc")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"  const items = React.Children.map(children, ((child, index) => (\n    <div\n      style={{\n        width,\n        float: 'left',\n        position: 'relative',\n        left: `-${index*width}px`,\n        opacity: current === index ? 1 : 0,\n        transition: 'opacity 500ms ease'\n      }}\n    >\n      {child}\n    </div>\n  )));\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u6700\u540e\u6839\u636e\u8f6e\u64ad\u987a\u5e8f\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"opacity"),"\u5c5e\u6027\u63a7\u5236\u8f6e\u64ad\u5b50\u5143\u7d20\u7684\u663e\u793a\u548c\u9690\u85cf\uff0c\u518d\u914d\u5408",(0,i.kt)("inlineCode",{parentName:"li"},"transition"),"\u52a8\u753b\u5373\u53ef")),(0,i.kt)("h2",{id:"\u6c34\u5e73\u6ed1\u52a8\u8f6e\u64ad\u7684\u5b9e\u73b0"},"\u6c34\u5e73\u6ed1\u52a8\u8f6e\u64ad\u7684\u5b9e\u73b0"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6c34\u5e73\u8f6e\u64ad\u56fe\u5b9e\u73b0\u7684\u601d\u8def\u4e3b\u8981\u662f\u5229\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"float"),"\u5b9a\u4f4d\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"transform"),"\u53d8\u6362\u504f\u79fb\u91cf\u6765\u505a"),(0,i.kt)("li",{parentName:"ol"},"\u9996\u5148\u9700\u8981\u5c06\u8f6e\u64ad\u56fe\u5b50\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"React.cloneElement"),"\u590d\u5236\u4e00\u4e2a\u653e\u5728\u6700\u540e\uff0c\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u590d\u5236\u4e00\u4e2a\u653e\u5728\u6700\u524d\u9762\uff1b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"}," // \u524d\u7f6e\u548c\u540e\u7f6e\u514b\u9686\u7684\u5b50\u5143\u7d20\n  const preCloneSlides: JSX.Element[] = [];\n  const postCloneSlides: JSX.Element[] = [];\n\n  const items = React.Children.map(children, ((child, index) => {\n    const childStyle: React.CSSProperties = {\n      width,\n      float: 'left'\n    };\n\n    if(fade) {\n      childStyle.position = 'relative',\n      childStyle.left = `-${index*width}px`;\n      childStyle.opacity = current === index ? 1 : 0;\n      childStyle.transition = 'opacity 500ms ease';\n    }\n\n    const childEl = (\n      // @ts-expect-error child error type\n      <div key={child.key || index} style={childStyle}>\n        {child}\n      </div>\n    );\n\n    if(!fade) {\n      // \u514b\u9686\u6700\u540e\u4e00\u4e00\u4e2a\u5143\u7d20\u653e\u5728\u6700\u524d\u9762\n      if(index === childCount - 1) {\n        preCloneSlides.push(React.cloneElement(childEl, {\n          key: '-1'\n        }));\n      }\n\n      // \u514b\u9686\u7b2c\u4e00\u4e2a\u5143\u7d20\u653e\u5728\u6700\u540e\u9762\n      if(index === 0) {\n        postCloneSlides.push(React.cloneElement(childEl, {\n          key: childCount + 1\n        }));\n      }\n    }\n\n    return childEl;\n  }));\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u7136\u540e\u548c\u4e0a\u9762",(0,i.kt)("inlineCode",{parentName:"li"},"fade"),"\u8f6e\u64ad\u56fe\u4e00\u6837\uff0c\u6bcf\u4e2a\u8f6e\u64ad\u56fe\u5b50\u5143\u7d20",(0,i.kt)("inlineCode",{parentName:"li"},"carousel-item"),"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"float"),"\u5b9a\u4f4d\uff0c\u8fd9\u6837\u6240\u6709\u7684\u5b50\u5143\u7d20\u4f1a\u6392\u5217\u6210\u4e00\u884c\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u5bb9\u5668\u5143\u7d20",(0,i.kt)("inlineCode",{parentName:"li"},"carousel-list"),"\u7684\u5bbd\u5ea6\u4e3a\u6240\u6709\u5b50\u5143\u7d20\u7684\u603b\u548c\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u521d\u59cb\u52a0\u8f7d\u5b8c\u4ee5\u540e\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"transform"),"\u6539\u53d8",(0,i.kt)("inlineCode",{parentName:"li"},"carousel-list"),"\u7684\u504f\u79fb\u91cf\u5230\u663e\u793a\u7b2c\u4e00\u4e2a\u5b50\u5143\u7d20\uff0c\u8fd9\u6837\u7b2c\u4e00\u4e2a\u5b50\u5143\u7d20\u5c31\u80fd\u6b63\u5e38\u663e\u793a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  useEffect(() => {\n    const { width = 0 } = carouselRef.current?.getBoundingClientRect() ?? {};\n    // \u8bbe\u7f6e\u521d\u59cb\u504f\u79fb\u91cf\n    setAnimation({\n      transform: `translateX(-${width}px)`\n    });\n  }, []);\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u5b9a\u65f6\u5668")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  const play = () => {\n    let next = current + 1;\n    // \u8bbe\u7f6e\u4e0b\u4e00\u5143\u7d20\u7684\u52a8\u753b\uff0c\u56e0\u4e3a\u521d\u59cb\u591a\u4e00\u4e2a\u5143\u7d20\u7684\u504f\u79fb\u91cf\uff0c\u6240\u4ee5\u8fd9\u91cc\u989d\u5916 +1 \n    setAnimation({\n      transform: `translateX(-${width*(next+1)}px)`,\n      transition: 'transform 500ms ease'\n    });\n    setCurrent(next);\n  };\n\n  useEffect(() => {\n    updateFnRef.current = play;\n  });\n\n  useEffect(() => {\n    timerRef1.current = window.setInterval(() => {\n      updateFnRef.current?.();\n    }, interval);\n    return () => window.clearInterval(timerRef1.current);\n  }, [])\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u5f53\u524d\u663e\u793a\u7684\u7d22\u5f15\u503c\u53d8\u5316\u7684\u65f6\u5019\u5224\u65ad\u662f\u5426\u53d6\u6d88\u52a8\u753b\u5e76\u91cd\u7f6e\u663e\u793a\u7684\u7d22\u5f15\u503c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  // \u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u5904\u7406\n  useEffect(() => {\n    // \u5f53 current \u5230\u6700\u540e\u4e00\u4e2a\u7d22\u5f15 +1 \u7684\u65f6\u5019\uff0c\u8bbe\u7f6e\u5b9a\u65f6\u5668\u6e05\u9664\u52a8\u753b\uff0c\u540c\u65f6\u91cd\u7f6e current\n    if (current >= childCount) {\n      timerRef2.current = window.setTimeout(() => {\n        setCurrent(current - childCount);\n        setAnimation({\n          transform: `translateX(-${width}px)`\n        });\n      }, 300);\n\n      return () => window.clearTimeout(timerRef2.current);\n    }\n  }, [current]);\n")))}d.isMDXComponent=!0}}]);