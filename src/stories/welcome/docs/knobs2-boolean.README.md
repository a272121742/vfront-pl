
### 逻辑旋钮

逻辑旋钮会渲染为一个复选框，复选框的值会与组件进行绑定。当我们改变复选框的状态时，其绑定的组件中的值也会变化。例如：

```javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob boolean', () => ({
    render (h) {
      // 逻辑旋钮，渲染为一个复选框
      const long = boolean('long', false);
      const disabled = boolean('disabled', false);
      const loading = boolean('loading', false);
      return (
        <i-button 
          long = { long }
          disabled = { disabled }
          loading = { loading }
        >
          逻辑旋钮
        </i-button>
      );
    }
  }));
```
