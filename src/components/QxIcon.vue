/**
  icon
 */
<template>
  <span v-if="iconName" class="iconfont" :class="[iconName, {'pointer': isPointer}]"></span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconName: String,
    isPointer: {
      type: Boolean,
      default: false
    }
  }
};
</script>
