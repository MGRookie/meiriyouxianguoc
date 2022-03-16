<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2022-03-15 16:16:49
 * @LastEditors: gaoluo
 * @LastEditTime: 2022-03-15 23:42:41
 * @FilePath: /demo-c-meiriyouxianguoc/src/views/Home/Classify.vue
-->
<template>
  <div class="classify-container">
    <Search @getSearch="getSearch" />
    <div>{{ search }}</div>
  </div>
</template>

<script>
import Search from "components/Search";
import { ref } from "vue";
export default {
  name: "Classify",
  components: {
    Search,
  },
  setup() {
    const search = ref("");
    const getSearch = (e) => {
      console.log(e);
      search.value = e;
    };
    return {
      search,
      getSearch,
    };
  },
};
</script>

<style lang="less" scoped>
</style>