<template>
  <div class="test-widget">
    <h3>测试部件</h3>
    <div class="notice-list">
      <div class="notice-item" v-for="(item, ind) in noticeList" :key="ind">
        {{ item.title }}
      </div>
    </div>
    <p>部件样例1</p>
    <p>部件样例2</p>
    <div ref="echartsDom" :style="{ width: '300px', height: '300px' }"></div>
  </div>
</template>
<script>
// import { findNoticeListApi } from "@@/api";

export default {
  name: "test-widget",
  data() {
    return {
      textContent: "helloworld",
      textColor: {
        value: "#2196f3",
        opacity: "1",
      },
      textSize: 14,
      noticeList: [],
    };
  },
  methods: {
    initEchart() {
      let myChart = echarts.init(this.$refs.echartsDom);
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
    getDataFromApi() {
      // findNoticeListApi().then((res) => {
      //   console.log("findNoticeListApi res: ", res.data.data.list);
      //   this.noticeList = res.data.data.list;
      // });
    },
  },
  created() {},
  mounted() {
    var a = "foobar".includes("foo");
    console.log("aaa------ ", a);
    this.initEchart();
  },
};
</script>
<style lang="scss" scoped>
.test-widget {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid gray;
  h3 {
    color: red;
  }
  .content {
    margin-bottom: 16px;
  }
  .notice-list {
    .notice-item {
      display: inline-block;
      margin-right: 16px;
    }
  }
}
</style>
