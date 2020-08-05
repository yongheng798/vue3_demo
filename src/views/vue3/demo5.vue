<!--
 * @Descripttion: 陈品富写的demo描述
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-08-05 10:25:51
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-05 10:55:51
-->
<template>
  <h1>一个异步小组件</h1>
</template>

<script>
function sleep(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}
export default {
  name: 'AsyncComponent',
  props: {
    timeout: {
      type: Number,
      required: true
    }
  },
  async setup(props) {
    await sleep(props.timeout)
  }
}
</script>
