<template>
  <div class="name-value">
    <div>{{ item.name }}</div>
    <div mt15>{{ item.value }}</div>
  </div>
</template>

<script>
export default {
  name: 'ha-name-value',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          name: '老旧住宅',
          value: 0
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.name-value {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 18px;
  text-align: right;
  div {
    max-width: 92px;
  }
  div:first-child {
    color: #189ff5;
    // border-left: 5px solid #22dcfd;
    // padding-left: 15px;
  }
  div:last-child {
    color: #189ff5;
    font-family: D-DIN Exp;
    color: #ffffff;
    text-align: center;
  }
}
</style>
