<template>
  <div
    class="node-element"
    :style="elementStyle"
    @mousedown="handleMouseDown"
  >
    <div class="content" :title="title">
      <i style="display: inline-block;width: 40px;height: 40px;background: red;"></i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'panelLeft',
  props: {
    title: {
      type: String,
      required: true
    },
    info: {
      type: Object,
      default() {
        return {
          shape: 'circle',
          label: 'circle',
          enable: true,
          width: 40,
          height: 40,
          anchorPoints: [[0, 0], [0, 1], [1, 0], [1, 1]],
          svg: ''
        };
      }
    },
    width: {
      type: Number,
      default: 40
    },
    height: {
      type: Number,
      default: 40
    }
  },
  computed: {
    elementStyle() {
      const style = {};
      if (this.width) {
        style.width = `${this.width}px`;
      }
      if (this.height) {
        style.height = `${this.height}px`;
      }
      return style;
    }
  },
  methods: {
    handleMouseDown() {
      // this.$store.$emit('guide/addNode', this.info);
      console.log(this.info);
      this.$store.dispatch('guide/addNode', this.info);
    }
  }
};
</script>
