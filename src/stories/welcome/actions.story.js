/* eslint-disable react/react-in-jsx-scope */
import Vue from 'vue';
import Vuex from 'vuex';

import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

const md = `
行为记录仪
========

> 创建时间： 2017年12月22日 [查看更多](https://github.com/storybooks/storybook/tree/master/addons/actions "addon-actions")

## 这是啥

想象一下这样的场景，你发布的组件不仅仅是视图，还有一些交互的功能。当其他开发人员使用你的组件时，他们不得不重新部署一个开发环境去测试你的组件。为了能看到内部的逻辑，他们也许会通过\`console.log\`的方式进行简单调试来判断你的文档是否和组件一致，这种打印方式最恶心的就是给领导演示时让他无脑的看你在控制台上秀代码。一个更好的方式是将故事书中将触发的事件直接记录下来，并通过可视化的方式呈现以及告知传递的参数，这就是**行为记录仪**的功能和目的。

## 怎么做

当然，我们已经给他们减轻了引入和配置的工作量，而仅仅只需要按照我们后面的方式一步一步进行，即可看到魔法般的效果。

### 引入行为记录仪

\`\`\`javascript
// 在我们的story文件中引入行为记录仪相关组件
import { action, decorateAction } from '@storybook/addon-actions';
\`\`\`

### 行为命名

例如，我们可以生成一种行为，用于记录：

\`\`\`javascript
const log = action('log');
\`\`\`

当此行为记录仪被触发时，会打印一条日志，日志的名称叫\`log\`，这个名字你可以任意取，你只需要区分这个行为是被那个记录仪所记录的。

### 装饰记录仪

\`\`\`javascript
const log = action('log');
storiesOf('行为', module)
  .addDecorator(centered)
  .add('action emit only', () => ({
    // 模版中的i-button组件的触发事件为handler
    template: '<i-button @click="handler">点我</i-button>',
    methods: {
      // handler事件会调用名为log的行为记录仪进行记录
      handler: log
    }
  }));
\`\`\`

### 记录参数

记录的时候，除了会显示一条记录，还可以显示参数：

\`\`\`javascript
const log = action('log');
storiesOf('行为', module)
  .addDecorator(centered)
  .add('action emit data', () => ({
    template: '<i-button @click="handler">点我</i-button>',
    methods: {
      handler: e => {
        e.preventDefault();
        log('参数1', '参数2', '参数3');
      }
    }
  }));
\`\`\`

### 参数拦截

我们可以对发出去的参数进行拦截，只要使用装饰函数生成一个新的记录仪即可。我们举例，拦截参数后只让记录仪显示一个参数：

\`\`\`javascript
// 行为装饰器，只拦截第一个参数
const firstArgAction= decorateAction([ args => {
  return args.slice(0, 1);
}]);
// 用行为装饰器装饰一个新的记录仪
const logFirstArg = firstArgAction('logFirst');
storiesOf('行为', module)
  .addDecorator(centered)
  .add('action emit data split', () => {
    return {
      template: '<i-button @click="handler">点我</i-button>',
      methods: {
        handler: e => {
          e.preventDefault();
          // 使用名为logFirst的记录仪进行记录，并只保留第一个参数
          logFirstArg('参数1', '参数2', '参数3');
        }
      }
    };
  });
\`\`\`
`;

// 生成一种行为，用于记录
const log = action('log');
// 行为装饰器，只拦截第一个参数
const firstArgAction= decorateAction([ args => {
  return args.slice(0, 1);
}]);
// 用行为装饰器装饰一个新的记录仪
const logFirstArg = firstArgAction('logFirst');
storiesOf('Welcome/行为', module)
  .addDecorator(centered)
  .addDecorator(withReadme(md))
  .add('action emit only', () => ({
    template: '<i-button @click="handler">点我</i-button>',
    methods: {
      handler: log
    }
  }))
  .add('action emit data', () => ({
    template: '<i-button @click="handler">点我</i-button>',
    methods: {
      handler: e => {
        e.preventDefault();
        log('参数1', '参数2', '参数3');
      }
    }
  }))
  .add('action emit data split', () => {
    return {
      template: '<i-button @click="handler">点我</i-button>',
      methods: {
        handler: e => {
          e.preventDefault();
          logFirstArg('参数1', '参数2', '参数3');
        }
      }
    };
  })
  .add('action use jsx', () => ({
    render (h) {
      return <i-button onClick={ this.handler }>点我</i-button>;
    },
    methods: {
      handler (e) {
        e.preventDefault();
        log('参数1', '参数2', '参数3')
      }
    }
  }));