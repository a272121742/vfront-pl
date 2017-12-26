
## jsx

故事书是支持JSX语法的，我们已经做了配置。但是目前仍然有一些问题，不过你可以通过以下的方式来进行简单渲染：

```javascript
storiesOf('渲染', module)
  .add('jsx render', () => ({
    // 只能通过render函数来渲染JSX，不能直接返回JSX
    render: h => <i-button>render jsx</i-button>
  }))
```

> **缺陷**:一些组件无法读取（算是目前的Bug）。
