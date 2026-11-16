<template>
  <Transition :name="pageTransitionFadeConfig.name" :mode="pageTransitionFadeConfig.mode" :css="pageTransitionFadeConfig.css" :appear="pageTransitionFadeConfig.appear" @enter="pageTransitionFadeConfig.onEnter" @leave="pageTransitionFadeConfig.onLeave">
    <!-- Need to use Transition component for page transitions to work on child routes  -->
    <article class="container grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 min-h-[calc(100dvh-100px)] mt-6 sm:mt-12 xl:mt-[100px]">
      <aside class="w-full max-w-full overflow-hidden">
        <AlbumArtwork :content="content" />
      </aside>
      <section class="w-full min-w-0">
        <header>
          <AnimationReveal>
            <NuxtLink to="/works" class="inline-block lowercase">Back to works</NuxtLink>
          </AnimationReveal>
          <AnimationReveal>
            <h1>{{ content.title }}</h1>
          </AnimationReveal>
          <AnimationReveal>
            <time class="text-2xl" datetime="{{ content.year }}">{{ content.year }}</time>
          </AnimationReveal>
        </header>
        <AnimationReveal>
          <AlbumNav class="album-nav" @active-section-id="setCurrentActiveSectionId" />
        </AnimationReveal>
        <div ref="contentRef" class="content prose-lg lg:prose-xl prose-h1:m-0 prose-h1:text-7xl prose-h2:text-xl lg:prose-h2:text-2xl prose-h2:normal-case prose-h2:mb-0 prose-ul:ps-4 prose-ul:prose-li:m-1 prose-ul:prose-li:p-0 prose-ol:list-decimal prose-img:m-0 text-pretty">
          <article id="music" class="active flex flex-col gap-5">
            <AnimationReveal v-if="content.basicInfo" class="w-full">
              <p class="text-lg leading-relaxed">{{ content.basicInfo }}</p>
            </AnimationReveal>
            <AnimationReveal v-if="content.howToUse" class="w-full">
              <div class="how-to-use rounded-2xl border border-neutral-800 bg-[#0d0d0d] overflow-hidden my-2 shadow-2xl max-w-full">
                <div class="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-neutral-900/80 border-b border-neutral-800">
                  <div class="flex items-center gap-1.5 sm:gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block"></span>
                    <span class="ml-1 sm:ml-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-400 truncate">Quick Start & Run</span>
                  </div>
                </div>
                <pre class="p-3 sm:p-5 overflow-x-auto text-xs sm:text-sm leading-relaxed text-neutral-200 font-mono bg-black/50 m-0"><code class="text-neutral-200">{{ content.howToUse }}</code></pre>
              </div>
            </AnimationReveal>
            <AnimationReveal v-if="content.player?.bandcamp?.id" class="w-full">
              <div class="player">
                <BandcampEmbed :player-id="content.player.bandcamp.id || 0" :with="content.player.bandcamp.width" :height="content.player.bandcamp.height" />
              </div>
            </AnimationReveal>
            <AnimationReveal v-if="content.social?.length">
              <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 w-full">
                <a
                  v-for="(social, index) in content.social"
                  :key="social.label"
                  :href="social.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  :class="index === 0
                    ? 'bg-white text-black hover:bg-neutral-200 border-white'
                    : 'bg-black text-white hover:bg-white hover:text-black border-neutral-700 hover:border-white'"
                  class="no-anim-underline group inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border text-sm sm:text-base font-bold transition-all duration-300 no-underline shadow-sm cursor-pointer w-full sm:w-auto text-center"
                >
                  <Icon :name="social.icon" class="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110 shrink-0" />
                  <span>{{ social.label }}</span>
                </a>
              </div>
            </AnimationReveal>
            <AnimationReveal v-if="content.videos?.youtube?.length" class="w-full">
              <div class="videos">
                <div v-for="video in content.videos.youtube" :key="video.id">
                  <h2>{{ video.title }}</h2>
                  <YoutubeEmbed :video-id="video.id" :alt="video.title" />
                </div>
              </div>
            </AnimationReveal>
          </article>
          <article id="info">
            <div v-if="content.category" class="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">{{ content.category }}</div>
            <div v-if="content.recordLabel">Record label: {{ content.recordLabel }}</div>
            <ContentRenderer v-if="post" :value="post" />
          </article>
          <article id="tracklist">
            <ol>
              <li
                v-for="(tool, index) in content.tracklist"
                :key="typeof tool === 'object' ? tool.name : tool"
                class="cursor-pointer transition-all duration-200"
                @mouseenter="activeToolIndex = index"
                @mouseleave="activeToolIndex = null"
                @click="activeToolIndex = activeToolIndex === index ? null : index"
              >
                <span>{{ typeof tool === 'object' ? tool.name : tool }}</span>
                <div
                  v-if="typeof tool === 'object' && tool.reason"
                  class="grid transition-all duration-300 ease-in-out font-normal"
                  :class="activeToolIndex === index ? 'grid-rows-[1fr] opacity-100 mt-2 mb-3' : 'grid-rows-[0fr] opacity-0 mt-0 mb-0'"
                >
                  <div class="overflow-hidden">
                    <p class="m-0 text-sm sm:text-base font-normal text-neutral-800 bg-neutral-100/90 p-3 sm:p-3.5 rounded-xl border-l-2 border-black leading-relaxed">
                      {{ tool.reason }}
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </article>
        </div>
      </section>
    </article>
  </Transition>
