<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <section class="hero w-full py-16">
    <div
      class="
        container
        mx-auto
        flex flex-col
        sm:flex-row
        px-0
        sm:px-12
        justify-between
        items-center
      "
    >
      <div class="w-full sm:w-1/2 px-8 relative">
        <img
          class="w-full mx-auto"
          src="/sushi-and-chopstick.png"
          alt="Sushi graphics"
        />
      </div>
      <div class="w-full sm:w-1/2 px-8">
        <h1 class="font-display text-shrimp-400 font-extrabold text-3xl mb-12">
          {{ blok.headline }}
        </h1>
        <p class="text-gray-600 mb-8 text-sm">{{ blok.description }}</p>
        <footer class="w-full flex justify-center sm:justify-end">
          <button class="btn btn--outline mr-4">
            {{ blok.more_cta_label }}
          </button>
          <button class="btn btn--primary">
            {{ blok.download_cta_label }}
          </button>
        </footer>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.btn {
  @apply px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-400;

  &--primary {
    @apply bg-shrimp-400 text-white hover:bg-shrimp-500;
  }

  &--outline {
    @apply bg-white text-shrimp-400 border-2 border-shrimp-400 hover:(bg-shrimp-500 text-white);
  }
}
</style>
