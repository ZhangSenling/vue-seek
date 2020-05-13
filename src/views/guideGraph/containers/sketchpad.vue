<template>
  <div class="sketchpad-box" :style="boxStyle">
    <div class="sketchpad" id="sketchpad">
      <!-- 文本输入框 -->
      <!-- <input class="inputBox" autofocus value=""> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'sketchpad',
  data() {
    return {
      // 面板样式
      panelStyle: {
        left: null,
        right: null
      }
    };
  },
  computed: {
    boxStyle() {
      const boxStyle = {};
      const keys = Object.keys(this.panelStyle);
      keys.forEach((key) => {
        const panelStyle = this.panelStyle[key];
        if (panelStyle) {
          // 位置数据
          const positionVal = isNaN(parseInt(panelStyle[key])) ? 0 : parseInt(panelStyle[key]);
          const width = isNaN(parseInt(panelStyle.width)) ? 0 : parseInt(panelStyle.width);
          boxStyle[key] = `${positionVal + width}px`;
        }
      });
      return boxStyle;
    }
  },
  created() {
    // const _t = this;
    // _t.$X.utils.bus.$on('editor/panel/toggle', function (data) {
    //   _t.$set(_t.panelStyle, data.name, data.style)
    // })
  }
};
</script>
<style lang="scss" scoped>
  .sketchpad-box {
    overflow: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 0;

    .sketchpad {
      z-index: 100;
      display: inline-block;
      width: 100%;
      height: 100%;
      margin: 100px 0 0;
      background: #FFFFFF;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, .1);
    }
    .inputBox {
      display: none;
    }
  }
</style>
