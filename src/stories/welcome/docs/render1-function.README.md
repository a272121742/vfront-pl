
## function

我们可以通过Vue提供的render函数来渲染一个组件，这个组件可以是全局注册的，也可以是临时生成的，vue文件也是可以的。例如：

```javascript
storiesOf('渲染', module)
  .add('function render', () => ({
    // 通过render函数来渲染
    render: h => h('Alert', ['function render', h('template', {slot: 'desc'}, '使用render的h函数渲染')])
  }))
```

> **缺陷**:编码复杂，可读性差。
