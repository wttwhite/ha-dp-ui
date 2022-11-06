<template>
  <div w-full>
    <div class="top-text" mt15>
      <span>{{ config[0].text || '新能源' }}</span>
      <span>{{ config[1].text || '燃油车' }}</span>
    </div>
    <div class="bar-box" mt13>
      <div class="left-rate" :style="{ width: `${parseFloat(rate1) * 0.98}%` }"></div>
      <div class="space"></div>
      <div
        class="right-rate"
        :style="{ left: `${parseFloat(rate1) * 0.98 + 2}%`, width: `${parseFloat(rate2) * 0.98}%` }"
      ></div>
    </div>
    <div class="bottom-box" mt12>
      <div class="bottom-left">占比{{ parseFloat(rate1) }}%</div>
      <div class="bottom-right">占比{{ parseFloat(rate2) }}%</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ha-bar-rate',
  props: {
    config: {
      type: Array,
      default: () => [
        { text: '新能源', key: 'rate1' },
        { text: '燃油车', key: 'rate2' }
      ]
    },
    rate1: {
      type: [String, Number],
      default: '45.52'
    },
    rate2: {
      type: [String, Number],
      default: '54.48'
    }
  }
}
</script>
<style lang="scss" scoped>
$padding: 7px;
.top-text {
  width: 100%;
  font-size: 16px;
  font-family: Source Han Sans CN;
  color: #f2faff;
  display: flex;
  justify-content: space-between;
  padding: 0 $padding;
}
.bar-box {
  position: relative;
  width: 100%;
  height: 11px;
  padding: 0 $padding;
  display: flex;
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 5px;
    height: 17px;
    top: -4px;
    border-top: 1px solid #d8fbff;
    border-bottom: 1px solid #d8fbff;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
}
.left-rate {
  height: 100%;
  background: rgba(67, 235, 255, 1);
}
.right-rate {
  height: 100%;
  background: rgba(255, 209, 67, 1);
}
.space {
  height: 17px;
  width: 2%;
  margin: 0 2px;
  position: relative;
  top: -3px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 17px;
    background: #d8fbff;
  }
}
.bottom-box {
  display: flex;
  justify-content: space-between;
  padding: 0 $padding;
  .bottom-left {
    color: #43ebff;
    font-size: 16px;
    font-family: Source Han Sans CN;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      left: 0;
      bottom: -8px;
      width: 32px;
      height: 2px;
      background: #43ebff;
    }
  }
  .bottom-right {
    color: rgba(255, 209, 67, 1);
    font-size: 16px;
    font-family: Source Han Sans CN;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      right: 0;
      bottom: -8px;
      width: 32px;
      height: 2px;
      background: rgba(255, 209, 67, 1);
    }
  }
}
</style>
