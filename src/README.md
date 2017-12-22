直接返回组件

```javascript
import Component from 'iView';
storiesOf('故事书', module)
  .add('直接加载组件', () => Component);
```

通过`render函数`返回

```javascript
import Component from 'iView';
storiesOf('故事书', module)
  .add('render返回组件', () => ({
    render: (h) => h(Component)
  });
```

支持JSX

```javascript
import Component from 'iView';
storiesOf('故事书', module)
  .add('JSX组件', () => ({
    render (h) {
      return (
        <Component></Component>
      );
    }
  })
  // 因为箭头函数的原因，这里无法拿到this，编码时请注意
  .add('JSX组件(简写)', () => ({
    render: h => <Component></Component>
  }))
```


The following modules couldn't be hot updated: (Full reload needed)
This is usually because the modules which have changed (and their parents) do not know how to hot reload themselves. See https://webpack.js.org/concepts/hot-module-replacement/ for more details