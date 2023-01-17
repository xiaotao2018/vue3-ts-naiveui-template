<!--
 * @Author: xiaotao2018
 * @Date: 2022-07-06 14:30:13
 * @LastEditTime: 2023-01-17 09:34:02

<script lang="tsx">
// import { defineComponent } from 'vue'

// import TailwindDemo from './components/TailwindDemo.vue'

// function Tailwind() {
//   return () => (
//     <>
//       <div class='w-full bg-violet-400'>test</div>

//       <TailwindDemo />
//       <TailwindDemo />
//     </>
//   )
// }

// export default defineComponent(Tailwind)
// </script>


<template>
  <div class="app-container">
    <div class='w-full bg-violet-400'>test111</div>
    <TailwindDemo />
    <TailwindDemo />
  </div>
</template>

<script setup lang="ts" name="views_name">
  // import TailwindDemo from './components/TailwindDemo.vue'

  const TailwindDemo = defineAsyncComponent(() => import('./components/TailwindDemo.vue'))

</script>

-->

<script lang="tsx">
import { defineComponent } from 'vue'

import TailwindDemo from './components/TailwindDemo.vue'

function Tailwind() {
  return () => (
    <>
      <TailwindDemo />
      <TailwindDemo />
    </>
  )
}

export default defineComponent(Tailwind)
</script>