<!--
 * @Author: xiaotao2018
 * @Date: 2022-11-24 17:23:58
 * @LastEditTime: 2023-01-17 09:27:33
-->
<template>
  <div class="app-container h-100vh flex-center">
    <n-result status="404" title="404 页面走丢了" description="或资源不存在">
      <template #footer>
        <router-link to="/console"><n-button>返回首页</n-button></router-link>
      </template>
    </n-result>
  </div>
</template>