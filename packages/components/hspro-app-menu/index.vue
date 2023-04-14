<template>
  <div class="dev-menu-box">
    <div class="collapse-btn" @click="isCollapse = !isCollapse">
      <i :class="`el-icon-s-${isCollapse ? 'unfold' : 'fold'}`"></i>
    </div>
    <el-scrollbar wrap-class="menu-scrollbar__wrap" :size="6">
      <el-menu
        class="menu-wrap"
        theme="light"
        :collapse="isCollapse"
        :default-active="activeMenu"
        collapse-btn
        @click-collapse="isCollapse = !isCollapse"
        @select="handleSelect"
      >
        <el-menu-item
          v-for="(item, index) in menuList"
          :key="index"
          :index="item.path"
          icon="h-icon-menu_f"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.meta.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: "hspro-app-menu",
  props: {
    menuList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // activeMenu: {
    //   type: String,
    //   default: "",
    // },
  },
  watch: {
    $route: {
      handler(val) {
        this.activeMenu = val.path;
      },
      immediate: true,
    },
  },
  data() {
    return {
      isCollapse: true,
      activeMenu: "",
    };
  },
  methods: {
    handleSelect(path) {
      this.$router.replace({
        path,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.dev-menu-box {
  flex-shrink: 0;
  .collapse-btn {
    color: #797a7e;
    border-right: solid 1px #e6e6e6;
    font-size: 24px;
    cursor: pointer;
    padding: 12px 0 0 20px;
  }
  .el-scrollbar {
    height: calc(100% - 50px);
  }
  &::v-deep {
    .menu-scrollbar__wrap {
      height: 100%;
      overflow-x: hidden;
      .menu-wrap {
        height: 100%;
        &:not(.el-menu--collapse) {
          width: 200px;
        }
      }
    }
    .el-scrollbar__view {
      height: 100%;
    }
  }
}
</style>
