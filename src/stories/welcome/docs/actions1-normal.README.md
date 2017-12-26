
### 装饰记录仪

```javascript
const log = action('log');
storiesOf('行为', module)
  .addDecorator(centered)
  .add('action emit only', () => ({
    // 模版中的i-button组件的触发事件为handler
    template: '<i-button @click="handler">点我</i-button>',
    methods: {
      // handler事件会调用名为log的行为记录仪进行记录
      handler: log
    }
  }));
```
