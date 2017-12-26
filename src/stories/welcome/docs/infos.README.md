组件解析器
========

> 创建时间： 2017年12月22日 [查看更多](https://github.com/pocka/storybook-addon-vue-info "addon-vue-info")

## 这是啥

如果组件的逻辑部分不是通过看代码就知道，那么这就是组件解析器所要做到的功能。它可以解析一个简单组件的外壳，将其属性、方法等罗列出来以便我们查看和讨论。当然我们可以通过编写文档的方式来展示，然而对于一个复杂的组件 ，我们的文档时间会和开发这个组件的时间不相上下，我们反而可以利用程序化自动解析，展示组件那些抽象层面的属性方法。这不仅简单，而且呈现的结果更便于我们相互之间进行讨论。

## 怎么做

我们只需要加入这个插件的装饰器即可：

```javascript
// 在我们的story文件中引入组件解析器
import VueInfoAddon from 'storybook-addon-vue-info';
storiesOf('解析', module)
  // 在装饰器中插入解析器插件
  .addDecorator(VueInfoAddon)
  .add('component info', () => ({
    // 渲染我们的组件，越简单越好
    template: '<i-button>component info</i-button>'
  }));
```