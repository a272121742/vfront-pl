
### 颜色旋钮

颜色旋钮将渲染成一个拾色器，拾色器选择的值将与组件进行绑定。拾色器的值发生变化后，其绑定的组件中的值也会变化。例如：

```javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob color', () => ({
    render (h) {
      // 颜色旋钮，转换为一个颜色选择器
      const value = color('color', '#ff00ff');
      return (
        <div>
          <div>
            颜色旋钮
          </div>
          <div
            style={{'background-color': value, color: value}}
          >
            颜色旋钮
          </div>
        </div>
      );
    }
  }));
```
