<script setup>

import {ref} from "vue";
import axios from "axios";

let addr = "http://localhost:12080/api/login";

const form = ref({
  username: '',
  password: ''
})

const onSubmit = () => {
  axios.post(addr, form.value)
    .then(res => {
      alert(res.data.message);
    })
    .catch(err => {
      console.log(err);
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
        <el-button type="primary" @click="onSubmit">Login</el-button>
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
