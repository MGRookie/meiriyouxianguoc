<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2022-03-14 17:32:05
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-03-15 15:37:50
 * @FilePath: /demo-c-meiriyouxianguoc/src/App.vue
-->
<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<style>
#app {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
