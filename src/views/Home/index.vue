<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2022-03-15 14:37:17
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-03-15 17:57:51
 * @FilePath: /demo-c-meiriyouxianguoc/src/views/Home/index.vue
-->
<template>
  <div class="home-container">
    <router-view class="wrap"></router-view>
    <Tarbar />
  </div>
</template>

<script>
import Tarbar from "@/components/Tabbar";
export default {
  name: "Home",
  components: {
    Tarbar,
  },
  setup() {
    return {};
  },
};
</script>

<style lang='less' scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .wrap {
    flex: 1;
    background: rgba(0, 0, 0, 0.5);
    overflow: auto;
  }
  .tarbar-container {
    flex: none;
  }
  p {
    font-size: 20px;
  }
}
</style>
