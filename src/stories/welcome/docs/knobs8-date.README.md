
### 日期旋钮

日期旋钮会渲染成一个日期选择器，日期选择器选择的值将与组件进行绑定。选择器的值发生变化后，其绑定的组件中的值也会变化。例如：

```javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob date', () => ({
    render (h) {
      // 日期旋钮，转换为日期控件
      const value1 = date('date', new Date());
      // 自定义
      function dateFormatKnob(name, defaultValue){
        const d = date(name, defaultValue);
        return new Date(d).toLocaleString();
      }
      const value2 = dateFormatKnob('dateFormat', new Date());
      return (
        <div>
          日期旋钮
          <div>
            <i-button>{value1}</i-button>
          </div>
          格式化日期旋钮
          <div>
            <i-button>{value2}</i-button>
          </div>
        </div>
      );
    }
  }));
```

> **注意**： 日期选择器的值都是日期基于格林威治时间的毫秒数，要渲染为自定义格式，需要通过装饰函数进行装饰，如上例中的自定义部分。
