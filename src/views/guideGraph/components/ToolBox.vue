<template>
  <!-- <div :class="['tool-box', mode]" @contextmenu.stop.prevent>
    <slot></slot>
  </div>-->
  <div>
    <!-- <header>
      <button id="add">Load Music</button>
      <input id="loadfile" type="file" />
      <ul class="type">
        <li data-type="dot">Dot</li>
        <li data-type="column" class="selectedType">Column</li>
      </ul>
      <p>
        Volume
        <input id="volume" type="range" min="0" max="100" value="60" />
      </p>
    </header> -->
    <!-- 画布canvas区域 -->
    <!-- <div class="right"></div> -->
    <div id="waveform"></div>
  </div>
</template>

<script>
// import '@/vendor/MusicVisualizer';
// import '@/vendor/index';
import WaveSurfer from 'wavesurfer.js';

export default {
  name: 'Index',
  props: {
    mode: {
      type: String,
      // 水平还是垂直类型，可选值为 horizontal 或 vertical
      default: 'horizontal'
    },
    tools: {
      type: Array
    }
  },
  mounted() {
    // console.log(document.querySelectorAll('.right'));
    // require('@/vendor/MusicVisualizer');
    // require('@/vendor/index');
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple'
    });
    wavesurfer.on('ready', () => {
      wavesurfer.play();
    });
    wavesurfer.load('./test.wma');
  }
};
</script>
<style lang="scss" scoped>
</style>
