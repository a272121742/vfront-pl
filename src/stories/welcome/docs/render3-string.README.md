
## string

使用string类型作为template模版也是可以的。

```javascript
storiesOf('渲染', module)
  .add('string render', () => ({
    template: '<i-button>string render</i-button>'
  }))
```

> **缺陷**:编码复杂，可读性差，无法插入变量。
