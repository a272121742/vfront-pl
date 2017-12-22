import Vue from 'vue';
import Vuex from 'vuex';

import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

// 新建一个笔记内容
const note = `
  这是一个用变量生成的普通文本笔记！！！
  使用 const variableNote = withNotes(noteContext) 创建一个笔记函数变量。
  通过以下方式可以反复使用变量 variableNote :
  <pre>
  storiesOf(\'笔记\', module)
    .add(\'note use variable\', textNote(() => ({
      render: h => &lt;span&gt;看控制台的笔记&lt;/span&gt;
    })));
  </pre>
  缺点：
  1. 无法格式化、高亮代码
  2. 编写起来麻烦<br/>
  所以我们推荐使用Markdown来编写笔记内容，后期我们会移除这个插件。
`;
// 用变量将其封装成构造器
const variableNote = withNotes(note);
storiesOf('笔记', module)
  .addDecorator(centered)
  .add('note text', withNotes({text: '文本笔记'})(() => ({
    render: h => <span>看控制台的笔记</span>
  })))
  .add('note html', variableNote(() => ({
    render: h => <span>看控制台的笔记</span>
  })));