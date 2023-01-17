<!--
 * @Author: xiaotao2018
 * @Date: 2022-08-18 16:54:24
 * @LastEditTime: 2023-01-17 11:23:24
-->
<template>
  <div class="app-layouts">

    <n-config-provider :theme="theme">
        <n-global-style />
        <div class="app-hearder">
          <router-link to="/login"><img class="app-logo" src="@\assets\logo.png"></router-link>
          <h1>VUE 3</h1>
          <div class="flex-1 flex items-center justify-end">
            <!-- <n-button @click="changeMyTheme('dark')">深色</n-button>
            <n-button @click="changeMyTheme('light')">浅色</n-button> -->

            <n-switch v-model:value="themeGlobal" :round="false" checked-value="light" @update:value="changeMyTheme">
              <template #checked>浅色主题</template>
              <template #unchecked>深色主题</template>
            </n-switch>
  
            <span class="ml-4">{{mainStore.name}}，{{helloText}}好</span>
          </div>
        </div>


        <n-layout has-sider position="absolute" class="absolute-n-layout">
          <n-layout-sider
            bordered
            collapse-mode="width"
            :collapsed-width="0"
            :width="240"
            :collapsed="collapsed"
            show-trigger
            @collapse="collapsed = true"
            @expand="collapsed = false"
          >
            <n-menu
              v-model:value="activeKey2"
              :collapsed="collapsed"
              :collapsed-width="0"
              :collapsed-icon-size="22"
              :options="menuOptions"
              :on-update:value="updateMenuKey"
            />
          </n-layout-sider>

          <n-layout>
            <router-view v-slot="{ Component }">
              <transition name="fade-transform" mode="out-in">
                <div><component :is="Component" :key="activeKey2" /></div>
              </transition>
            </router-view>
          </n-layout>

        </n-layout>

    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store'
import { NIcon } from 'naive-ui'
import { RouterLink, useRouter,RouteLocationRaw } from 'vue-router'
import { darkTheme, useOsTheme } from 'naive-ui'
// function renderIcon (icon: Component) {
//   return () => h(NIcon, null, { default: () => h(icon) })
// }

// function renderIcon(icon, props = { size: 12 }) {
//   return () => h(NIcon, props, { default: () => h(Icon, { icon }) })
// }
const router = useRouter()
const mainStore = useMainStore()

interface ChildObj {
  label: any,
  key: any,
  children: any
}

var orRouter = router.getRoutes()
var newRouter = []
for(var item of orRouter) {
  if(!item.hidden && item.meta && item.meta.title && !item.meta.isChild) {
    const tempObj:ChildObj = { label: item.meta.title, key: item.path, children: '' }
    if(item.children && item.children.length > 1) {
      tempObj.children = []
      for(var child of item.children) {
        tempObj.children.push({ label: child.meta?.title, key: item.path + '/' + child.path })
      }
    }
    newRouter.push(tempObj)
  }
}
console.log(orRouter, newRouter)

var collapsed = ref<Boolean>(false)

const myHours = new Date().getHours()
var helloText = ref<String>(myHours === 12 ? '中午' : myHours < 12 && myHours > 5 ? '早上' : myHours < 17 && myHours > 12 ? '下午' : '晚上')

var theme = ref<any>(null)
var themeGlobal = ref<String>('light')
const osThemeRef = useOsTheme()
console.log('osThemeRef', osThemeRef, '当前操作系统使用：' + osThemeRef.value)

const activeKey2 = computed(() => { 
  console.log('activeKey', router.currentRoute.value.fullPath)
  return router.currentRoute.value.fullPath
})

const menuOptions: Array<Object> = newRouter
// [{
//     label: '且听风吟1',
//     key: 'hear-the-wind-sing',
//   },
//   {
//     label: '首页',
//     key: 'console',
//   },
//   {
//     label: '寻羊冒险记',
//     key: 'a-wild-sheep-chase',
//     disabled: true,
//   },
//   {
//     label: '舞，舞，舞',
//     key: 'dance-dance-dance',
//     children: [{
//         type: 'group',
//         label: '人物',
//         key: 'people',
//         children: [{
//             label: '叙事者',
//             key: 'narrator',
//           },
//           {
//             label: '羊男',
//             key: 'sheep-man',
//           }]
//       },
//       {
//         label: '饮品',
//         key: 'beverage',
//         children: [{
//             label: '威士忌',
//             key: 'whisky'
//           }]
//       },
//       {
//         label: '食物',
//         key: 'food',
//         children: [{
//             label: '三明治',
//             key: 'sandwich'
//           }]
//       },
//       {
//         label: '过去增多，未来减少',
//         key: 'the-past-increases-the-future-recedes'
//       }]
//   }]

function updateMenuKey (key: String, item: {key: RouteLocationRaw}) { // 点击菜单
  const nowRouter = router.currentRoute.value.fullPath
  console.log('updateMenuKey', key , item, router, nowRouter)
  if(nowRouter === key) {
    console.log('nowRouter === key', key, nowRouter, item)
    router.push('/redirect' + item.key)
  }else{
    router.push(item.key)
  }
}
function changeMyTheme (themeBoolean: boolean) { // 更改主题色
  console.log('changeMyTheme', themeBoolean)
  const themeStr = themeBoolean ? 'light' : 'dark'
  themeGlobal.value = themeStr + ''
  if(themeStr === 'dark') {
    theme.value = darkTheme
    document.documentElement.classList.add('dark')
  }else if(themeStr === 'light') {
    theme.value = null
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('vue3TestTheme',themeStr)
}

  onBeforeMount(() => {
    console.log(mainStore)
    console.log('---onBeforeMount---')
  })

  onMounted(() => {
    const themeLocal = localStorage.getItem('vue3TestTheme')
    if(themeLocal && themeLocal === 'dark') {
      changeMyTheme(false) 
    }
  })

</script>

<style lang='scss'>
$headerHeight: 45px;
.app-layouts{
  padding-top: $headerHeight; // calc(#{$headerHeight} + 10px);
  .n-layout-sider{
    height: calc(100vh - #{$headerHeight});
  }
  .absolute-n-layout{
    top: $headerHeight;
    .n-layout-scroll-container{
      height: calc(100vh - #{$headerHeight});
    }
  }
  .app-hearder{
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 100;
    background: #fff;
    height: $headerHeight;
    border-bottom: 1px solid #f2f2f2;
    padding: 0 20px;
    display: flex;
    align-items: center;
    .app-logo{
      height: 36px;
      width: 36px;
      margin-right: 20px;
    }
  }
}
html.dark{
  color: #fff;
  .app-layouts{
    .app-hearder{
      background: #18181c;
      border-bottom: 1px solid #101014;
    }
  }
}
</style>