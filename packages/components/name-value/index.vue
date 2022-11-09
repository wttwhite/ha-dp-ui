<template>
  <div class="name-value">
    <div>{{ item.name }}</div>
    <div mt15>{{ item.value }}</div>
  </div>
</template>

<script>
export default {
  name: "hs-name-value",
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          name: "老旧住宅",
          value: 0,
        };
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
