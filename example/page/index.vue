<template>
  <div class="page">
    <div class="box">
      <hs-bar-rate />
    </div>
    <div class="box">
      <hs-name-value />
    </div>
  </div>
</template>
<script>
export default {
  name: "demo-page",
};
</script>
<style lang="scss" scoped>
.page {
  height: 100%;
  width: 100%;
  background: #02111c;
  display: flex;
  .box {
    width: 25%;
    height: 200px;
    border: 1px solid blue;
  }
}
</style>
