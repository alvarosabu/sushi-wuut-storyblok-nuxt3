<script lang="ts" setup>
import { useStoryApi, useStoryBridge } from '@storyblok/nuxt/composables'

const storyapi = useStoryApi()

const { data } = await storyapi.get('cdn/stories/home', {
  version: 'draft',
})

onMounted(() => {
  useStoryBridge(state.story.id, event => {
    state.story = event
  })
})

const state = reactive({
  story: data.story,
})
</script>
<template>
  <component
    :is="state.story.content.component"
    :key="state.story.content._uid"
    :blok="state.story.content"
  />
</template>
