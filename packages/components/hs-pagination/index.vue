<template>
  <el-pagination
    :current-page="pageNo"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    :total="total"
    background
    layout="total, sizes, slot, prev, pager, next, jumper"
    @size-change="sizeChangeHandle"
    @current-change="currentChangeHandle"
  />
</template>

<script>
export default {
  name: "hs-pagination",
  props: {
    pageNo: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      pageSizes: [10, 20, 50, 100],
    };
  },
  methods: {
    sizeChangeHandle(val) {
      this.$emit("update:pageSize", val);
      // 防止父组件的pageSize和pageNo没更新
      this.$nextTick(() => {
        this.$emit("refresh");
      });
    },
    currentChangeHandle(val) {
      this.$emit("update:pageNo", val);
      // 防止父组件的pageSize和pageNo没更新
      this.$nextTick(() => {
        this.$emit("refresh");
      });
    },
  },
};
</script>
<style lang="scss" scoped>
// 没有内容，打包不会生成style.css
.demo {
}
</style>
