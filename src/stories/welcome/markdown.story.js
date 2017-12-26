/* eslint-disable react/react-in-jsx-scope */
import Vue from 'vue';
import Vuex from 'vuex';

import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import mdHead from './docs/markdown0-head.README.md';
import mdIntr from './docs/markdown0-introduction.README.md';
import md1 from './docs/markdown1-usage.README.md';
import md2 from './docs/markdown1-story.README.md';

storiesOf('Welcome/2. doc', module)
  .add('introduction', withReadme([mdHead, mdIntr, md1, md2], () => {}))
  .add('usage markdown', withReadme([mdHead, md1], () => ({
    render: (h) => <i-button>按钮</i-button>
  })))
  .add('story markdown', withReadme([mdHead, md2], () => ({
    render: (h) => <i-button>按钮</i-button>
  })));