</template>

<script setup>
  import { pageTransitionFadeConfig } from '~/helpers/transitionConfig';
  import { albums } from "~/data/albums";

  import gsap from "gsap";

  definePageMeta({
    alias: '/works/:slug',
    pageTransition: pageTransitionFadeConfig,
    key: route => route.fullPath,
    middleware: [
      (to) => {
        const slugAliases = {
          'video-rock': 'btscanner',
          velodrome: 'apkcook',
          gossip: 'allqr',
          'living-room': 'portfolio',
        };
        if (to.params.slug && slugAliases[to.params.slug]) {
          return navigateTo(`/works/${slugAliases[to.params.slug]}`, { replace: true });
        }
      }
    ]
  });

  const config = useRuntimeConfig()
  const routeSlug = useRoute().params.slug
  const slugAliases = {
    'video-rock': 'btscanner',
    velodrome: 'apkcook',
    gossip: 'allqr',
    'living-room': 'portfolio',
  }
  const slug = slugAliases[routeSlug] || routeSlug
  const { data: post } = await useAsyncData(slug, () => {
    return queryCollection('music').path(`/en/music/${slug}`).first()
  })

  const content = albums.find(album => album.slug === slug) || albums[0]
  const contentRef = ref(null)
  const currentActiveSectionId = ref('#music')
  const activeToolIndex = ref(null)

  useSeoMeta({
    title: `${content.title} | Abin Binoy`,
    description: content.meta.description,
    ogTitle: `${content.title} | Abin Binoy`,
    ogDescription: content.meta.description,
    ogType: 'music.album',
    ogImage: `${config.public.appUrl}/albums/${slug}/${content.images.cover}`,
    ogImageAlt: `${content.title} - cover`,
    ogImageWidth: 1000,
    ogImageHeight: 900,
  })

  onMounted(() => {
    const contentArticles = contentRef.value.querySelectorAll('.content article')
    const articlesInactiveId = [...contentArticles].filter((article) => `#${article.id}` !== currentActiveSectionId.value);
    gsap.utils.toArray(articlesInactiveId).forEach((article) => {
      gsap.set(article, {
        display: "none",
        autoAlpha: 0,
        y: 40,
      })
    })
  })

  const setCurrentActiveSectionId = (nextId) => {
    gsap
      .timeline()
      .to(currentActiveSectionId.value, {
        display: "none",
        duration: 0.5,
        autoAlpha: 0,
        y: 40,
        ease: "power4.inOut",
      })
      .to(nextId, {
        display: "block",
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
        ease: "power4.inOut",
        onComplete: () => {
          currentActiveSectionId.value = nextId
        }
      })
  }
</script>

<style scoped>
.no-anim-underline,
.no-anim-underline:hover,
.no-anim-underline:focus,
.no-anim-underline:active {
  text-decoration: none !important;
}

.no-anim-underline::before,
.no-anim-underline::after,
.no-anim-underline:hover::before,
.no-anim-underline:hover::after {
  display: none !important;
  content: none !important;
  width: 0 !important;
  height: 0 !important;
  opacity: 0 !important;
}
</style>
