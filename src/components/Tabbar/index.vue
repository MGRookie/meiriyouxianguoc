<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2022-03-15 17:17:46
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-03-15 17:55:02
 * @FilePath: /demo-c-meiriyouxianguoc/src/components/Tabbar/index.vue
-->
<template>
  <van-tabbar route v-model="active" class="tabbar-container" placeholder>
    <van-tabbar-item icon="home-o" to="/">home</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/home/shopping">shop</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/home/classify"
      >classify</van-tabbar-item
    >
    <van-tabbar-item icon="contact">my</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DemoCMeiriyouxianguocIndex",
  setup() {
    const active = ref(0);
    return {
      active,
    };
  },
};
</script>

<style lang="less" scoped>
</style>