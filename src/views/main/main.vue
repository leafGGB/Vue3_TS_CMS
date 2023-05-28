<template>
  <div class="main">
    <el-container class="main-counter">
      <el-aside :width="isFold ? '60px' : '210px'" class="aside">
        <main-menu :is-fold="isFold" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-header @fold-change="handleFoldChange" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue'

const isFold = ref(false)
// 处理 main-header 中折叠的变化
function handleFoldChange(falg: boolean) {
  isFold.value = falg
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;

  .main-counter {
    height: 100%;
    .aside {
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: cyan;
      transition: width 0.3s linear;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
    .el-main {
      background-color: #f0f2f5;
    }
  }
}
</style>
