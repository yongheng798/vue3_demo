<!--
 * @Descripttion: 陈品富写的demo描述
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-08-05 09:25:33
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-05 09:51:21
-->
<template>
  <div class="container-wrap-box">
    <h3>Vue3.0体验版</h3>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
      <h3>hello world vue3.0</h3>
      <div>{{ count2 }} {{ object.foo }}</div>
    </button>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })
    const count2 = ref(0)
    const object = reactive({ foo: 'bar' })
    function increment() {
      state.count++
    }
    // 暴露给模板
    return {
      state,
      increment,
      count2,
      object
    }
  }
}
</script>
