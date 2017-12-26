import Vue from 'vue';
import Vuex from 'vuex';

import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import mdHead from './docs/links0-head.README.md';
import mdIntr from './docs/links0-introduction.README.md';
import md1 from './docs/links1-usage.README.md';
import md2 from './docs/links2-first.README.md';

storiesOf('Welcome/5. link', module)
  .addDecorator(centered)
  .add('introduction', withReadme([mdHead, mdIntr, md1, md2], () => {}))
  .add('linkto story', withReadme([mdHead, md1], () => ({
    render: (h) => <i-button onClick={linkTo('Welcome', 'welcome')}>前往Welcome页</i-button>
  })))
  .add('linkto first', withReadme([mdHead, md2], () => ({
    render: (h) => <i-button onClick={linkTo('Welcome')}>前往App页</i-button>
  })));