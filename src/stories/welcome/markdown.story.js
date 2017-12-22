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

## 这是啥

试想一种场景，当我们的故事书已经开发出来了，发布的组件孤零零的排布在我们的故事页上，却没有任何的说明文档。使用者和观赏者除了观赏组件的外貌就没有别的可以做了。我们不仅仅希望这份故事书是给他们呈现视图，我们连组件的核心都要告知给他们。曾经，我们尝试过[addon-notes](https://github.com/storybooks/storybook/tree/master/addons/notes "addon-notes")来添加笔记记录，然而这种方式让人深恶痛绝，因为比起写HTML我们更喜欢\`Markdown\`的方式。关于\`Markdown\`的好处和写法我们就不多说了，你只需要知道，这个插件就是渲染\`Markdown\`文件作为我们的注释或者笔记，并且自带代码格式化，只要你按照\`Markdown\`的语法去写。

## 怎么做

### 安装

\`\`\`shell
npm install --save-dev storybook-readme raw-loader
# 或者
npm i -D storybook-readme raw-loader
\`\`\`

### 引用

本插件无需注册，可以直接使用。

\`\`\`javascript
import { withReadme, withDocs }  from 'storybook-readme';
\`\`\`

> **注意**： \`withDocs\`暂时不可用，请直接使用\`withReadme\`来加载\`Markdown\`文档！

### 用例装载

为每个故事用例添加一个Markdown文档，我们推荐为每一个用例编写一份文档，使用方法如下:

\`\`\`javascript
storiesOf('故事', module)
  // 将Markdown文档挂在到这个用例上
  .add('用例', withReadme(md, () => ({
    render: (h) => Component
  })))
\`\`\`

### 故事装载

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


storiesOf('Welcome/文档', module)
  // .addDecorator(withReadme(welcomeMd))
  .add('markdown', withReadme(md, () => ({
    render: (h) => <i-button>按钮</i-button>
  })))



