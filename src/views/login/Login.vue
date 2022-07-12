<!--
 * @Author: xiaotao2018
 * @Date: 2022-07-06 11:42:36
 * @LastEditTime: 2022-07-12 10:54:59
-->
<template>
  <div class="test">用户名:{{ mainStore.name }}<br>长度:{{ mainStore.nameLength }}</div>
  <hr>
  <button @click="updateName">修改store中的name</button>
  <hr>

  <n-button type="tertiary" :tertiary="true" :round="true" :disabled="true" @click="openPage">naive-ui跳转新页面</n-button>

  <icon-custom-logo class="text-36" />

  <n-icon size="40">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
      <path d="M22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53l4.59-3.85zM12.5 8H11v6l4.75 2.85l.75-1.23l-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z" fill="currentColor" />
    </svg>
  </n-icon>

  <!-- <n-icon mr20 size="18" style="cursor: pointer">
    <icon-mdi:github />
  </n-icon> -->
</template>

<script setup lang="ts">
// import { useMessage } from 'naive-ui'
import { getPubPageBasicData } from '@/api/test'
import { useMainStore } from '@/store'
// import { NButton } from 'naive-ui'
const router = useRouter()
const mainStore = useMainStore()
// const nMessage = useMessage()

const updateName = () => {
  
  // mainStore.$patch({
  //   name: '名称被修改了,nameLength也随之改变了',
  // })
  mainStore.insertPost('xiaotao')
  window.$message?.success('修改成功')
  console.log(mainStore.nameLength)
}

const openPage = () => {
  router.push('/unocss')
}

const a = ref(666)


onBeforeMount(() => {
  console.log(mainStore)
  console.log('---onBeforeMount---')
  getPubPageBasicData('7105991819599544333').then((res) => {
    console.log('res',res)
  }).catch((err) => {
    console.log('err',err)
  })
})
onMounted(() => {
  console.log('---onMounted---')
})
onBeforeUpdate(() => {
  console.log('---onBeforeUpdate---')
})
onUpdated(() => {
  console.log('---onUpdated---')
})
onBeforeUnmount(() => {
  console.log('---onBeforeUnmount---')
})
onUnmounted(() => {
  console.log('---onUnmounted---')
})
</script>

<style lang="scss" scoped>
.test {
  color: $test-color;
}
</style>
