<template>
  <div>
    <PreloaderLight v-if="!isPageLoaded" target=".albums-list" text1="loading works" text2="syncing noise" @done="isPageLoaded = true" @destroyed="disableScroll" />
    <h1 class="sr-only">Works</h1>
    <AlbumsList :play="isPageLoaded" />
  </div>
</template>

<script setup>
  import { pageTransitionConfig } from '~/helpers/transitionConfig';
  import { disableScroll, enableScroll } from '~/utils/scrollLock.js';

  definePageMeta({
    alias: '/works',
    // layout: 'full-screen',
    pageTransition: pageTransitionConfig,
    hideFooter: true,
  });
  const isPageLoaded = ref(false);

  useSeoMeta({
    title: 'Works | Abin Binoy',
    description: 'Listen to works',
    ogTitle: 'Works | Abin Binoy',
    ogDescription: 'Listen to works',
  })

  onMounted(() => {
    disableScroll();
  })

  onUnmounted(() => {
    enableScroll();
  })
</script>
