<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        Header
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          Aside
        </el-aside>
        <el-main class="main">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

.header {
  background-color: #B3C0D1;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>
