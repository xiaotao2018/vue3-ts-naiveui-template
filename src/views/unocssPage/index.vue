<!--
 * @Author: xiaotao2018
 * @Date: 2022-07-06 14:30:13
 * @LastEditTime: 2022-07-06 17:41:11
-->
<script lang="tsx">
import { defineComponent } from 'vue'

import TailwindDemo from './components/TailwindDemo.vue'

function Tailwind() {
  return () => (
    <>
      <div class='w-full bg-violet-400'>test</div>

      <TailwindDemo />
      <TailwindDemo />
    </>
  )
}

export default defineComponent(Tailwind)
</script>
