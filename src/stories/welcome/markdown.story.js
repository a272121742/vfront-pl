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
添加Markdown文档
=====

> 创建时间： 2017年12月22日 [查看更多](https://github.com/tuchk4/storybook-readme "addon-readme")

## 安装

\`\`\`shell
npm install --save-dev storybook-readme raw-loader
# 或者
npm i -D storybook-readme raw-loader
\`\`\`

## 使用

### 引用

本插件无需注册，可以直接使用。

\`\`\`javascript
import { withReadme, withDocs }  from 'storybook-readme';
\`\`\`

> **注意**： \`withDocs\`暂时不可用，请直接使用\`withReadme\`来加载\`Markdown\`文档！

### 用例加载

为每个故事用例添加一个Markdown文档，我们推荐为每一个用例编写一份文档，使用方法如下:

\`\`\`javascript
storiesOf('故事', module)
  // 将Markdown文档挂在到这个用例上
  .add('用例', withReadme(md, () => ({
    render: (h) => Component
  })))
\`\`\`

### 故事加载

或者给整个故事添加\`Markdown\`文档，我们不推荐这种方式，除非你确实有必要。因为为故事添加文档后，用例将无法添加。以下是给故事添加文档的案例：

\`\`\`javascript
storiesOf('故事', module)
  .addDecorator(withReadme(md))
  .add('用例', () => ({
    render: (h) => Component
  }))
\`\`\`

> 注意，整个故事引入文档会覆盖每个用例文档，不会去做拼接。
`;


storiesOf('文档', module)
  // .addDecorator(withReadme(welcomeMd))
  .add('markdown', withReadme(md, () => ({
    render: (h) => <i-button>按钮</i-button>
  })))



