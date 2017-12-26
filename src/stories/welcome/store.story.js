/* eslint-disable react/react-in-jsx-scope */
import Vue from 'vue';
import Vuex from 'vuex';

import { storiesOf} from '@storybook/vue';
import { action, decorateAction } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs }  from 'storybook-readme';
import { withKnobs, text, boolean, number, color, object, array, select, date, button } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import md from './docs/store.full.README.md';

storiesOf('Welcome/7. store', module)
  .addDecorator(centered)
  .add('introduction', withReadme([md], () => {}))
  .add('vuex actions', withReadme([md], () => ({
    template: '<i-button @click="handler">我被点击了{{ $store.state.count }}次！</i-button>',
    store: new Vuex.Store({
      state: {count: 0},
      mutations: {
        increment (state) {
          state.count++;
          action('vuex state')(state)
        }
      }
    }),
    methods: {
      handler () {
        this.$store.commit('increment')
      }
    }
  })));