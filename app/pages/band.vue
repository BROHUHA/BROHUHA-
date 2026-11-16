<template>
  <section ref="sectionBandRef" class="section-band">
    <h1 class="sr-only">Resume</h1>
    <div class="flex flex-col lg:flex-row lg:flex-wrap gap-x-4 bg-black text-white border-t-16 border-t-black">
      <div class="flex-auto">
        <ul ref="membersRef" class="members flex flex-col gap-1.5 p-6 text-[clamp(1.05rem,3vw,1.15rem)] [&_span]:block" role="list">
          <li><span>NAME: Abin Binoy</span></li>
          <li><span>ROLE: Software Developer</span></li>
          <li><span>EXPERIENCE: 2+ Years</span></li>
          <li><span>EDUCATION: Bachelor of Computer Applications</span></li>
          <li><span>PASSION: Exploring New Technologies</span></li>
          <li><span>INTERESTS: Software, Development & Innovation</span></li>
          <li><span>APPROACH: Curious Mind, Creative Thinking</span></li>
          <li><span>MOTTO: Always Learning, Always Building.</span></li>
        </ul>
      </div>
      <figure v-for="(image, index) in images" :key="index" :class="`figure-${index}`" class="relative flex-auto overflow-hidden">
        <div class="reveal-columns absolute z-90 inset-0 w-full h-full">
          <DynamicColumns :min="5" :max="6" />
        </div>
        <div class="relative">
          <img class="max-lg:h-auto h-[50dvh] w-full object-cover transition-all duration-500 ease-in-out cursor-pointer will-change-transform lg:scale-105 hover:scale-110" loading="lazy" :alt="image.alt" :src="`/images/band/${image.src}`" @click="handleClick" @mousemove="handleMouseMove">
        </div>
        <figcaption class="relative z-10 h-full text-white bg-black">{{ image.alt }}</figcaption>
      </figure>
    </div>
    <p class="p-6 text-pretty">&copy; All images are copyright to Abin Binoy.</p>
  </section>
</template>

<script setup>
  import { images } from "~/data/media";
  import { pageTransitionConfig } from '~/helpers/transitionConfig';

  import gsap from "gsap";
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { SplitText } from "gsap/SplitText";

  gsap.registerPlugin(SplitText, ScrollTrigger);

  definePageMeta({
    alias: '/resume',
    pageTransition: pageTransitionConfig,
  });
  const sectionBandRef = useTemplateRef('sectionBandRef');
  const membersRef = useTemplateRef('membersRef');
  const prevImage = ref(null);
  const currentImage = ref(null);
  let isLargeDevice;
  let ctx;

  useSeoMeta({
    title: 'Resume | Abin Binoy',
    description: 'Resume and profile of Abin Binoy, Software Developer',
    ogTitle: 'Resume | Abin Binoy',
    ogDescription: 'Resume and profile of Abin Binoy, Software Developer',
  })

  const handleClick = (e) => {
    const element = e.srcElement

    prevImage.value = (currentImage.value !== null) ? currentImage.value : element
    currentImage.value = element;

    if (prevImage.value !== currentImage.value) {
      prevImage.value.classList.remove('h-[calc(100dvh-1.4rem)]')
    }

    if (isLargeDevice.matches) {
      element.classList.toggle('hover:scale-110')
      element.classList.toggle('h-[calc(100dvh-1.4rem)]')
    }

    // Scroll to element after CSS transition is done.
    const delay = isLargeDevice.matches ? 500 : 0;
    setTimeout(function () {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
    }, delay);
  }

  const handleMouseMove = (e) => {
    // @todo Make a composable.
    const movement = 15;
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    const x = Math.round(((relX - rect.width / 2) / rect.width) * movement);
    const y = Math.round(((relY - rect.height / 2) / rect.height) * movement);

    gsap.to(target.parentElement, {
      duration: .5,
      x: x,
      y: y,
    });
  }

  onMounted(async () => {
    await nextTick();
    await document.fonts.ready;
    isLargeDevice = window.matchMedia("(min-width: 1024px)");

    SplitText.create(membersRef.value, {
      type: 'lines, words',
      mask: 'lines',
      linesClass: 'line',
      wordsClass: 'word',
    });

    gsap.set(sectionBandRef.value, { clipPath: 'inset(100% 0% 0% 0%)' });
    gsap.set(membersRef.value.querySelectorAll('.word'), { y: 200 });

    ctx = gsap.context(() => {
      gsap
        .timeline({
          paused: true,
        })
        .to(sectionBandRef.value, {
          duration: 1.3,
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'power4.out',
          onComplete: () => {
            ScrollTrigger.refresh();
          }
        })
        .add(figuresReveal, '>0.5')
        .add(membersReveal, '<0.4')
        .play();

      function membersReveal() {
        membersRef.value.querySelectorAll('.line').forEach((line) => {
          gsap.to(line.querySelectorAll('.word'), {
            y: 0,
            duration: 1.4,
            stagger: 0.05,
            ease: 'power4.inOut',
          });
        });
      }

      function figuresReveal() {
        ScrollTrigger.batch('figure', {
          start: 'top bottom-=9%',
          once: true,
          // markers: true,
          onEnter: (figures) => {
            const rects = figures.flatMap((figure) => Array.from(figure.querySelectorAll('rect')))

            gsap.to(rects, {
              scaleY: 0,
              transformOrigin: 'bottom',
              '--scaleYBandColumnsReveal': '0%',
              stagger: {
                each: 0.035,
                from: "random"
              },
              duration: 1,
              ease: "power4.inOut",
              onStart: () => {
                figures.forEach(figure => {
                  const revealCol = figure.querySelector('.reveal-columns');
                  if (revealCol) revealCol.style.pointerEvents = 'none';
                });
              },
              onComplete: () => {
                figures.forEach(figure => {
                  const revealCol = figure.querySelector('.reveal-columns');
                  if (revealCol) revealCol.style.display = 'none';
                });
              },
            })
          },
        });
      }
    }, sectionBandRef.value);
  });

  onUnmounted(() => {
    ctx.revert();
  });
</script>

<style>
  :root {
    --scaleYBandColumnsReveal: 100%;
  }

  .reveal-columns rect {
    transform: scaleY(var(--scaleYBandColumnsReveal));
    transform-origin: bottom;
    will-change: auto;
  }
</style>
