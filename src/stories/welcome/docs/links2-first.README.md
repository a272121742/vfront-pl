
### 链接到第一个用例

`linkTo`的参数可以是2个，也可以是1个，如果只有一个，则默认跳转到该故事的第一个用例：

```javascript
storiesOf('链接', module)
  .addDecorator(centered)
  .add('linkto first', () => ({
    // 默认跳转到Welcome故事到第一个用例
    render: (h) => <i-button onClick={linkTo('Welcome')}>前往App页</i-button>
  }));
```
