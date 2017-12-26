/* eslint-disable react/react-in-jsx-scope */
import Vue from 'vue';
import Vuex from 'vuex';

import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import MyForm from './components/MyForm.vue';
import mdHead from './docs/render0-head.README.md';
import md1 from './docs/render1-function.README.md';
import md2 from './docs/render2-jsx.README.md';
import md3 from './docs/render3-string.README.md';
import md4 from './docs/render4-template.README.md';
import md5 from './docs/render5-vuefile.README..md';


storiesOf('Welcome/1. render', module)
  .addDecorator(centered)
  .add('introduction', withReadme([mdHead, md1, md2, md3, md4, md5], () => {}))
  .add('function render', withReadme([mdHead, md1], () => ({
    render: h => h('Alert', ['function render', h('template', {slot: 'desc'}, '使用render的h函数渲染')])
  })))
  .add('jsx render', withReadme([mdHead, md2], () => ({
    render: h => <i-button>render jsx</i-button>
  })))
  .add('string render', withReadme([mdHead, md3], () => ({
    template: '<i-button>string render</i-button>'
  })))
  .add('template render', withReadme([mdHead, md4], () => ({
    template: `
      <i-button>
        template render
      </i-button>
    `
  })))
  .add('vue file render', withReadme([mdHead, md5], () => ({
    comments: {MyForm},
    render (h) {
      return <MyForm></MyForm>
    }
  })));