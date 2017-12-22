import Vue from 'vue';
import Vuex from 'vuex';

import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

const md = `
添加交互旋钮
==========

> 创建时间： 2017年12月22日 [查看更多](https://github.com/storybooks/storybook/tree/master/addons/knobs "addon-knobs")

## 这是啥

想象一下这样的场景，你做了一个组件并且发布出来，并试图给其他人去使用。然后其他的开发人员就得去看你的代码和文档然后学习并使用。更困恼的是他们也许得重新部署一个开发环境去单独测用你的组件。为什么我们不能让这种交互变得更直观，即发布组件（文件）的同时也让对方看到这个组件的动效，还能操作。更好的方式是我们不用去直接编码来观察组件的变化，而是直接在页面上改变我们的旋钮开关，即可看到组件的编码。这就是我们所提出的**交互旋钮**。

说的再通俗一些，就是在组件的旁边添加针对组件属性修改的开关，通过变换开关同步实现组件的变化，这就是\`knobs\`旋钮的作用。

## 怎么做

当然，我们已经给他们减轻了引入和配置的工作量，而仅仅只需要按照我们后面的方式一步一步进行，即可看到魔法般的效果。

### 引入旋钮

\`\`\`javascript
// 在我们的story文件中引入旋钮的所有组件
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
\`\`\`

### 启用旋钮

\`\`\`javascript
storiesOf('旋钮', module)
  // 创建好故事书后就可以给故事书添加旋钮装饰器
  .addDecorator(withKnobs)
\`\`\`

### 文本旋钮

文本旋钮会渲染为一个文本框，文本框的值会与组件进行绑定。当我们改变文本框内的文本内容时，其值会直接渲染在组件中。例如：

\`\`\`javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob text', () => ({
    render (h) {
      // 文本旋钮，渲染为一个文本框
      const icon = text('icon', 'share');
      const innerText = text('text', '文本旋钮');
      return (
        <i-button 
          icon = { icon }
        >
          { innerText }
        </i-button>
      );
    }
  }));
\`\`\`

### 逻辑旋钮

逻辑旋钮会渲染为一个复选框，复选框的值会与组件进行绑定。当我们改变复选框的状态时，其绑定的组件中的值也会变化。例如：

\`\`\`javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob boolean', () => ({
    render (h) {
      // 逻辑旋钮，渲染为一个复选框
      const long = boolean('long', false);
      const disabled = boolean('disabled', false);
      const loading = boolean('loading', false);
      return (
        <i-button 
          long = { long }
          disabled = { disabled }
          loading = { loading }
        >
          逻辑旋钮
        </i-button>
      );
    }
  }));
\`\`\`

### 选择旋钮

选择旋钮会渲染为一个下拉列表，列表的选中值会与组件进行绑定。当我们下拉选择后，其绑定的组件中的值也会变化。例如：

\`\`\`javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob select', () => ({
    render (h) {
      // 选择旋钮，渲染为一个下拉列表
      const type = select('type', ['primary','ghost','dashed','text','info','success','warning','error']);
      const size = select('size', ['default', 'large', 'small']);
      const shape = select('shape', ['default','circle']);
      const htmlType = select('html-type', ['button', 'submit', 'reset']);
      return (
        <i-button 
          type = { type }
          size = { size }
          shape = { shape }
          htmlType = { htmlType }
        >
          选择旋钮
        </i-button>
      );
    }
  }));
\`\`\`

### 数字旋钮

数字旋钮会有两种状况，如果是单独的数字，则会渲染会一个数字选择器；如果是一个数字加上选择范围，则渲染成为一个数字滑块。当数字选择器或者数字滑块的值发生变化时，其绑定的组件中的值也会变化。例如：

\`\`\`javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob number', () => ({
    render (h) {
      // 数字旋钮，转换为数字选择器(带范围的将渲染为数字滑块)
      const rows = number('rows', 2, {
        range: true,
        min: 2,
        max: 10,
        step: 1
      });
      const maxlength = number('maxlength', 255);
      return (
        <i-input
          type = "textarea"
          placeholder = { "数字旋钮\r\n最大输入长度：" + maxlength}
          rows = { rows }
          maxlength = { maxlength }
        >
        </i-input>
      );
    }
  }));
\`\`\`

### 颜色旋钮

颜色旋钮将渲染成一个拾色器，拾色器选择的值将与组件进行绑定。拾色器的值发生变化后，其绑定的组件中的值也会变化。例如：

\`\`\`javascript
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
\`\`\`

### 对象旋钮

对象旋钮将转换为多行文本框，同样文本框的值与组件是绑定的。这里特别注意的是，在多行文本框中尽行书写时，必须完全准照\`JSON\`的标准格式，否则无法转换。下面时对象旋钮的案例：

\`\`\`javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob object', () => ({
    render (h) {
      // 对象旋钮，转换为多行文本框，书写时必须符合JSON格式，否则异常
      const style = object('style', {
        background: 'red',
        width: 200,
        height: 200
      });
      return (
        <div>
          <div>
            对象旋钮
          </div>
          <div
            style={style}
          >
          </div>
        </div>
      );
    }
  }));
\`\`\`

### 数组旋钮

数组旋钮会渲染成一个文本框，数组的值会通过字符串拼接的方式渲染在文本框中，默认的拼接符号为\`,\`（英文逗号）。文本框的值与组件是绑定的，使用方法如下：

\`\`\`javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob array', () => ({
    render (h) {
      // 数组旋钮，转换为多行文本框，书写时必须用分隔符分割
      const values = array('values', ['标签1', '标签2', '标签3']);
      var innerHTML = ['数组旋钮', h('br')];
      values.forEach(item => {
        innerHTML.push(h('Tag', item));
      });
      var html = h('div', innerHTML);
      return html;
    }
  }));
\`\`\`

> **注意**：如果你希望修改分隔符，给array函数添加第三个参数即可，表示选用你自定义的分隔符。例如我们选用\`-\`（减号）来作为分割符： <br/>
> \`const vaules = array('values', ['标签1', '标签2', '标签3'], '-')\`

### 日期旋钮

日期旋钮会渲染成一个日期选择器，日期选择器选择的值将与组件进行绑定。选择器的值发生变化后，其绑定的组件中的值也会变化。例如：

\`\`\`javascript
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
\`\`\`

> **注意**： 日期选择器的值都是日期基于格林威治时间的毫秒数，要渲染为自定义格式，需要通过装饰函数进行装饰，如上例中的自定义部分。

### 按钮

按钮会渲染成一个按钮，目前功能未知，目测可以进行一些逻辑处理，或者进行ajax提交。不过ajax提交会使得故事书变得复杂，毕竟我们希望他进行功能展示，而不是为了实现某些业务。这是一个按钮的例子：

\`\`\`javascript
storiesOf('旋钮', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('knob button', () => ({
    render (h) {
      const btn = button('按钮', () => {
        console.log('执行其他函数，可用于改变其他旋钮的值，或提交ajax请求进行交互');
      });
      return (
        <i-button>按钮旋钮</i-button>
      )
    }
  }));
\`\`\`
`;

