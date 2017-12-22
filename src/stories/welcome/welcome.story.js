/* eslint-disable react/react-in-jsx-scope */
import Vue from 'vue';
import Vuex from 'vuex';


import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import App from '@/App.vue';
import Welcome from './components/Welcome.vue';

const md = `
Storybook指引
============

> 创建时间： 2017年12月22日 [查看更多](https://storybook.js.org "查阅Storybook相关资料")

## 故事书

欢迎来到Vue版的Storybook，它是什么？它是一个\`Pattern Library\`，里面包含了\`Style Guide\`和\`Component Library\`，未来我们还可以加入\`Specificatio\`甚至是\`Testing\`。
它能快速展示你的UI原型以及交互，并能很直接的了解你发布的组件的结构。

## 功能描述

如果你有如下的需求，故事书将能为你完美的呈现，同时，这也正是它所提供的功能：

- 一份动态的文档，告诉朋友们如何开始以及一些约定和规范；
- 展示你的UI组件或者界面，直观的讨论那些可以改进的地方；
- 可执行的交互，让你充分了解组件的功能；
- 可调控的UI，让我们知道哪些改变是值得尝试的；
- 可展示组件逻辑的目录，让你发觉组件内在的结构；
- 可测试的UI，这个功能太赞了，未来会非常有用；

## 故事结构

故事书非常简单，它是由\`故事\`和\`用例\`组成。一个故事书由多个故事组成，每个故事由多个用例组成。可以参考这份故事书左侧的树状图，或者参看这个：

\`\`\`shell
故事1
  - 用例1-1
  - 用例1-2
故事2
  - 用例2-1
故事3
  - 用例3-1
  - 用例3-2
  - 用例3-3
\`\`\`

> **注意**：目前Vue版本的StoryBook暂时不支持嵌套故事。所以\`故事\`下面只允许有\`用例\`。

要想构建出故事书，我们需要在\`src/stories\`目录下添加我们的故事文件，形如\`*.story.js\`。然后我们可以在故事中使用代码来构建用例。 

## 如何构建

这是一个非常令人头疼的问题，你看它这么多功能，表现得那么优秀，当然不是很简单的工程。不过我们已经帮你把前面的路都铺好了，你只需要按照如下步骤即可轻松构建属于你的故事：

### 1. 创建文件

在\`src/stories\`文件夹下，你可以新建形如\`*.story.js\`的文件。当然，为了防止这种文件过多而杂乱，你可以建立文件夹来包裹。我们已经通过动态解析的手段来解析\`src/stories\`目录下所有形如\`*.story.js\`的文件，所有你可以放心的使用。

### 2. 创建故事

假设我们已经创建好了\`example.story.js\`，现在让我们打开它开始编辑故事：

\`\`\`javascript
// example.story.js
import { storiesOf} from '@storybook/vue';
storiesOf('故事名称', module)
\`\`\`

> **注意**：故事的名称不能重复，否则你的用例会被加入到这个故事中去。

### 3. 编写用例

\`\`\`javascript
// example.story.js
storiesOf('故事名称', module)
  // 通过add方法添加用例
  .add('用例名称', () => Component);
\`\`\`

> **注意**：用例的名称不能重复，否则你收到一个错误提示。

### 4. 添加插件

我们可以给整个故事添加插件，也可以给每个用例添加插件。如果插件是给整个故事的，那么用例的同类插件是不会生效的。所以我们在编写时要特别注意。以下是案例：

\`\`\`javascript
import { storiesOf} from '@storybook/vue';
import { withReadme, withDocs }  from 'storybook-readme';
import centered from '@storybook/addon-centered';

storiesOf('故事', module)
  // 为整个故事添加插件（本插件用于居中展示）
  .addDecorator(centered)
  // 为单个用例添加插件（本插件用于渲染文档）
  .add('welcome', withReadme(md, () => Component))
  .add('guide', () => Component);
\`\`\`

这份案例的结果是，welcome和guide用例都将居中显示，而只有welcome会有一份markdown文档。

## 其他

你可以通过查看[官方文档](https://storybook.js.org/ "Storybook官网")来学习和获取更多信息。
`;

storiesOf('Welcome', module)
  .addDecorator(centered)
  .addDecorator(withReadme(md))
  .add('welcome', () => Welcome)
  .add('help link', () => ({
    render: h => h(App),
  }));