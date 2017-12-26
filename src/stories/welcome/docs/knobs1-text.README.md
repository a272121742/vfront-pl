
### 文本旋钮

文本旋钮会渲染为一个文本框，文本框的值会与组件进行绑定。当我们改变文本框内的文本内容时，其值会直接渲染在组件中。例如：

```javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob text', () => ({
    render (h) {
      // 文本旋钮，渲染为一个文本框
      const icon = text('icon', 'share');
      const innerText = text('text', '文本旋钮');
      return (
        <i-button 
          icon = { icon }
        >
          { innerText }
        </i-button>
      );
    }
  }));
```
