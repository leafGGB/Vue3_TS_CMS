<template>
  <div class="pane-phone">
    <el-form label-width="65px" size="large" :rules="accountRules">
      <el-form-item label="手机号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="verify-code">
          <el-input v-model="account.password" />
          <el-button class="get-btn" type="primary" size="large"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { FormRules, ElForm } from 'element-plus'
import type { IAccount } from '@/types/index'
// 1. 定义account数据

const account = reactive<IAccount>({
  name: '',
  password: ''
})

const accountRules: FormRules = {
  name: [
    {
      required: true,
      message: '必须输入手机号',
      trigger: 'blur'
    },
    {
      min: 11,
      max: 11,
      message: '必须由11位数字组成',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '必须输入验证码',
      trigger: 'blur'
    },
    {
      min: 4,
      max: 4,
      message: '必须由4位以上数字或字母组成',
      trigger: 'blur'
    }
  ]
}
</script>

<style lang="less" scoped>
.verify-code {
  display: flex;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
