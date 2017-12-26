
### 数组旋钮

数组旋钮会渲染成一个文本框，数组的值会通过字符串拼接的方式渲染在文本框中，默认的拼接符号为`,`（英文逗号）。文本框的值与组件是绑定的，使用方法如下：

```javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob array', () => ({
    render (h) {
      // 数组旋钮，转换为多行文本框，书写时必须用分隔符分割
      const values = array('values', ['标签1', '标签2', '标签3']);
      var innerHTML = ['数组旋钮', h('br')];
      values.forEach(item => {
        innerHTML.push(h('Tag', item));
      });
      var html = h('div', innerHTML);
      return html;
    }
  }));
```

> **注意**：如果你希望修改分隔符，给array函数添加第三个参数即可，表示选用你自定义的分隔符。例如我们选用`-`（减号）来作为分割符： <br/>
> `const vaules = array('values', ['标签1', '标签2', '标签3'], '-')`

