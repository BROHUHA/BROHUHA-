<template>
  <div v-if="item" class="container min-h-[calc(100dvh-100px)] pt-20 sm:pt-28 pb-20">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
      
      <!-- Info Column (Left on Desktop; On Mobile: Back & Title -> Image -> Details) -->
      <div class="lg:col-span-5 flex flex-col gap-6">
        <!-- 1. Back button, Category & Name (Always First on mobile & desktop) -->
        <div>
          <AnimationReveal>
            <NuxtLink
              to="/insights"
              class="no-anim-underline inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500 hover:text-black transition-colors mb-3"
            >
              <Icon name="solar:arrow-left-linear" class="text-base" />
              <span>Back to Insights</span>
            </NuxtLink>
          </AnimationReveal>

          <AnimationReveal>
            <div class="flex items-center gap-2 mb-2">
              <span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black text-white font-medium">
                {{ item.category }}
              </span>
              <span class="text-xs text-neutral-400 font-mono">#0{{ item.id }}</span>
            </div>
          </AnimationReveal>

          <AnimationReveal>
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black m-0 leading-[1.08]">
              {{ item.name }}
            </h1>
          </AnimationReveal>
        </div>

        <!-- 2. Mobile-Only Image Placement (shown directly after Name on mobile) -->
        <div class="block lg:hidden my-2 flex justify-center">
          <AnimationReveal class="w-full flex justify-center">
            <div
              class="group relative inline-flex items-center justify-center cursor-zoom-in"
              @click="openFullscreen"
            >
              <img
                :src="`/images/merch/${item.image}`"
                :alt="`${item.name} - ${item.category}`"
                class="max-h-[60vh] w-auto max-w-full object-contain rounded-2xl drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </AnimationReveal>
        </div>

        <!-- 3. Minimal Description -->
        <AnimationReveal>
          <p class="text-sm sm:text-base text-neutral-600 leading-relaxed m-0">
            {{ item.description || 'Custom crafted creative visual and developer merchandise design.' }}
          </p>
        </AnimationReveal>

        <!-- 4. Action Bar: Circular Next/Previous Buttons, Share & Fullscreen -->
        <AnimationReveal>
          <div class="flex items-center gap-2.5 pt-2 flex-wrap">
            <!-- Previous Button -->
            <NuxtLink
              v-if="prevItem"
              :to="`/insights/${prevItem.slug}`"
              class="no-anim-underline w-11 h-11 rounded-full border border-neutral-300 hover:border-black bg-white flex items-center justify-center transition-all shadow-xs hover:scale-105 active:scale-95 shrink-0"
              title="Previous artwork"
            >
              <Icon name="solar:arrow-left-linear" class="text-lg text-black" />
            </NuxtLink>
            <div
              v-else
              class="w-11 h-11 rounded-full border border-neutral-200 bg-neutral-100/60 flex items-center justify-center opacity-40 cursor-not-allowed shrink-0"
            >
              <Icon name="solar:arrow-left-linear" class="text-lg text-neutral-400" />
            </div>

            <!-- Next Button -->
            <NuxtLink
              v-if="nextItem"
              :to="`/insights/${nextItem.slug}`"
              class="no-anim-underline w-11 h-11 rounded-full border border-neutral-300 hover:border-black bg-white flex items-center justify-center transition-all shadow-xs hover:scale-105 active:scale-95 shrink-0"
              title="Next artwork"
            >
              <Icon name="solar:arrow-right-linear" class="text-lg text-black" />
            </NuxtLink>
            <div
              v-else
              class="w-11 h-11 rounded-full border border-neutral-200 bg-neutral-100/60 flex items-center justify-center opacity-40 cursor-not-allowed shrink-0"
            >
              <Icon name="solar:arrow-right-linear" class="text-lg text-neutral-400" />
            </div>

            <div class="h-6 w-px bg-neutral-200 mx-1"></div>

            <!-- Download Button (Icon) -->
            <button
              type="button"
              class="no-anim-underline w-11 h-11 rounded-full border border-neutral-300 hover:border-black bg-white flex items-center justify-center transition-all shadow-xs hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
              :title="isDownloading ? 'Downloading...' : 'Download artwork'"
              aria-label="Download artwork"
              @click="downloadImage"
            >
              <Icon :name="isDownloading ? 'solar:check-circle-bold' : 'solar:download-linear'" class="text-lg text-black transition-transform" />
            </button>

            <!-- Share Button -->
            <button
              type="button"
              class="no-anim-underline inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-50 text-neutral-800 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-xs cursor-pointer active:scale-95"
              :title="copied ? 'Link copied to clipboard!' : 'Share this artwork'"
              @click="handleShare"
            >
              <Icon :name="copied ? 'solar:check-circle-bold' : 'solar:share-linear'" class="text-base sm:text-lg transition-transform" :class="{ 'text-emerald-600': copied }" />
              <span>{{ copied ? 'Copied!' : 'Share' }}</span>
            </button>

            <!-- Fullscreen Button -->
            <button
              type="button"
              class="no-anim-underline inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-sm cursor-pointer active:scale-95"
              title="Open image in fullscreen"
              @click="openFullscreen"
            >
              <Icon name="solar:maximize-square-linear" class="text-base sm:text-lg" />
              <span>Fullscreen</span>
            </button>
          </div>
        </AnimationReveal>

      </div>

      <!-- Right Column: Desktop-Only Fitted Image (shows on the right side on desktop) -->
      <div class="hidden lg:flex lg:col-span-7 flex-col items-center justify-center lg:sticky lg:top-28">
        <AnimationReveal class="w-full flex items-center justify-center">
          <div
            class="group relative inline-flex items-center justify-center cursor-zoom-in"
            @click="openFullscreen"
          >
            <img
              :src="`/images/merch/${item.image}`"
              :alt="`${item.name} - ${item.category}`"
              class="max-h-[76vh] w-auto max-w-full object-contain rounded-2xl drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </AnimationReveal>
      </div>

    </div>

    <!-- Fullscreen Lightbox Modal -->
    <Teleport to="body">
      <div
        v-if="isFullscreenOpen"
        class="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-200"
        @click.self="isFullscreenOpen = false"
      >
        <!-- Modal Toolbar -->
        <div class="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-2 sm:gap-3 z-10">
          <button
            type="button"
            class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            :title="isDownloading ? 'Downloading...' : 'Download artwork'"
            aria-label="Download artwork"
            @click="downloadImage"
          >
            <Icon :name="isDownloading ? 'solar:check-circle-bold' : 'solar:download-linear'" class="text-base" />
          </button>
          <button
            type="button"
            class="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            @click="handleShare"
          >
            <Icon :name="copied ? 'solar:check-circle-bold' : 'solar:share-linear'" class="text-sm" />
            <span>{{ copied ? 'Copied' : 'Share' }}</span>
          </button>
          <button
            type="button"
            class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close fullscreen"
            @click="isFullscreenOpen = false"
          >
            <Icon name="ion:close-round" class="text-base" />
          </button>
        </div>

        <!-- Centered High-Res Image -->
        <div class="relative max-w-full max-h-full flex items-center justify-center p-2">
          <img
            :src="`/images/merch/${item.image}`"
            :alt="`${item.name} - Fullscreen Preview`"
            class="max-h-[88vh] max-w-[92vw] w-auto object-contain rounded-xl shadow-2xl transition-transform duration-300"
          />
        </div>

        <!-- Caption at bottom -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-mono tracking-wider uppercase pointer-events-none text-center truncate max-w-[85vw]">
          {{ item.name }} &bull; {{ item.category }}
        </div>
      </div>
    </Teleport>
  </div>

  <!-- Fallback if not found -->
  <div v-else class="container min-h-[60vh] flex flex-col items-center justify-center text-center pt-32">
    <h2 class="text-3xl font-bold mb-4">Artwork Not Found</h2>
    <p class="text-neutral-500 mb-6">The requested insight artwork could not be found.</p>
    <NuxtLink
      to="/insights"
      class="no-anim-underline px-6 py-3 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
    >
      Return to Insights
    </NuxtLink>
  </div>
