
### 链接到用例

如果我们希望某个链接能跳转到某个故事页的某个用例，这种方式是最简单的：

```javascript
storiesOf('链接', module)
  .addDecorator(centered)
  .add('linkto story', () => ({
    // 链接到Welcome故事的welcome用例
    render: (h) => <i-button onClick={linkTo('Welcome', 'welcome')}>前往Welcome页</i-button>
  }));
```
