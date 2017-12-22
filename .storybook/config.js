import { configure, addDecorator } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import centered from '@storybook/addon-centered';

import Vue from 'vue';
import Vuex from 'vuex';
import 'iview/dist/styles/iview.css';
import iView from 'iview';


Vue.use(Vuex);
Vue.use(iView);

// 设置全部居中
// addDecorator(centered);
// 设置 全局信息展示
setOptions({
  name: 'vfront storybook',
  url: '#',
  // 启用全屏
  goFullScreen: false,
  // 显示左边面板
  showLeftPanel: true,
  // 显示下方面板
  showDownPanel: true,
  // 显示悬浮的搜索框
  showSearchBox: false,
  // 下方面板居右显示
  downPanelInRight: true,
  // 故事排序
  sortStoriesByKind: true,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null,
  // 启用动画
  sidebarAnimations: true,
  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: undefined, // The order of addons in the "Addons Panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});


const req = require.context('../src/stories', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)