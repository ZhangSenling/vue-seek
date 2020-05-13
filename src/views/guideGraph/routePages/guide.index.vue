<template>
  <div class="materials-editor" @click="handleEditorClick">
    <tool-bar></tool-bar>
    <sketchpad></sketchpad>
    <panel-left title="圆"></panel-left>
    <!-- <PanelRight></PanelRight>
    <PreviewModel></PreviewModel>
    <ContextMenu></ContextMenu> -->
  </div>
</template>

<script>
import G6 from '@antv/g6';
import ToolBar from '../containers/toolBar';
import Sketchpad from '../containers/sketchpad';
import PanelLeft from '../containers/panelLeft';

export default {
  name: 'guideGraph',
  components: {
    ToolBar,
    Sketchpad,
    PanelLeft
  },
  data() {
    return {
      nodeData: []
    };
  },
  methods: {
    init() {
      console.log('tewtfg');
      const el = this.$el;
      // 画板
      const sketchpad = el.querySelector('#sketchpad');
      console.log(sketchpad.clientWidth, sketchpad.clientHeight);
      this.editor = new G6.Graph({
        container: sketchpad,
        width: sketchpad.clientWidth,
        height: sketchpad.clientHeight,
        fitView: true,
        fitViewPadding: 20,
        // 模式
        modes: {
          edit: [
            // 'zoom-canvas',
            // 'drag-canvas',
            // 'click-select',
            {
              type: 'node-control',
              config: {
                shapeControlPoint: {
                  // 是否在缩放、旋转节点时更新所有与之相连的边
                  updateEdge: false
                },
                dragNode: {
                  // 是否在拖拽节点时更新所有与之相连的边
                  updateEdge: false
                },
                // 是否支持在节点上添加文本
                nodeLabel: true,
                // 是否支持在边上添加文本
                edgeLabel: true,
                // tooltip 是否启用
                tooltip: {
                  shapeControl: true,
                  dragNode: true,
                  dragEdge: true
                },
                // 是否启用对齐线
                alignLine: {
                  enable: true,
                  style: {
                    stroke: '#FFA500',
                    lineWidth: 1
                  }
                }
              }
            }
          ],
          // 只读，
          preview: [
            'zoom-canvas',
            'drag-canvas',
            'preview-canvas'
          ]
        },
        // 节点交互样式
        nodeStateStyles: {
          // 默认样式
          default: {
            fill: '#FFFFFF',
            fillOpacity: 1,
            stroke: '#000000',
            strokeOpacity: 1,
            cursor: 'move'
          },
          // active 状态下的样式
          active: {},
          // selected 状态下的样式
          selected: {},
          // hover 状态下的样式
          hover: {}
        },
        // 边交互样式
        edgeStateStyles: {
          default: {
            stroke: '#000000',
            strokeOpacity: 1,
            // 扩展响应范围
            lineAppendWidth: 10,
            cursor: 'pointer'
          }
        },
        // 分组样式
        groupType: 'rect',
        groupStyle: {
          default: {
            lineWidth: 1,
            stroke: '#29B6F2',
            // lineDash: [ 5, 5 ],
            strokeOpacity: 1,
            fill: '#29B6F2',
            fillOpacity: 0.1,
            opacity: 1,
            minDis: 0,
            maxDis: 0
          }
        }
      });
    },
    handleEditorClick() {

    },
    doAddNode() {
      console.log('test add node');
    }
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
    this.$bus.$on('editor/add/node', this.doAddNode());
  }
};
</script>

<style scoped>
#mountNode{
  background: #999;
}
</style>
