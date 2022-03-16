<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2022-03-15 18:06:02
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-03-15 22:53:24
 * @FilePath: /demo-c-meiriyouxianguoc/src/components/Search/index.vue
-->

<template>
  <van-search v-model="value" shape="round" @update:modelValue="onSearch" />
</template>

<script>
import { ref } from "vue";
export default {
  name: "Search",
  emits: ["getSearch"],
  setup(props, { emit }) {
    console.log(props);
    const value = ref("");
    const onSearch = (value) => {
      emit("getSearch", value);
    };
    return {
      value,
      onSearch,
    };
  },
};
</script>

<style lang="less" scoped>
</style>