<template functional>
  <div class="hs-page-list-box">
    <slot name="page-breadcrumb"></slot>
    <div :class="['hs-page-all', !props.hasSidebar && 'hs-all-no-sidebar']">
      <div v-if="props.hasSidebar" class="hs-has-sidebar">
        <slot name="sidebar"></slot>
      </div>
      <section
        :class="[
          'hs-page-container',
          props.hasSidebar && 'hs-container-has-sidebar',
        ]"
      >
        <div class="hs-page-search" v-if="!props.noSearch">
          <slot name="search"></slot>
        </div>
        <div
          v-if="!props.noBtnLine"
          :class="['hs-btn-box', props.noSearch && 'hs-btn-box-no-search']"
        >
          <slot name="btnBox"></slot>
        </div>

        <div
          class="hs-page-main"
          :style="{ 'padding-top': props.noBtnLine ? '0' : '16px' }"
        >
          <slot></slot>
        </div>
      </section>
    </div>
    <div class="hs-page-footer" v-if="!props.noPagination">
      <slot name="footer"></slot>
    </div>
    <slot name="other"></slot>
  </div>
</template>
<script>
export default {
  name: "hspro-layout",
  props: {
    // 默认有搜索
    noSearch: {
      type: Boolean,
      default: false,
    },
    noBtnLine: {
      type: Boolean,
      default: false,
    },
    noPagination: {
      type: Boolean,
      default: false,
    },
    // 默认没有侧边栏，右侧边栏几率比没有的小
    hasSidebar: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin border {
  box-shadow: 0px 3px 5px rgba(23, 22, 22, 0.2);
  border-radius: 8px;
}
.hs-page-list-box {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #f4f8fd;
  flex-direction: column;
}
.hs-page-all {
  display: flex;
  flex: 1;
  height: 0;
  margin: 15px;
  &.hs-all-no-sidebar {
    @include border;
  }
}
.hs-page-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 0;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  .hs-page-search {
    padding-top: 24px;
    padding-bottom: 6px;
  }

  .hs-btn-box {
    padding: 0 16px;
    ::v-deep [flex-between] {
      display: flex;
      justify-content: space-between;
    }
  }

  .hs-btn-box-no-search {
    padding-top: 16px;
  }

  ::v-deep .page-list-btn {
    display: flex;
    justify-content: space-between;
  }

  ::v-deep .search-box {
    margin-left: 16px;
  }

  .hs-page-main {
    flex: 1;
    height: 0;
    padding: 16px 16px 0 16px;
  }
}

.hs-page-footer {
  width: 100%;
  height: 60px;
  padding-right: 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: none;
  background: #fff;
}

.page-top-search {
  ::v-deep .el-form-item {
    margin-left: 32px;
  }

  ::v-deep .el-date-editor.el-input,
  ::v-deep .el-date-editor.el-input__inner,
  ::v-deep .el-input,
  ::v-deep .el-select,
  ::v-deep .el-date-picker {
    width: 240px;
  }
}
// 有左边栏的样式覆盖
.hs-page-all {
  .hs-has-sidebar {
    @include border;
    margin-right: 16px;
    background-color: #fff;
  }
  .hs-container-has-sidebar {
    @include border;
    border-radius: 8px;
  }
}
</style>
