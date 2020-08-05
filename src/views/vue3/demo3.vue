<!--
 * @Descripttion: 陈品富写的demo描述
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-08-05 10:31:20
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-05 10:36:38
-->
<template>
  <div class="container-wrap">
    <quick v-if="left.length" :data="left" />
    <li>{{ flag }}</li>
    <quick v-if="right.length" :data="right" />
  </div>
</template>

<script>
export default {
  name: 'Quick',
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  setup(props) {
    const flag = props.data[0]
    const left = []
    const right = []
    props.data.slice(1).forEach(v => {
      v > flag ? right.push(v) : left.push(v)
    })
    return { left, right, flag }
  }
}
</script>
