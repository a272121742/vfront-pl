import Vue from 'vue';
import Vuex from 'vuex';

import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

const md = `
链接导航
======

> 创建时间： 2017年12月22日 [查看更多](https://github.com/storybooks/storybook/tree/master/addons/links "addon-links")

## 这是啥

想象一下这样的场景，我们已经编写出一套非常大的故事书作为我们的模式库，其中有一些基础组件的展示，同样也有一些高级组件或者业务组件的展示。然而，在展示组件时，我们有希望与之关联的组件也能被快速找到。如果我们进行嵌套，那页面就太多太大，而且容易形成相互嵌套的问题。最好的解决方式就是提供链接，然而故事书中的链接都是自动生成的，要想找到这些链接并且维护是工程巨大的。因此链接导航提供了针对于\`故事\`和\`用例\`的快速链接方式。

## 怎么做

当然，我们已经给他们减轻了引入和配置的工作量，而仅仅只需要按照我们后面的方式一步一步进行，即可看到魔法般的效果。

\`\`\`javascript
// 在我们的story文件中引入链接导航的所有组件
import { linkTo } from '@storybook/addon-links';
\`\`\`

### 链接到用例

如果我们希望某个链接能跳转到某个故事页的某个用例，这种方式是最简单的：

\`\`\`javascript
storiesOf('链接', module)
  .addDecorator(centered)
  .add('linkto story', () => ({
    // 链接到Welcome故事的welcome用例
    render: (h) => <i-button onClick={linkTo('Welcome', 'welcome')}>前往Welcome页</i-button>
  }));
\`\`\`

\`linkTo\`的参数可以是2个，也可以是1个，如果只有一个，则默认跳转到该故事的第一个用例：

\`\`\`javascript
storiesOf('链接', module)
  .addDecorator(centered)
  .add('linkto first', () => ({
    // 默认跳转到Welcome故事到第一个用例
    render: (h) => <i-button onClick={linkTo('Welcome')}>前往App页</i-button>
  }));
\`\`\`
`;
storiesOf('Welcome/链接', module)
  .addDecorator(centered)
  .addDecorator(withReadme(md))
  .add('linkto story', () => ({
    render: (h) => <i-button onClick={linkTo('Welcome', 'welcome')}>前往Welcome页</i-button>
  }))
  .add('linkto first', () => ({
    render: (h) => <i-button onClick={linkTo('Welcome')}>前往App页</i-button>
  }))