// 旋钮不要在全局申明，否则所有的故事都会有旋钮
storiesOf('Welcome/旋钮', module)
  .addDecorator(centered)
  .addDecorator(withReadme(md))
  .addDecorator(withKnobs)
  .add('knob text', () => ({
    render (h) {
      // 文本旋钮，渲染为一个文本框
      const icon = text('icon', 'share');
      const innerText = text('text', '文本旋钮');
      return (
        <i-button 
          icon = { icon }
        >
          { innerText }
        </i-button>
      );
    }
  }))
  .add('knob boolean', () => ({
    render (h) {
      // 逻辑旋钮，渲染为一个复选框
      const long = boolean('long', false);
      const disabled = boolean('disabled', false);
      const loading = boolean('loading', false);
      return (
        <i-button 
          long = { long }
          disabled = { disabled }
          loading = { loading }
        >
          逻辑旋钮
        </i-button>
      );
    }
  }))
  .add('knob select', () => ({
    render (h) {
      // 选择旋钮，渲染为一个下拉列表
      const type = select('type', ['primary','ghost','dashed','text','info','success','warning','error']);
      const size = select('size', ['default', 'large', 'small']);
      const shape = select('shape', ['default','circle']);
      const htmlType = select('html-type', ['button', 'submit', 'reset']);
      return (
        <i-button 
          type = { type }
          size = { size }
          shape = { shape }
          htmlType = { htmlType }
        >
          选择旋钮
        </i-button>
      );
    }
  }))
  .add('knob number', () => ({
    render (h) {
      // 数字旋钮，转换为数字选择器(带范围的将渲染为滑块)
      const rows = number('rows', 2, {
        range: true,
        min: 2,
        max: 10,
        step: 1
      });
      const maxlength = number('maxlength', 255);
      return (
        <i-input
          type = "textarea"
          placeholder = { "数字旋钮\r\n最大输入长度：" + maxlength}
          rows = { rows }
          maxlength = { maxlength }
        >
        </i-input>
      );
    }
  }))
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
  }))
  .add('knob object', () => ({
    render (h) {
      // 对象旋钮，转换为多行文本框，书写时必须符合JSON格式，否则异常
      const style = object('style', {
        background: 'red',
        width: 200,
        height: 200
      });
      return (
        <div>
          <div>
            对象旋钮
          </div>
          <div
            style={style}
          >
          </div>
        </div>
      );
    }
  }))
  .add('knob array', () => ({
    render (h) {
      // 数组旋钮，转换为多行文本框，书写时必须用分隔符分割
      const values = array('values', ['标签1', '标签2', '标签3']);
      var innerHTML = ['数组旋钮', h('br')];
      values.forEach(item => {
        innerHTML.push(h('Tag', item));
      });
      var html = h('div', innerHTML);
      return html;
    }
  }))
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
  }))
  .add('knob button', () => ({
    render (h) {
      const btn = button('按钮', () => {
        console.log('执行其他函数，可用于改变其他旋钮的值，或提交ajax请求进行交互');
      });
      return (
        <i-button>按钮旋钮</i-button>
      )
    }
  }))

