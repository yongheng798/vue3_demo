<!--
 * @Descripttion: 陈品富写的demo描述
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-08-05 10:06:02
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-05 10:26:12
-->
<template>
  <div class="container-wrap">
    <h1>{{ state.count }} * 2={{ double }}</h1>
    <h2>{{ num }}</h2>
    <button @click="add">累加</button>
  </div>
</template>
<script>
import { reactive, computed, ref, onMounted } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 1
    })
    const num = ref(2)

    function add() {
      state.count++
      num.value += 10
    }
    const double = computed(() => state.count * 2)

    onMounted(() => {
      console.log('mouted')
    })

    return {
      state,
      add,
      double,
      num
    }
  }
}
</script>
