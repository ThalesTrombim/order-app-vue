<script lang="ts" setup>

interface TextGrayTypes {
  isDark: boolean
  lg: boolean
}

const props = withDefaults(defineProps<TextGrayTypes>(), {
  isDark: false,
  lg: false
})

</script>

<template>
  <p class="text-gray" :class="{ 'is-dark' : props.isDark, 'lg' : props.lg }">
    <slot></slot>
  </p>
</template>

<style>
.text-gray {
  color: #7f7f7f;
  font-size: 16px;
  margin: 0;
}
.is-dark {
  color: #333333;
  font-weight: 600;
}
.lg {
  font-size: 18px;
}
</style>
