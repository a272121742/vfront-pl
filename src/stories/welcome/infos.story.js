/* eslint-disable react/react-in-jsx-scope */
import Vue from 'vue';
import Vuex from 'vuex';

import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import VueInfoAddon from 'storybook-addon-vue-info';

import md from './docs/infos.README.md';

storiesOf('Welcome/6. info', module)
  .addDecorator(VueInfoAddon)
  .add('component info', withReadme([md], () => ({
    template: '<i-button>component info</i-button>'
  })));