数据存储
======

> 创建时间： 2017年12月26日 [查看更多](https://vuex.vuejs.org/zh-cn/ "查阅Vuex相关资料")

## 这是啥

关于Vuex是啥，我们已经不需要再多的诟述，[相关资料点击这里查看][vuex]。将交互中需要的数据放置在统一的模块中，方便取用。

## 怎么做

这完全和Vuex怎么使用以及怎么在组件中使用是一模一样的。你可以查看[官网][vuex]来学习。

### 引入vuex

```javascript
import Vuex from 'vuex';
```

### 局部使用

通过在组件中创建Vuex的实例化对象即可。

```javascript
storiesOf('Welcome/数据', module)
  .addDecorator(centered)
  .add('vuex actions', () => ({
    template: '<i-button @click="handler">我被点击了{{ $store.state.count }}次！</i-button>',
    store: new Vuex.Store({
      state: {count: 0},
      mutations: {
        increment (state) {
          state.count++;
          action('vuex state')(state)
        }
      }
    }),
    methods: {
      handler () {
        this.$store.commit('increment')
      }
    }
  }));
```

> **注意**：局部使用的弊端就是store仅仅该组件可用，如果你希望所有的组件都能够使用一个store（实际应用场景中也是这样的），可以构建全局的store来使用。

### 全局使用

全局使用的方式就是将构建的Vuex实例发布在组件外部，我想你肯定知道该怎样做。

[vuex]: https://vuex.vuejs.org/zh-cn/ "Vuex"