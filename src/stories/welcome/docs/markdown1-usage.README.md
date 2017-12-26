
### 用例装载

为每个故事用例添加一个Markdown文档，我们推荐为每一个用例编写一份文档，使用方法如下:

```javascript
storiesOf('故事', module)
  // 将Markdown文档挂在到这个用例上
  .add('用例', withReadme(md, () => ({
    render: (h) => Component
  })))
```
