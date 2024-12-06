<template>
  <div class="login-container">
    <div class="login-left">
      <img :src="loginMain">
    </div>
    <div class="login-bg">
      <img :src="loginBg">
    </div>
    <div class="login-right">
      <div class="login-right-warp">
        <div class="login-right-warp-title">admin 欢迎您！</div>
        <div class="login-right-warp-content">
          <el-tabs v-model="state.activeName">
            <el-tab-pane label="用户名登录" name="account">
              <el-form>
                <el-form-item>
                  <el-input v-model="logInfo.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="logInfo.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button class="login-btn" type="primary" @click="signIn">登录</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="手机号登录" name="second">手机号登录</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

import loginMain from '@/assets/login-main.svg';
import loginBg from '@/assets/login-bg.svg';

/* 定义变量 */
const route = useRoute();
const router = useRouter();
const state = reactive({
	activeName: 'account',
	isScan: false,
});
const logInfo = reactive({
	username: 'admin',
	password: '123456',
})

/* 方法 */
//登录
const signIn = () => {
  if(!logInfo.username || !logInfo.password){
    ElMessage.error('请输入用户名和密码')
    return
  }
  //验证用户名和密码
  if(logInfo.username === 'admin' && logInfo.password === '123456'){
    localStorage.setItem('token', 'admin')
    router.push({path: '/home'})
  }else{
    ElMessage.error('用户名或密码错误')
  }
};

</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  height: 100vh;
  background-color: #fff;
  position: relative;
  .login-left {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D3EFFF;
    img{
      width: 100%;
      height: 50%;
    }
  }
  .login-bg {
    width: 100px;
    img{
      width: 100%;
			height: 100vh;
			animation: error-num 0.6s ease;
    }
  }
  .login-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    &-warp {
      width: 400px;
      height: 400px;
      border: 1px solid #79BBFF;
      &-title {
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 24px;
        color: #79BBFF;
      }
      &-content {
        height: 400px;
        padding: 0 50px;
        .el-tabs__item {
          font-size: 18px;
        }
        .login-btn{
          width: 100%;
        }
      }
    }
  }
}
</style>
