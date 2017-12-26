
### 故事装载

或者给整个故事添加`Markdown`文档，我们不推荐这种方式，除非你确实有必要。因为为故事添加文档后，用例将无法添加。以下是给故事添加文档的案例：

```javascript
storiesOf('故事', module)
  .addDecorator(withReadme(md))
  .add('用例', () => ({
    render: (h) => Component
  }))
```

> 注意，整个故事引入文档会覆盖每个用例文档，不会去做拼接。
