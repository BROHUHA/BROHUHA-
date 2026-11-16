<template>
  <div>
    <PreloaderLight v-if="!isPageLoaded" target=".albums-list" text1="loading works" text2="syncing noise" @done="isPageLoaded = true" @destroyed="disableScroll" />
    <h1 class="sr-only">4bin (Abin Binoy / BROHUHA) - Featured Works & Projects</h1>
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
    title: 'Featured Works & Projects | 4bin - Abin Binoy (BROHUHA)',
    description: 'Explore featured engineering projects by 4bin (Abin Binoy / BROHUHA) including BT-Scanner, APKCook, AllQR, Portfolio, and About.',
    keywords: '4bin projects, 4bin binoy, abin binoy projects, brohuha github, apkcook, allqr, bt-scanner',
    ogTitle: 'Featured Works & Projects | 4bin - Abin Binoy (BROHUHA)',
    ogDescription: 'Explore featured engineering projects by 4bin (Abin Binoy / BROHUHA) including BT-Scanner, APKCook, AllQR, Portfolio, and About.',
    ogUrl: 'https://4bin.vercel.app/works',
    ogImage: 'https://4bin.vercel.app/images/og-cover.jpg',
    ogImageAlt: '4bin - Abin Binoy (BROHUHA) Portfolio Cover',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://4bin.vercel.app/images/og-cover.jpg',
  })

  onMounted(() => {
    disableScroll();
  })

  onUnmounted(() => {
    enableScroll();
  })
</script>
