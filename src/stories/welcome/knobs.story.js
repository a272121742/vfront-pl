import Vue from 'vue';
import Vuex from 'vuex';

import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import mdHead from './docs/knobs0-head.README.md';
import mdIntr from './docs/knobs0-introduction.README.md';
import md1 from './docs/knobs1-text.README.md';
import md2 from './docs/knobs2-boolean.README.md';
import md3 from './docs/knobs3-select.README.md';
import md4 from './docs/knobs4-number.README.md';
import md5 from './docs/knobs5-color.README.md';
import md6 from './docs/knobs6-object.README.md';
import md7 from './docs/knobs7-array.README.md';
import md8 from './docs/knobs8-date.README.md';
import md9 from './docs/knobs9-array.README.md';

// 旋钮不要在全局申明，否则所有的故事都会有旋钮
storiesOf('Welcome/3. knob', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('introduction', withReadme([mdHead, mdIntr, md1, md2, md3, md4, md5, md6, md7, md8, md9], () => {}))
  .add('knob text', withReadme([mdHead, md1], () => ({
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
  })))
  .add('knob boolean', withReadme([mdHead, md2], () => ({
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
  })))
  .add('knob select', withReadme([mdHead, md3], () => ({
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
  })))
  .add('knob number', withReadme([mdHead, md4], () => ({
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
  })))
  .add('knob color', withReadme([mdHead, md5], () => ({
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
  })))
  .add('knob object', withReadme([mdHead, md6], () => ({
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
  })))
  .add('knob array', withReadme([mdHead, md7], () => ({
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
  })))
  .add('knob date', withReadme([mdHead, md8], () => ({
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
  })))
  .add('knob button', withReadme([mdHead, md9], () => ({
    render (h) {
      const btn = button('按钮', () => {
        console.log('执行其他函数，可用于改变其他旋钮的值，或提交ajax请求进行交互');
      });
      return (
        <i-button>按钮旋钮</i-button>
      )
    }
  })));

