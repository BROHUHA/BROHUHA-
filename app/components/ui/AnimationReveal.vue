<template>
  <div ref="outerWrapperRef" class="outer-wrapper relative w-fit">
    <div class="anim-reveal-columns absolute z-90 inset-0 w-full h-full pointer-events-none overflow-hidden">
      <DynamicColumns :min="min" :max="max" :fill-color="fillColor" />
    </div>
    <div ref="innerWrapperRef" class="inner-wrapper w-full h-full">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import gsap from 'gsap';
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  const props = defineProps({
    fillColor: {
      type: String,
      default: 'black',
    },
    min: {
      type: Number,
      default: 5,
    },
    max: {
      type: Number,
      default: 7,
    },
    delay: {
      type: Number,
      default: null,
    },
    scrollTrigger: {
      type: Boolean,
      default: true,
    },
  });

  const emit = defineEmits(['start', 'done'])

  const outerWrapperRef = useTemplateRef('outerWrapperRef');
  const innerWrapperRef = useTemplateRef('innerWrapperRef');
  let ctx;

  onMounted(() => {
    ctx = gsap.context(() => {
      gsap.set([innerWrapperRef.value, '.anim-reveal-columns rect'], {
        autoAlpha: 0,
      });

      // Snappy response for scrolling with slight natural jitter
      const scrollJitter = +(Math.random() * 0.06 + 0.02).toFixed(2);
      const effectiveDelay = props.delay !== null 
        ? props.delay 
        : (props.scrollTrigger ? scrollJitter : +(Math.random() * 0.3 + 0.1).toFixed(2));

      const tlConfig = {
        delay: effectiveDelay,
        onStart: () => {
          emit('start');
        },
        onComplete: () => {
          emit('done');
        },
      };

      if (props.scrollTrigger && outerWrapperRef.value) {
        tlConfig.scrollTrigger = {
          trigger: outerWrapperRef.value,
          start: 'top bottom-=5%',
          once: true,
        };
      }

      gsap
        .timeline(tlConfig)
        .to('.anim-reveal-columns rect', {
          '--scaleYColumnsReveal': "100%",
          duration: 0.52,
          ease: "power3.inOut",
          onStart: () => {
            gsap.set('.anim-reveal-columns rect', {
              '--transformOrigin': "top",
              autoAlpha: 1,
            })
          },
          onComplete: () => {
            gsap.set('.anim-reveal-columns rect', {
              '--transformOrigin': "bottom",
            })
            gsap.set(innerWrapperRef.value, {
              autoAlpha: 1,
            })
          }
        })
        .to('.anim-reveal-columns rect', {
          delay: 0.06,
          '--scaleYColumnsReveal': 0,
          stagger: {
            each: 0.022,
            from: "random"
          },
          duration: 0.52,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set('.anim-reveal-columns', {
              autoAlpha: 0,
            })
          }
        })

    }, outerWrapperRef.value);
  })

  onUnmounted(() => {
    if (ctx) ctx.revert();
  });
</script>

<style>
  :root {
    --scaleYColumnsReveal: 0;
    --transformOrigin: top;
  }

  .anim-reveal-columns rect {
    transform-box: fill-box;
    transform: scaleY(var(--scaleYColumnsReveal));
    transform-origin: var(--transformOrigin);
    will-change: transform;
  }

  @media print {
    .outer-wrapper {
      width: 100% !important;
      max-width: 100% !important;
      position: static !important;
    }

    .inner-wrapper {
      opacity: 1 !important;
      visibility: visible !important;
      transform: none !important;
      display: block !important;
      width: 100% !important;
      height: auto !important;
    }

    .anim-reveal-columns {
      display: none !important;
    }
  }
</style>
