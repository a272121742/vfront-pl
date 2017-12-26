
### 参数拦截

我们可以对发出去的参数进行拦截，只要使用装饰函数生成一个新的记录仪即可。我们举例，拦截参数后只让记录仪显示一个参数：

```javascript
// 行为装饰器，只拦截第一个参数
const firstArgAction= decorateAction([ args => {
  return args.slice(0, 1);
}]);
// 用行为装饰器装饰一个新的记录仪
const logFirstArg = firstArgAction('logFirst');
storiesOf('行为', module)
  .addDecorator(centered)
  .add('action emit data split', () => {
    return {
      template: '<i-button @click="handler">点我</i-button>',
      methods: {
        handler: e => {
          e.preventDefault();
          // 使用名为logFirst的记录仪进行记录，并只保留第一个参数
          logFirstArg('参数1', '参数2', '参数3');
        }
      }
    };
  });
```
