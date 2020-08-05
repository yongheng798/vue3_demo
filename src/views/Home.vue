<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <demo1 />
    <demo2 />
    <ul>
      <demo3 :data="postData" />
    </ul>
    <demo4 />
    <div id="foot-container" />
    <!-- 异步组件 -->
    <div class="async-container-wrap">
      <h1>Supense</h1>
      <Suspense>
        <template #default>
          <demo5 :timeout="3000" />
        </template>
        <template #fallback>
          <h1>加载中</h1>
        </template>
      </Suspense>
    </div>
    <!-- <mvcTodo /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import demo1 from '@/views/vue3/demo1'
import demo2 from '@/views/vue3/demo2'
import demo3 from '@/views/vue3/demo3'
import demo4 from '@/views/vue3/demo4'
// 异步组件
import demo5 from '@/views/vue3/demo5'
// todomvc
// import mvcTodo from '@/views/mvc-todo/mvc-todo'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    demo1,
    demo2,
    demo3,
    demo4,
    demo5
    // mvcTodo
  },
  setup() {
    const postData = [5, 3, 1, 6, 9, 4, 2, 8]
    return {
      postData
    }
  }
}
</script>
