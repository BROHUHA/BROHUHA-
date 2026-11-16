<template>
  <div ref="homeTimelineRef">
    <PreloaderFull v-if="!isPageLoaded" target=".timeline" text1="loading waves" text2="syncing spiral" @done="isPageLoaded = true; tryPlayAudio()" />

    <div ref="timelineRef" class="timeline relative z-10 top-0 left-0 w-screen min-h-lvh">
      <h1 class="sr-only">Home</h1>

      <HeroHypnotic :play="isPageLoaded" class="hero">
        <AppLogo class="logo w-full h-full fill-white" />
      </HeroHypnotic>

      <h2 class="sr-only">Who is Abin Binoy?</h2>

      <section ref="block1Ref" class="block1 absolute z-10 inset-0 flex flex-col items-center justify-center w-screen h-lvh">
        <div v-for="(video, index) in videos" :key="video.small" class="circles absolute top-0 left-0 w-full h-full" :class="`circle${index}`">
          <video class="w-full h-full object-cover rotate-180 brightness-70 will-change-[clip-path]" aria-hidden="true" preload="auto" autoplay muted loop playsinline disableremoteplayback>
            <source :src="`/videos/${video.large}`" type="video/mp4" media="(min-width: 1280px)">
            <source :src="`/videos/${video.small}`" type="video/mp4">
          </video>
        </div>
        <div class="container text-[clamp(1.5rem,_3.5vw,_3.5rem)] prose-black prose-p:leading-normal text-pretty">
          <p class="relative z-30">I'm Abin Binoy, a BCA graduate and dedicated Full-Stack Developer with over two years of experience, passionate about emerging technologies, continuous learning, and building innovative digital solutions.</p>
        </div>
      </section>

      <section ref="block2Ref" class="block2 absolute z-20 inset-0 flex flex-col items-center justify-center w-screen h-lvh">
        <div class="absolute z-10 top-0 left-0 w-full h-full">
          <video
            ref="showreelRef"
            class="showreel absolute top-0 left-0 w-full h-full object-cover mask-[url(/images/circles_mask.svg)] mask-type-alpha mask-cover mask-no-repeat mask-center brightness-80 will-change-[mask]"
            aria-hidden="true"
            preload="auto"
            autoplay
            :muted="isVideoMuted"
            loop
            playsinline
            disableremoteplayback
            @play="onVideoPlay"
            @pause="onVideoPause"
          >
            <source src="/videos/the_wolf_1080p.mp4" type="video/mp4" media="(min-width: 1920px)">
            <source src="/videos/the_wolf_720p.mp4" type="video/mp4" media="(min-width: 1280px)">
            <source src="/videos/the_wolf_480p.mp4" type="video/mp4" media="(min-width: 640px)">
            <source src="/videos/the_wolf_360p.mp4" type="video/mp4">
          </video>
        </div>
        <div class="container py-12 lg:py-40 text-[clamp(1.5rem,_3.5vw,_3.5rem)] text-white text-pretty">
          <p class="relative z-20">Driven by my curiosity and passion for technology, I constantly explore emerging innovations, experiment with creative ideas, and build meaningful digital experiences that combine functionality, creativity, and modern design.</p>
        </div>

        <!-- Song / Music Controller Floating Pill -->
        <div class="audio-toggle-wrapper absolute z-30 bottom-6 sm:bottom-10 right-4 sm:right-12">
          <div class="inline-flex items-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 pr-3 sm:pr-4 rounded-full border border-white/20 hover:border-white/40 bg-black/70 hover:bg-black/85 backdrop-blur-md text-white transition-all duration-300 shadow-2xl select-none">
            <!-- Play / Pause Action Button -->
            <button
              type="button"
              class="no-anim-underline inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 transition-all text-white cursor-pointer text-xs sm:text-sm font-semibold tracking-wide group"
              :title="isAudioPaused ? 'Play music' : 'Pause music'"
              @click="togglePlayPause"
            >
              <Icon
                :name="isAudioPaused ? 'solar:play-bold' : 'solar:pause-bold'"
                class="text-base sm:text-lg transition-transform group-hover:scale-110"
                :class="{ 'text-[#00ffc7]': !isAudioPaused }"
              />
              <span>{{ isAudioPaused ? 'Play' : 'Pause' }}</span>
            </button>

            <!-- Song Info & Wave Equalizer -->
            <div class="flex items-center gap-2 px-1 text-xs text-white/80">
              <span class="hidden sm:inline font-medium text-white/60">SIAMÉS</span>
              <div class="flex items-end gap-0.5 h-3.5" :title="isAudioPaused ? 'Paused' : (isVideoMuted ? 'Muted' : 'Playing')">
                <span class="w-0.5 rounded-full bg-[#00ffc7] transition-all duration-200" :class="!isAudioPaused && !isVideoMuted ? 'h-3 animate-pulse' : 'h-1 bg-white/30'" />
                <span class="w-0.5 rounded-full bg-[#00ffc7] transition-all duration-200" :class="!isAudioPaused && !isVideoMuted ? 'h-4 animate-pulse [animation-delay:150ms]' : 'h-1.5 bg-white/30'" />
                <span class="w-0.5 rounded-full bg-[#00ffc7] transition-all duration-200" :class="!isAudioPaused && !isVideoMuted ? 'h-2.5 animate-pulse [animation-delay:300ms]' : 'h-1 bg-white/30'" />
              </div>
            </div>

            <!-- Mute / Unmute Button -->
            <button
              type="button"
              class="no-anim-underline p-1.5 rounded-full hover:bg-white/20 active:scale-95 transition-all text-white/80 hover:text-white cursor-pointer ml-0.5"
              :title="isVideoMuted ? 'Unmute audio' : 'Mute audio'"
              @click="toggleMute"
            >
              <Icon
                :name="isVideoMuted ? 'solar:volume-cross-bold' : 'solar:volume-loud-bold'"
                class="text-base sm:text-lg"
                :class="{ 'text-red-400': isVideoMuted, 'text-[#00ffc7]': !isVideoMuted && !isAudioPaused }"
              />
            </button>
          </div>
        </div>
      </section>

      <section class="block3 absolute z-30 inset-0 flex flex-col items-center justify-center w-screen h-lvh overflow-hidden">
        <div class="animation-circles absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full origin-center">
          <AnimationCircles class="object-cover w-full h-full" />
        </div>

        <div class="container flex flex-col items-center justify-center text-[clamp(1.5rem,_3.5vw,_3.5rem)] prose-white prose-p:leading-normal text-pretty text-white mix-blend-difference">
          <p class="">Outside the screen, I'm just someone who enjoys good music, random ideas, late-night curiosity, and making things unnecessarily complicated just to find a simpler solution.</p>
        </div>

        <div ref="buttonHypnoticRef" class="button-hypnotic absolute top-0 left-0 flex items-center justify-center w-full h-full p-4 sm:px-16">
          <ButtonHypnotic to="/works">View works</ButtonHypnotic>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
  import { isFirefoxMobile } from "#imports";
  import { pageTransitionConfig } from '~/helpers/transitionConfig';

  import gsap from "gsap";
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { SplitText } from "gsap/SplitText";

  gsap.registerPlugin(ScrollTrigger, SplitText);

  definePageMeta({
    pageTransition: pageTransitionConfig,
  });

  const videos = {
    0: {
      'small': 'woman_dancing_480p.mp4',
      'large': 'woman_dancing_720p.mp4',
    },
    1: {
      'small': 'vhs_480p.mp4',
      'large': 'vhs_720p.mp4',
    },
    2: {
      'small': 'subway_480p.mp4',
      'large': 'subway_720p.mp4',
    },
    3: {
      'small': 'woman_finger_640p.mp4',
      'large': 'woman_finger_720p.mp4',
    },
    4: {
      'small': 'factories_480p.mp4',
      'large': 'factories_720p.mp4',
    },
  }
  const isPageLoaded = ref(false);
  const homeTimelineRef = useTemplateRef('homeTimelineRef');
  const timelineRef = useTemplateRef('timelineRef');
  const block1Ref = useTemplateRef('block1Ref');
  const block2Ref = useTemplateRef('block2Ref');
  const showreelRef = useTemplateRef('showreelRef');
  const buttonHypnoticRef = useTemplateRef('buttonHypnoticRef');
  const isVideoMuted = ref(false); // Music unmuted by default
  const isAudioPaused = ref(false); // Music playing by default

  const togglePlayPause = () => {
    if (!showreelRef.value) return;
    if (showreelRef.value.paused) {
      showreelRef.value.play().then(() => {
        isAudioPaused.value = false;
      }).catch(() => {});
    } else {
      showreelRef.value.pause();
      isAudioPaused.value = true;
    }
  };

  const toggleMute = () => {
    if (!showreelRef.value) return;
    isVideoMuted.value = !isVideoMuted.value;
    showreelRef.value.muted = isVideoMuted.value;
  };

  const onVideoPlay = () => {
    isAudioPaused.value = false;
  };

  const onVideoPause = () => {
    isAudioPaused.value = true;
  };

  const tryPlayAudio = () => {
    if (!showreelRef.value || isAudioPaused.value) return;
    showreelRef.value.muted = isVideoMuted.value;
    showreelRef.value.play().then(() => {
      isAudioPaused.value = false;
    }).catch(() => {
      // Browser autoplay policy requires user interaction first: unlock on first gesture
      const unlockAudio = () => {
        if (showreelRef.value && !isAudioPaused.value) {
          showreelRef.value.muted = isVideoMuted.value;
          showreelRef.value.play().then(() => {
            isAudioPaused.value = false;
          }).catch(() => {});
        }
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('scroll', unlockAudio);
        window.removeEventListener('touchstart', unlockAudio);
        window.removeEventListener('wheel', unlockAudio);
      };
      window.addEventListener('click', unlockAudio, { once: true });
      window.addEventListener('scroll', unlockAudio, { once: true });
      window.addEventListener('touchstart', unlockAudio, { once: true });
      window.addEventListener('wheel', unlockAudio, { once: true });
    });
  };
  let block1Split, block2Split, block3Split;
  let ctx;

  useSeoMeta({
    title: 'Home | Abin Binoy',
    description: 'Abin Binoy Portfolio',
    ogTitle: 'Home | Abin Binoy',
    ogDescription: 'Abin Binoy Portfolio',
  })

  onMounted(async () => {
    await document.fonts.ready;

    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    ctx = gsap.context(() => {
      block1Split = SplitText.create(".block1 p", {
        type: 'lines, words',
      });
      block2Split = SplitText.create(".block2 p", {
        type: 'lines, words',
      });
      block3Split = SplitText.create(".block3 p", {
        type: 'lines, words',
      });

      gsap.set('.circle0, .circle1, .circle2, .circle3, .circle4', {
        clipPath: 'circle(0% at 50% 50%)',
      });
      gsap.set(showreelRef.value, {
        autoAlpha: 0,
        maskSize: '100% 100%',
      });
      gsap.set('.animation-circles', {
        scale: isFirefoxMobile() ? 4 : 10,
        autoAlpha: 0,
      });

      // Timeline for circles animation in block 3.
      const tlCircles = gsap.timeline({
        paused: true,
        repeat: -1,
        defaults: {
          ease: 'sine.inOut',
          stagger: {
            each: 0.02,
            from: 'end'
          }
        },
      })
      tlCircles.
        fromTo('.animation-circles .circle', {
          yPercent: -2,
          xPercent: 0,
        }, {
          yPercent: -9,
          xPercent: -6,
          duration: 1.8,
        })
        .to('.animation-circles .circle', {
          yPercent: 2,
          xPercent: -6,
          duration: 2,
        })
        .to('.animation-circles .circle', {
          yPercent: 5,
          xPercent: 5,
          duration: 1.8,
        })
        .to('.animation-circles .circle', {
          yPercent: -11,
          xPercent: 11,
          duration: 2,
        })
        .to('.animation-circles .circle', {
          yPercent: -2,
          xPercent: 0,
          duration: 1.9,
        })

      // Main timeline.
      gsap.
        timeline({
          defaults: {
            ease: 'none'
          },
          scrollTrigger: {
            trigger: timelineRef.value,
            start: 'top top',
            end: '+=1300%',
            pin: true,
            scrub: 2,
            preventOverlaps: true,
            fastScrollEnd: true,
            // markers: true,
          }
        })
        .fromTo('.hero .bg-wrapper', {
          clipPath: 'circle(100% at 50% 50%)',
        }, {
          clipPath: 'circle(0% at 50% 50%)',
        })
        .to('.hero .logo', {
          scale: 20,
          rotate: 45,
          ease: 'power1.in',
        })
        .to('.hero', {
          autoAlpha: 0,
          ease: 'power4.in',
        }, '<-=1%')
        .from(block1Split.words, {
          yPercent: 100,
          autoAlpha: 0,
          filter: isFirefoxMobile() ? 'blur(0px)' : 'blur(4px)',
          ease: 'power4.out',
          stagger: 0.015,
        }, '<0.3')
        .to('.circle0', {
          clipPath: 'circle(64% at 50% 50%)',
          ease: "back.out(1)",
        }, '<0.6')
        .to(block1Ref.value, {
          color: '#ffffff',
          ease: "power1",
        }, '<')
        .to('.circle1', {
          clipPath: 'circle(47% at 50% 50%)',
          ease: "back.out(1.2)",
        }, '<0.2')
        .to('.circle2', {
          clipPath: 'circle(33% at 50% 50%)',
          ease: "back.out(1)",
        }, '<0.1')
        .to('.circle3', {
          clipPath: 'circle(25% at 50% 50%)',
          ease: "power4",
        }, '<0.2')
        .to('.circle4', {
          clipPath: 'circle(11% at 50% 50%)',
          ease: "power4",
        }, '<0.1')
        .to(block1Split.lines, {
          autoAlpha: 0,
          stagger: 0.02,
          yPercent: -200,
          filter: isFirefoxMobile() ? 'blur(0px)' : 'blur(4px)',
          ease: 'power4.in',
        }, '<')
        .to('.circle0, .circle1, .circle2, .circle3, .circle4', {
          clipPath: 'circle(0% at 50% 50%)',
          ease: "power4.inOut",
        }, '<0.3')
        .to(showreelRef.value, {
          autoAlpha: 1,
          maskSize: '30% 30%',
          ease: 'power3.inOut',
          onStart: () => {
            tryPlayAudio();
          },
        }, '<')
        .to(showreelRef.value, {
          maskSize: '200% 200%',
          ease: 'power4.inOut',
        }, '<0.4')
        .to(timelineRef.value, {
          backgroundColor: '#000000',
          ease: 'power3',
        }, '<0.2')
        .to(showreelRef.value, {
          maskSize: '800% 800%',
          duration: 0.7,
          ease: 'power4.in',
        }, '<0.3')
        .from(block2Split.words, {
          yPercent: 100,
          autoAlpha: 0,
          filter: isFirefoxMobile() ? 'blur(0px)' : 'blur(4px)',
          ease: 'power4.out',
          stagger: 0.01,
        }, '<')
        .to(block2Split.lines, {
          yPercent: -200,
          autoAlpha: 0,
          filter: isFirefoxMobile() ? 'blur(0px)' : 'blur(4px)',
          ease: 'power4.in',
          stagger: 0.03,
        }, '<.8')
        .to(block2Ref.value, {
          autoAlpha: 0,
        })
        .to('.animation-circles', {
          scale: isPortrait ? 3 : 1.5,
          autoAlpha: 1,
          translateZ: 0,
          ease: 'power1',
        }, '<0.3')
        .to('.animation-circles .circle', {
          scale: 30,
          translateZ: 0,
          transformOrigin: 'center center',
          ease: 'power4.in',
          stagger: {
            each: 0.1
          },
          onStart: () => {
            tlCircles.pause();
          },
          onReverseComplete: () => {
            gsap.to('.animation-circles .circle', {
              yPercent: -2,
              xPercent: 0,
              duration: 1.8,
              ease: 'sine.inOut',
              stagger: {
                each: 0.02,
                from: 'end'
              },
              onComplete: () => {
                tlCircles.play(0);
              }
            })
          },
        })
        .from(block3Split.words, {
          yPercent: 100,
          autoAlpha: 0,
          filter: isFirefoxMobile() ? 'blur(0px)' : 'blur(4px)',
          ease: 'power4.out',
          stagger: 0.01,
        }, '<0.6')
        .to(block3Split.lines, {
          yPercent: -200,
          autoAlpha: 0,
          filter: isFirefoxMobile() ? 'blur(0px)' : 'blur(4px)',
          ease: 'power4.in',
          stagger: 0.03,
        }, '<0.6')
        .from(buttonHypnoticRef.value, {
          autoAlpha: 0,
          scale: 0.8,
          ease: 'back.inOut(3)',
          onComplete: () => {
            tlCircles.play(0);
          },
          onReverseComplete: () => {
            tlCircles.pause();
          },
        }, '<0.3')
        .to('.animation-circles .circle.sound', {
          scale: 0.8,
          translateZ: 0,
          ease: 'power4.out',
        })
        .to(timelineRef.value, {}) // Simulate a scroll pause.

    }, homeTimelineRef.value);
  })

  onBeforeRouteLeave(() => {
    // GSAP timeline "goes blank" and nothing shows on screen when you click a link.
    // Scrolling the document makes a trick and keeps the timeline while the page transition is running (hacky?).
    window.scrollTo(0, 0);
    ctx.kill();
  });

  onUnmounted(() => {
    ctx.revert();
    block1Split.revert();
    block2Split.revert();
    block3Split.revert();
  });
</script>
