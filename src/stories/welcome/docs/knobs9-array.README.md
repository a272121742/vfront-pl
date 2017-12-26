
### 按钮

按钮会渲染成一个按钮，目前功能未知，目测可以进行一些逻辑处理，或者进行ajax提交。不过ajax提交会使得故事书变得复杂，毕竟我们希望他进行功能展示，而不是为了实现某些业务。这是一个按钮的例子：

```javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob button', () => ({
    render (h) {
      const btn = button('按钮', () => {
        console.log('执行其他函数，可用于改变其他旋钮的值，或提交ajax请求进行交互');
      });
      return (
        <i-button>按钮旋钮</i-button>
      )
    }
  }));
```
