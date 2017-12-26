
### 对象旋钮

对象旋钮将转换为多行文本框，同样文本框的值与组件是绑定的。这里特别注意的是，在多行文本框中尽行书写时，必须完全准照`JSON`的标准格式，否则无法转换。下面时对象旋钮的案例：

```javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob object', () => ({
    render (h) {
      // 对象旋钮，转换为多行文本框，书写时必须符合JSON格式，否则异常
      const style = object('style', {
        background: 'red',
        width: 200,
        height: 200
      });
      return (
        <div>
          <div>
            对象旋钮
          </div>
          <div
            style={style}
          >
          </div>
        </div>
      );
    }
  }));
```
