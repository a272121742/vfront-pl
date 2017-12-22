<template>
  <div class="main">
    <p style="text-align:center"><img src="../../../logo.png" /></p>
    <h1>欢迎来到Vue版的Storybook</h1>
    <p>
      它能快速展示你的UI原型以及交互，并能很直接的了解你发布的组件的结构。
    </p>
    <p>
      Storybook的结构非常简单，它是由故事和用例组成，一个故事书由多个故事组成，每个故事由多个用例组成。
      要想构建出故事书，我们需要在
      <code class="code">src/stories</code>
      目录下添加我们的故事，形如
      <code class="code">*.story.js</code>
      的文件。然后我们可以在故事中使用代码来构建用例。
      <br />
      故事用例可以包含一个甚至多个你想展示的UI组件，还可以包括案例、文档以及任何你希望添加的静态或动态界面。
      <br />
      (越简单的用例甚至还可以被用来测试，这是我们后期希望加入的功能)
    </p>
    <p>
      你可以通过本项目来查看
      <code class="code">故事</code>
    </p>
    <p>
      或者你也可以
      <a
        class="link"
        href="https://storybook.js.org/basics/writing-stories"
        target="_blank"
      >
        点击这里
      </a>
      查看更多文档来学习如何编写Storybook。
    </p>
    <p class="note">
      <b>注意：</b>
      我们已经构建好所有的插件以及配置，请查阅下面的文档来使用。
    </p>
  </div>
</template>

<style>
  .main {
    margin: 15px;
    max-width: 600;
    font-size: 16px;
    line-height: 1.4;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  .logo {
    width: 200;
  }

  .link {
    color: #1474f3;
    text-decoration: none;
    border-bottom: 1px solid #1474f3;
    padding-bottom: 2px;
  }

  .code {
    font-size: 15;
    font-weight: 600;
    padding: 2px 5px;
    border: 1px solid #eae9e9;
    border-radius: 4px;
    background-color: #f3f2f2;
    color: #3a3a3a;
  }

  .codeBlock {
    background-color: #f3f2f2;
    padding: 1px 10px;
    margin: 10px 0;
  }

  .note {
    opacity: 0.5;
  }
</style>
