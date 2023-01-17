<!--
 * @Author: xiaotao2018
 * @Date: 2022-07-12 10:54:54
 * @LastEditTime: 2023-01-17 10:09:00
-->
<template>
  <div ref="bigDivRef" class="app-container flex-center wh-full bg-gray-100">
    <n-form ref="formRef" :model="formValue" :rules="formRules" class="max-w-xl min-w-sm w-1/2 bg-white p-5">
      <div class="text-center text-6 mb-4 text-black cursor-pointer"  @dblclick="handleDbClick">登<span class="inline-block px-4">&nbsp;</span>录</div>
      <n-form-item label="账号" path="userName">
        <n-input v-model:value="formValue.userName" placeholder="请输入账号" />
      </n-form-item>
      <n-form-item label="密码" path="passWord">
        <n-input v-model:value="formValue.passWord" placeholder="请输入密码" type="password" clearable show-password-on="click" />
      </n-form-item>
      <n-form-item>
        <n-button type="primary" class="w-full" @click="handleValidateClick"> 登录 </n-button>
      </n-form-item>
      <div class="text-center text-gray">可随机输入，通过校验即符合</div>
    </n-form>
  </div>
</template>

<script setup lang="ts" name="login_page">
import { useMainStore } from '@/store'
import { FormInst } from 'naive-ui'
const formRef = ref<FormInst | null>(null)

var formValue = ref({
  userName: '',
  passWord: '',
})

const formRules = ref({
  userName: { required: true, trigger: 'blur', min: 2, message: '请输入账号，最少2个字符' },
  passWord: { required: true, trigger: 'blur', min: 5, message: '请输入密码，最少5个字符' },
})

const router = useRouter()
const mainStore = useMainStore()

function handleValidateClick() {
  formRef.value?.validate((errors) => {
    if (!errors) {
      window.$message?.success('登录成功')
      mainStore.insertPost(formValue.value.userName)
      router.push('/')
    } else {
      window.$message?.error('账号密码错误，你不是真的豆豆')
    }
  })
}
const bigDivRef = ref()
var mydata:unknown
mydata = {}
function handleDbClick() {
  formValue.value.userName = 'xiaotao'
  formValue.value.passWord = 'doudou'
  console.dir(bigDivRef)
  bigDivRef.value.style['font-size'] = '20px'
  handleValidateClick()
}
onMounted(() => {})
</script>
