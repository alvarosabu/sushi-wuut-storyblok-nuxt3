<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <section class="feature-list bg-shrimp-400 py-16">
    <div class="container mx-auto flex flex-col sm:flex-row">
      <div class="w-1/2 flex flex-col justify-between">
        <h2 class="font-extrabold font-display text-3xl text-gray-50 mb-8">
          {{ blok.headline }}
        </h2>
        <ul
          class="py-8 grid grid-cols-3 gap-4"
          v-if="blok.features_list.length > 0"
        >
          <component
            v-for="feature in blok.features_list"
            :key="feature._uid"
            :is="feature.component"
            :blok="feature"
          />
        </ul>
      </div>
      <div class="w-1/2 flex justify-end">
        <img
          v-if="blok.media"
          :src="blok.media.filename"
          :alt="blok.media.filename.alt"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
