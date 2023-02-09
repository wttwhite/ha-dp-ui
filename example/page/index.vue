<template>
  <hs-layout no-search>
    <div slot="page-breadcrumb">
      <hs-breadcrumb :list="breadcrumbList" />
    </div>
    <section slot="btnBox" flex-between>
      <el-button type="primary" @click="addClick">新增</el-button>
      <el-input style="width: 250px" placeholder="请输入名称"></el-input>
    </section>
    <el-table :data="pageList" height="100%" stripe ref="tableRef">
      <el-table-column label="序号" width="80" type="index"></el-table-column>
      <el-table-column
        prop="caseNo"
        label="案件编号"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column prop="caseName" label="案件名称" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="caseType"
        label="案件类别"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        prop="caseRegisterTime"
        label="立案批准时间"
      ></el-table-column>
      <el-table-column
        prop="dealStatus"
        label="处理状态"
        max-width="150px"
      ></el-table-column>
      <el-table-column prop="caseStatus" label="案件状态"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="detailClick(scope.row)" type="text"
            >详情</el-button
          >
          <el-button @click="editClick(scope.row)" type="text">编辑</el-button>
          <el-button @click="delClick(scope.row)" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页区 -->
    <hsPagination
      slot="footer"
      :page-no.sync="searchForm.pageNo"
      :page-size.sync="searchForm.pageSize"
      :total="total"
      @update:pageNo="(val) => paginationChange(val, 'pageNo')"
      @update:pageSize="(val) => paginationChange(val, 'pageSize')"
    />
  </hs-layout>
</template>
<script>
const InitSearchForm = () => {
  return {
    pageNo: 1,
    pageSize: 10,
  };
};
export default {
  name: "flow-path",
  data() {
    return {
      breadcrumbList: ["流程管理"],
      searchForm: InitSearchForm(),
      pageList: [],
    };
  },
  created() {
    this.getDataList(1);
  },
  methods: {
    addClick() {},
    delClick() {},
    editClick() {},
    detailClick() {
      this.$refs.detailDialogVue.show();
    },
    paginationChange(val, key) {
      this.searchForm[key] = val;
      // 再次请求刷新数据
      this.getDataList();
    },
    // 获取所有数据
    getDataList(pageNo) {
      pageNo && (this.searchForm.pageNo = pageNo);
      // let params = {
      //   ...this.searchForm,
      // }
      //   getDataByPage(params).then((res) => {
      //     this.tableList = res.records || []
      //     this.total = res.total || 0
      //     this.$nextTick(() => {
      //       this.$refs.tableRef.doLayout()
      //     })
      //   })
    },
  },
};
</script>
<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
  width: calc(100% + 10px);
  ::v-deep .el-scrollbar__view {
    width: calc(100% - 10px);
  }
}
.single-box {
  box-shadow: 0px 3px 5px rgba(23, 22, 22, 0.1);
  border-radius: 4px;
  margin-bottom: 12px;
  .img-box {
    padding-bottom: 60%;
    position: relative;
  }
  .el-image {
    display: block;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .box-bottom {
    height: 40px;
    background-color: rgba(247, 249, 250, 0.39);
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
