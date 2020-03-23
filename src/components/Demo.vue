<template>
  <div>
    <div v-for="(item, index) in boxArr" :key="index">
      <div
        v-for="(citem, cindex) in item"
        :key="cindex"
        class="box"
        :class="{'active':citem.light === 1}"
        @click="changeLight(citem)"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Demo',
  data() {
    const arr = [];

    for (let i = 0; i < 5; i++) {
      const temp = [];
      for (let j = 0; j < 6; j++) {
        const light = Math.random() > 0.5 ? 0 : 1;
        temp.push({
          x: i,
          y: j,
          light
        });
      }
      arr.push(temp);
    }
    return {
      boxArr: arr
    };
  },
  mounted() {},
  methods: {
    changeLight(item) {
      const itemx = item.x;
      const itemy = item.y;
      const boxArr = [];
      boxArr.push({ x: itemx, y: itemy });
      boxArr.push({ x: itemx - 1, y: itemy });
      boxArr.push({ x: itemx + 1, y: itemy });
      boxArr.push({ x: itemx, y: itemy - 1 });
      boxArr.push({ x: itemx, y: itemy + 1 });

      boxArr.forEach((ele) => {
        const box = this.findBox(ele.x, ele.y);
        if (box) {
          const light = box.light === 1 ? 0 : 1;
          box.light = light;
        }
      });
    },
    // 检查坐标是否合法
    judeCoordinate(x, y) {
      let flag = true;
      if (x <= -1 || x >= 5) flag = false;
      if (y <= -1 || y >= 6) flag = false;
      return flag;
    },
    // 寻找对应的格子
    findBox(x, y) {
      let box = null;
      if (x >= 0 && x < 5 && y >= 0 && y <= 6) {
        box = this.boxArr[x][y];
      }
      return box;
    }
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.box {
  width: 50px;
  height: 50px;
  background: gray;
  display: inline-block;
  margin: 5px;
}
.box.active {
  background: green;
}
</style>
