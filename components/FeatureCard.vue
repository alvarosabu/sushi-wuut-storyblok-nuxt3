<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <li class="p-4 flex flex-col items-center rounded-lg border-2 border-gray-50">
    <img class="w-16 h-16 mb-4" :src="blok.icon.filename" :alt="blok.label" />
    <span class="font-display font-font-extrabold text-sm text-gray-50">{{
      blok.label
    }}</span>
  </li>
</template>

<style scoped lang="scss"></style>
