<script setup>

import {ref} from "vue";
import {postRequest} from "@/utils/apis.js";
import {ElNotification} from 'element-plus'
import router from "@/router";
import sha256 from 'crypto-js/sha256';

const form = ref({
  username: '',
  password: ''
})

let buttonDisabled = ref(false)

const onSubmit = () => {
  const sha = sha256(form.value.password);
  let user = {
    username: form.value.username,
    password: sha.toString()
  }
  postRequest("/login", user).then(response => {
    buttonDisabled.value = true
    if (response !== undefined && response.status === "success") {
      ElNotification({
        title: '登录成功',
        message: '欢迎回来',
        type: 'success'
      })
      router.push("/home/users")
    }
    setTimeout(() => {
      buttonDisabled.value = false
    }, 3000)
  })
}

const onCancel = () => {
  form.value.username = ''
  form.value.password = ''
}

</script>

<template>
  <div class="login">
    <el-form :model="form" label-width="60px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" show-password/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :disabled="buttonDisabled" plain>Login</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.login {
  width: 350px;
  margin: 10% auto;
}
</style>
