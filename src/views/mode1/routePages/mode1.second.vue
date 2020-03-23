<template>
  <div class="hello">
    <el-button @click="toggleTheme">
      切换主题
    </el-button>
    <h2>mode1.second</h2>
    <div v-for="element in test" :key="element.id" class="list-complete-item">
      {{ element.name }} :[{{ element.total }}] {{ element.getover }}
    </div>
  </div>
</template>

<script>
import { fetchList } from '@/api/test';

export default {
  name: 'HelloWorld',
  data() {
    return {
      test: [],
      isDark: false
    };
  },
  methods: {
    toggleTheme() {
      window.document.documentElement.setAttribute(
        'theme',
        this.isDark ? 'dark' : 'light'
      );
      this.isDark = !this.isDark;
    }
  },
  mounted() {
    fetchList().then((res) => {
      this.test = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>

.list-complete-item{
  color: $--font-color;
}
</style>
