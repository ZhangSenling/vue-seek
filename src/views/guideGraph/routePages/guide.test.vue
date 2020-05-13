<template>
  <div id="testCanvas">
    test
  </div>
</template>
<script>
import G6 from '@antv/g6';

export default {
  name: 'guideTest',
  methods: {
    init() {
      const el = this.$el;
      const sketchpad = el.querySelector('#sketchpad');
      let graph = null;
      graph = new G6.Graph({
        container: sketchpad,
        width: 1000,
        height: 800,
        fitView: true,
        fitViewPadding: 20,
        defaultNode: {
          size: 20,
          style: {
            fill: '#D8DEEB',
            stroke: '#B2BDD6',
            lineWidth: 2,
          },
        }
      });
      const nodes = [];
      for (let i = 0; i < 1000; i++) {
        nodes.push({
          id: `node-${i}`,
          label: `${i}`,
          x: Math.random() * 450 + 50,
          y: Math.random() * 450 + 50,
        });
      }
      const data = {
        nodes,
      };

      graph.data(data);
      graph.render();
    },
  },
  created() {
    // this.$nextTick(() => {
    //   this.init();
    // });
  }
};
</script>
