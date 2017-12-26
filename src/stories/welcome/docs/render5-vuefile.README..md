
## vue file

可以直接导入vue文件进行渲染，这是更简单的：

```javascript
import Form from './components/Form.vue';
storiesOf('渲染', module)
  .add('vue file render', () => ({
    comments: {Form},
    render (h) {
      return <Form></Form>
    }
  }));
```

> **缺陷**:对于简单用例，使用这个有些杀鸡用牛刀的感觉。
