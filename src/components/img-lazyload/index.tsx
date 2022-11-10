import React, { useEffect } from 'react';
import Image1 from '@/assets/imgs/1.jpeg';
import Image2 from '@/assets/imgs/2.jpeg';
import Image3 from '@/assets/imgs/3.jpeg';
import Image4 from '@/assets/imgs/4.jpeg';
import Image5 from '@/assets/imgs/5.jpeg';
import Image6 from '@/assets/imgs/6.jpeg';
import Image7 from '@/assets/imgs/7.jpeg';
import Image8 from '@/assets/imgs/8.jpeg';
import Image9 from '@/assets/imgs/9.jpeg';
import './index.css';

const fallback='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==';

const ImgLazyLoad: React.FC = () => {
  useEffect(() => {
    // 获取所有 lazy class 元素
    const lazyImages = [...document.querySelectorAll('.lazy')];

    if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            if (lazyImage instanceof HTMLImageElement) {
              lazyImage.src = lazyImage.dataset.src ?? '';
              lazyImage.srcset = lazyImage.dataset.srcset ?? '';
              lazyImage.classList.remove('lazy');
            } else {
              entry.target.classList.add('visible');
            }

            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });

      return () => lazyImageObserver.disconnect();
    }
  }, []);

  return (
    <div className="img-list">
      <p>
      我母亲凌晨就提着篮子去肉铺排队，可是她没买到猪头肉。人们明明看见肉联厂的小货车运来了八只猪头，八只猪头都冒着新鲜生猪特有的热气。
      </p>
      <p>
        <img src={fallback} data-src={Image1} className="lazy" />
      </p>
      <p>
      我母亲排在第六位，她点着食指，数得很清楚，可是等肉铺的门打开了，我母亲却看见柜台上只放着四只小号的猪头，另外四只大的不见了。
      </p>
      <p>
        <img src={fallback} data-src={Image2} className="lazy" />
      </p>
      <p>
      她和排在第五位的绍兴奶奶都有点紧张，绍兴奶奶说，怎么不见了？我母亲踮着脚向张云兰的脚下看，看见的是张云兰的紫红色的胶鞋。会不会在下面，我母亲说，一共八只呢，还有四只大的，被她藏起来了？柜台里的张云兰一定听见了我母亲的声音，那只紫红色的胶鞋突然抬起来，把什么东西踢到更隐蔽的地方去了。
      </p>
      <p>
        <img src={fallback} data-src={Image3} className="lazy" />
      </p>
      <p>
      我母亲断定那是一只大猪头。从绍兴奶奶那里开始猪头就售空了，绍兴奶奶用她慈祥的目光谴责着张云兰，这是没有用的。卖光了。张云兰说，猪头多紧张呀，绍兴奶奶你来晚了，早来一步就有你一只。绍兴奶奶无奈地在旁边买了点冷冻肉，朝张云兰翻着白眼走了。我母亲却倔，她把手里的篮子扔在柜台上，人很严肃地站在张云兰面前。我数过的，一共来了八只，我母亲说，还有四只，拿出来！四只什么？你让我拿四只什么出来？
      </p>
      <p>
        <img src={fallback} data-src={Image4} className="lazy" />
      </p>
      <p>
      张云兰说。四只猪头！拿出来，不像话！我告诉你，我数过的。什么猪头？你这个人说话我怎么听不懂？拿出来，你不拿我自己拿了。我母亲以为正义在她一边，她看着张云兰负隅顽抗的样子，火气更大了，人就有点冲动，推推这人，拨拨那人，可是也不知是肉铺里人太多，或者干脆就是人家故意挡着我母亲的去路，她怎么也无法进入柜台里侧。她听见张云兰冷笑的声音，你算老几呀，自己进来拿，谁批准你进来了？
      </p>
      <p>
        <img src={fallback} data-src={Image5} className="lazy" />
      </p>
      <p>
        <img src={fallback} data-src={Image6} className="lazy" />
      </p>
      <p>
      张云兰说。四只猪头！拿出来，不像话！我告诉你，我数过的。什么猪头？你这个人说话我怎么听不懂？拿出来，你不拿我自己拿了。我母亲以为正义在她一边，她看着张云兰负隅顽抗的样子，火气更大了，人就有点冲动，推推这人，拨拨那人，可是也不知是肉铺里人太多，或者干脆就是人家故意挡着我母亲的去路，她怎么也无法进入柜台里侧。她听见张云兰冷笑的声音，你算老几呀，自己进来拿，谁批准你进来了？
      </p>
      <p>
        <img src={fallback} data-src={Image7} className="lazy" />
      </p>
      <p>
      张云兰说。四只猪头！拿出来，不像话！我告诉你，我数过的。什么猪头？你这个人说话我怎么听不懂？拿出来，你不拿我自己拿了。我母亲以为正义在她一边，她看着张云兰负隅顽抗的样子，火气更大了，人就有点冲动，推推这人，拨拨那人，可是也不知是肉铺里人太多，或者干脆就是人家故意挡着我母亲的去路，她怎么也无法进入柜台里侧。她听见张云兰冷笑的声音，你算老几呀，自己进来拿，谁批准你进来了？
      </p>
      <p>
        <img src={fallback} data-src={Image8} className="lazy" />
      </p>

      <p>
      张云兰说。四只猪头！拿出来，不像话！我告诉你，我数过的。什么猪头？你这个人说话我怎么听不懂？拿出来，你不拿我自己拿了。我母亲以为正义在她一边，她看着张云兰负隅顽抗的样子，火气更大了，人就有点冲动，推推这人，拨拨那人，可是也不知是肉铺里人太多，或者干脆就是人家故意挡着我母亲的去路，她怎么也无法进入柜台里侧。她听见张云兰冷笑的声音，你算老几呀，自己进来拿，谁批准你进来了？
      </p>
      <p>
        <img src={fallback} data-src={Image9} className="lazy" />
      </p>
      <p>
      张云兰说。四只猪头！拿出来，不像话！我告诉你，我数过的。什么猪头？你这个人说话我怎么听不懂？拿出来，你不拿我自己拿了。我母亲以为正义在她一边，她看着张云兰负隅顽抗的样子，火气更大了，人就有点冲动，推推这人，拨拨那人，可是也不知是肉铺里人太多，或者干脆就是人家故意挡着我母亲的去路，她怎么也无法进入柜台里侧。她听见张云兰冷笑的声音，你算老几呀，自己进来拿，谁批准你进来了？
      </p>
      <p>
      张云兰说。四只猪头！拿出来，不像话！我告诉你，我数过的。什么猪头？你这个人说话我怎么听不懂？拿出来，你不拿我自己拿了。我母亲以为正义在她一边，她看着张云兰负隅顽抗的样子，火气更大了，人就有点冲动，推推这人，拨拨那人，可是也不知是肉铺里人太多，或者干脆就是人家故意挡着我母亲的去路，她怎么也无法进入柜台里侧。她听见张云兰冷笑的声音，你算老几呀，自己进来拿，谁批准你进来了？
      </p>
      <div className="lazy"></div>
    </div>
  );
};

export default ImgLazyLoad;
