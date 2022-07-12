<!--
 * @Author: xiaotao2018
 * @Date: 2022-07-06 11:42:36
 * @LastEditTime: 2022-07-08 11:08:17
-->
<template>
  <naive-provider>
    <router-view></router-view>
  </naive-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

