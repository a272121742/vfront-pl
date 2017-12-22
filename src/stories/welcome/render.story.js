/* eslint-disable react/react-in-jsx-scope */
import Vue from 'vue';
import Vuex from 'vuex';

import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import Form from './components/Form.vue';

const md = `
Storybook渲染组件
===============

> 创建时间： 2017年12月22日 [查阅更多](https://cn.vuejs.org/ "Vue.js")

## render

我们可以通过Vue提供的render函数来渲染一个组件，这个组件可以是全局注册的，也可以是临时生成的，vue文件也是可以的。例如：

\`\`\`javascript
storiesOf('渲染', module)
  .add('function render', () => ({
    // 通过render函数来渲染
    render: h => h('Alert', ['function render', h('template', {slot: 'desc'}, '使用render的h函数渲染')])
  }))
\`\`\`

> **缺陷**:编码复杂，可读性差。

## jsx

故事书是支持JSX语法的，我们已经做了配置。但是目前仍然有一些问题，不过你可以通过以下的方式来进行简单渲染：

\`\`\`javascript
storiesOf('渲染', module)
  .add('jsx render', () => ({
    // 只能通过render函数来渲染JSX，不能直接返回JSX
    render: h => <i-button>render jsx</i-button>
  }))
\`\`\`

> **缺陷**:一些组件无法读取（算是目前的Bug）。

## string

使用string类型作为template模版也是可以的。

\`\`\`javascript
storiesOf('渲染', module)
  .add('string render', () => ({
    template: '<i-button>string render</i-button>'
  }))
\`\`\`

> **缺陷**:编码复杂，可读性差，无法插入变量。

## template

我们可以通过使用H5的template模版来书写：

\`\`\`javascript
storiesOf('渲染', module)
  .add('template render', () => ({
    template: \`
      <i-button>
        template render
      </i-button>
    \`
  }))
\`\`\`

> **缺陷**:无法插入变量。

## vue file

可以直接导入vue文件进行渲染，这是更简单的：

\`\`\`javascript
import Form from './components/Form.vue';
storiesOf('渲染', module)
  .add('vue file render', () => ({
    comments: {Form},
    render (h) {
      return <Form></Form>
    }
  }));
\`\`\`

> **缺陷**:对于简单用例，使用这个有些杀鸡用牛刀的感觉。

## 如何选择？

如果我们是渲染一个独立组件（内部不包含其他组件，并且内容简单），我们可以采用\`JSX\`的方式构建用例。如果我们渲染一个复杂的组件（高级组件、业务组件），请务必要使用vue文件的方式。

## TODO

有一些问题需要后期解决：

- template中如何插入变量以及调用组件方法；
- JSX和template有时会加载不到已经组册到的组件；
`;

storiesOf('渲染', module)
  .addDecorator(centered)
  .addDecorator(withReadme(md))
  .add('function render', () => ({
    render: h => h('Alert', ['function render', h('template', {slot: 'desc'}, '使用render的h函数渲染')])
  }))
  .add('jsx render', () => ({
    render: h => <i-button>render jsx</i-button>
  }))
  .add('string render', () => ({
    template: '<i-button>string render</i-button>'
  }))
  .add('template render', () => ({
    template: `
      <i-button>
        template render
      </i-button>
    `
  }))
  .add('vue file render', () => ({
    comments: {Form},
    render (h) {
      return <Form></Form>
    }
  }));