</template>

<script setup>
  import { allInsights, getInsightBySlug } from '~/data/merch';
  import { pageTransitionConfig } from '~/helpers/transitionConfig';

  definePageMeta({
    alias: ['/insight/:slug'],
    pageTransition: pageTransitionConfig,
  });

  const route = useRoute();
  const slug = computed(() => route.params.slug);
  const item = computed(() => getInsightBySlug(slug.value));

  const copied = ref(false);
  const isDownloading = ref(false);
  const isFullscreenOpen = ref(false);

  // Computed Previous and Next Items
  const currentIndex = computed(() => {
    if (!item.value) return -1;
    return allInsights.findIndex(i => i.slug === item.value.slug);
  });

  const prevItem = computed(() => {
    if (currentIndex.value <= 0) return null;
    return allInsights[currentIndex.value - 1];
  });

  const nextItem = computed(() => {
    if (currentIndex.value < 0 || currentIndex.value >= allInsights.length - 1) return null;
    return allInsights[currentIndex.value + 1];
  });

  // Open Fullscreen
  const openFullscreen = () => {
    isFullscreenOpen.value = true;
  };

  // Keyboard shortcut: Escape closes fullscreen
  const handleKeydown = (e) => {
    if (e.key === 'Escape' && isFullscreenOpen.value) {
      isFullscreenOpen.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
  });

  // Download artwork
  const downloadImage = async () => {
    if (!item.value || isDownloading.value) return;
    isDownloading.value = true;
    try {
      const imgUrl = `/images/merch/${item.value.image}`;
      const res = await fetch(imgUrl);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = item.value.image;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback direct link
      const link = document.createElement('a');
      link.href = `/images/merch/${item.value.image}`;
      link.download = item.value.image;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setTimeout(() => {
        isDownloading.value = false;
      }, 1200);
    }
  };

  // Share functionality
  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : `https://4bin.vercel.app/insights/${slug.value}`;
    const title = item.value ? `${item.value.name} | 4bin Portfolio` : '4bin Portfolio';

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: item.value?.description || 'Check out this design from 4bin portfolio',
          url,
        });
        return;
      } catch (err) {
        // Fallback to clipboard if user dismissed share sheet
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2500);
    } catch {
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2500);
    }
  };

  useSeoMeta({
    title: () => item.value ? `${item.value.name} - ${item.value.category} | 4bin Insights` : 'Insights | 4bin',
    description: () => item.value?.description || 'Creative developer artwork and design insights by 4bin (Abin Binoy / BROHUHA).',
    ogTitle: () => item.value ? `${item.value.name} - ${item.value.category} | 4bin Insights` : 'Insights | 4bin',
    ogDescription: () => item.value?.description || 'Creative developer artwork and design insights by 4bin (Abin Binoy / BROHUHA).',
    ogImage: () => item.value ? `https://4bin.vercel.app/images/merch/${item.value.image}` : 'https://4bin.vercel.app/images/og-cover.jpg',
    twitterCard: 'summary_large_image',
    twitterImage: () => item.value ? `https://4bin.vercel.app/images/merch/${item.value.image}` : 'https://4bin.vercel.app/images/og-cover.jpg',
  });
</script>
