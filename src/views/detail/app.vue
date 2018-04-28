<template>
    <div class="content">
        <h1>介绍</h1>
        <h2 id="Vue-js-是什么"><a href="#Vue-js-是什么" class="headerlink" title="Vue.js 是什么" data-scroll="">Vue.js 是什么</a></h2>
        <p>Vue (读音 /vjuː/，类似于 <strong>view</strong>) 是一套用于构建用户界面的<strong>渐进式框架</strong>。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与<a href="single-file-components.html">现代化的工具链</a>以及各种<a href="https://github.com/vuejs/awesome-vue#libraries--plugins" target="_blank" rel="noopener">支持类库</a>结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
        <p>如果你想在深入学习 Vue 之前对它有更多了解，我们<a id="modal-player" href="#">制作了一个视频</a>，带您了解其核心概念和一个示例工程。</p>
        <p>如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看<a href="comparison.html">对比其它框架</a>。</p>
    </div>
</template>

<script>
  import Vue from 'vue'

  let component = {
    data: () => ({}),
    methods: {},
  }

  export default component

</script>

<style lang="less" type="text/less">

    @import '~common/common.less';

    .content {
        position: relative;
        padding: 2.2em 0 2.2em 50px;
        max-width: 600px;
        margin: 0 auto;
        a {
            color: #42b983;
            font-weight: 600;
        }
        h1 {
            margin: 0 0 1em;
        }
        h2 {
            margin: 45px 0 0.8em;
            padding-bottom: 0.7em;
            border-bottom: 1px solid #ddd;
        }
        h2,
        h3 {
            pointer-events: none;
            &:before {
                content: "";
                display: block;
                margin-top: -91px;
                height: 91px;
                visibility: hidden;
            }
            a,
            button {
                pointer-events: auto;
                color: #2c3e50;
            }
        }
    }
</style>

