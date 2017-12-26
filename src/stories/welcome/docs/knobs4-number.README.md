
### 数字旋钮

数字旋钮会有两种状况，如果是单独的数字，则会渲染会一个数字选择器；如果是一个数字加上选择范围，则渲染成为一个数字滑块。当数字选择器或者数字滑块的值发生变化时，其绑定的组件中的值也会变化。例如：

```javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob number', () => ({
    render (h) {
      // 数字旋钮，转换为数字选择器(带范围的将渲染为数字滑块)
      const rows = number('rows', 2, {
        range: true,
        min: 2,
        max: 10,
        step: 1
      });
      const maxlength = number('maxlength', 255);
      return (
        <i-input
          type = "textarea"
          placeholder = { "数字旋钮\r\n最大输入长度：" + maxlength}
          rows = { rows }
          maxlength = { maxlength }
        >
        </i-input>
      );
    }
  }));
```
