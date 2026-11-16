<template>
  <div class="overflow-x-hidden">
    <AppHeader />
    <main class="min-h-dvh">
      <slot />
    </main>
    <AppFooter v-if="!route.meta.hideFooter" />
    <AppCursor />
  </div>
</template>

<script setup>
  import gsap from "gsap";

  const route = useRoute();

  onMounted(() => {
    const html = document.documentElement;

    gsap.to(html, {
      backgroundColor: '#000000',
      duration: 1,
      ease: 'power4.in',
    });
  })

  const playAllAutoplayVideos = () => {
    // Avoid playing hidden background videos on the homepage that are managed by ScrollTrigger lifecycle
    const videos = document.querySelectorAll("video:not(.circles video):not(.showreel)");
    videos.forEach((video) => {
      if (video.hasAttribute("autoplay") || video.autoplay) {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    });
  };

  onMounted(() => {
    playAllAutoplayVideos();
    ['pointerdown', 'touchstart', 'scroll', 'wheel', 'keydown'].forEach(evt => {
      window.addEventListener(evt, playAllAutoplayVideos, { passive: true, once: true });
    });
  });
</script>
