
### 选择旋钮

选择旋钮会渲染为一个下拉列表，列表的选中值会与组件进行绑定。当我们下拉选择后，其绑定的组件中的值也会变化。例如：

```javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob select', () => ({
    render (h) {
      // 选择旋钮，渲染为一个下拉列表
      const type = select('type', ['primary','ghost','dashed','text','info','success','warning','error']);
      const size = select('size', ['default', 'large', 'small']);
      const shape = select('shape', ['default','circle']);
      const htmlType = select('html-type', ['button', 'submit', 'reset']);
      return (
        <i-button 
          type = { type }
          size = { size }
          shape = { shape }
          htmlType = { htmlType }
        >
          选择旋钮
        </i-button>
      );
    }
  }));
```
