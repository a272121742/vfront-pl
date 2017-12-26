
### 记录参数

记录的时候，除了会显示一条记录，还可以显示参数：

```javascript
const log = action('log');
storiesOf('行为', module)
  .addDecorator(centered)
  .add('action emit data', () => ({
    template: '<i-button @click="handler">点我</i-button>',
    methods: {
      handler: e => {
        e.preventDefault();
        log('参数1', '参数2', '参数3');
      }
    }
  }));
```
