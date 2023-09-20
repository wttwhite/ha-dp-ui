<template functional>
  <div class="detail-box" v-loading="loading">
    <slot name="page-breadcrumb"></slot>

    <div class="detail-box-card">
      <slot></slot>
    </div>

    <div class="page-footer" v-if="props.footerBtn">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hspro-layout-detail',
  props: {
    footerBtn: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-box {
  height: 100%;
  width: 100%;
  min-width: 840px;
  display: flex;
  flex-direction: column;
  .detail-box-card {
    flex: 1;
    border-radius: 8px;
    padding: 15px;
    overflow: auto;
  }
  .page-footer {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  ::v-deep .el-form {
    .el-form-item {
      width: calc(100% - 10px);
    }
    .el-input__inner,
    .el-cascader,
    .el-select {
      width: 100%;
      max-width: 240px;
    }
    .el-input-number--small {
      width: auto;
    }
    .el-textarea__inner {
      // width: 360px;
    }
    .el-date-editor--datetimerange {
      width: 340px;
    }
  }
}
</style>
