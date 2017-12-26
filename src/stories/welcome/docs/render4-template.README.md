
## template

我们可以通过使用H5的template模版来书写：

```javascript
storiesOf('渲染', module)
  .add('template render', () => ({
    template: `
      <i-button>
        template render
      </i-button>
    `
  }))
```

> **缺陷**:无法插入变量。
