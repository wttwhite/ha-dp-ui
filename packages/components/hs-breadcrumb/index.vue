<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-if="path">
        <i class="el-icon-back" @click="goback()"></i>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in list" :key="item">
        {{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "hs-breadcrumb",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
    path: {
      type: String,
      default: "",
    },
  },
  methods: {
    goback() {
      if (this.path) {
        this.$router.replace(this.path);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background: #fff;
  padding-left: 32px;
}

::v-deep .el-breadcrumb__item:last-child {
  .el-breadcrumb__inner {
    // color: #4d4d4d;
  }
}

::v-deep .el-breadcrumb__item {
  font-size: 12px;
  //   color: ;
}
</style>
