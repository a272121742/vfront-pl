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

import md from './docs/welcome.full.README.md';

storiesOf('Welcome/0. guide', module)
  .addDecorator(centered)
  .addDecorator(withReadme(md))
  .add('welcome', () => Welcome)
  .add('help link', () => ({
    render: h => h(App),
  }));