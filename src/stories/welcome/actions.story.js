/* eslint-disable react/react-in-jsx-scope */
import Vue from 'vue';
import Vuex from 'vuex';

import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import mdHead from './docs/actions0-head.README.md';
import mdIntr from './docs/actions0-introduction.README.md';
import md1 from './docs/actions1-normal.README.md';
import md2 from './docs/actions2-data.README.md';
import md3 from './docs/actions3-split.README.md';

// 生成一种行为，用于记录
const log = action('log');
// 行为装饰器，只拦截第一个参数
const firstArgAction= decorateAction([ args => {
  return args.slice(0, 1);
}]);
// 用行为装饰器装饰一个新的记录仪
const logFirstArg = firstArgAction('logFirst');
storiesOf('Welcome/4. action', module)
  .addDecorator(centered)
  .add('introduction', withReadme([mdHead, mdIntr, md1, md2, md3], () => {}))
  .add('action emit only', withReadme([mdHead, md1], () => ({
    template: '<i-button @click="handler">点我</i-button>',
    methods: {
      handler: log
    }
  })))
  .add('action emit data', withReadme([mdHead, md2], () => ({
    template: '<i-button @click="handler">点我</i-button>',
    methods: {
      handler: e => {
        e.preventDefault();
        log('参数1', '参数2', '参数3');
      }
    }
  })))
  .add('action emit data split', withReadme([mdHead, md3], () => {
    return {
      template: '<i-button @click="handler">点我</i-button>',
      methods: {
        handler: e => {
          e.preventDefault();
          logFirstArg('参数1', '参数2', '参数3');
        }
      }
    };
  }));