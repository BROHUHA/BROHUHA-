<template>
  <div ref="homeTimelineRef">
    <PreloaderFull v-if="!isPageLoaded" target=".timeline" text1="loading waves" text2="syncing spiral" @done="isPageLoaded = true; startMusic()" />

    <!-- Global Background Audio (SIAMÉS - The Wolf) -->
    <audio
      ref="audioRef"
      src="/audio/the_wolf.mp3"
      loop
      preload="auto"
      playsinline
      @play="isMuted = false"
      @pause="isMuted = true"
    />

    <!-- Minimal Floating Audio Control (Icon Only + Wave Click Animation) -->
    <div class="fixed z-50 bottom-5 right-5 sm:bottom-8 sm:right-8">
      <button
        type="button"
        class="no-anim-underline relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/75 hover:bg-black/90 active:scale-80 transition-all duration-300 border border-white/20 hover:border-white/60 backdrop-blur-md shadow-2xl cursor-pointer select-none group"
        :title="isMuted ? 'Play music' : 'Mute music'"
        :aria-label="isMuted ? 'Play music' : 'Mute music'"
        @click="handleToggleMute"
      >
        <!-- Matching Hypnotic Ripple Wave Animation on Click -->
        <span
          v-if="isRippling"
          class="absolute inset-0 rounded-full border-2 border-white/70 animate-ping pointer-events-none"
        />
        <!-- Ambient Sound Ring when Music is Active -->
        <span
          v-if="!isMuted"
          class="absolute -inset-1 rounded-full border border-white/20 animate-pulse pointer-events-none"
        />

        <!-- Pure Minimal Icon -->
        <Icon
          :name="isMuted ? 'solar:volume-cross-bold' : 'solar:volume-loud-bold'"
          class="text-xl sm:text-2xl transition-all duration-300 group-hover:scale-110"
          :class="isMuted ? 'text-white/40' : 'text-white'"
        />
      </button>
    </div>

    <div ref="timelineRef" class="timeline relative z-10 top-0 left-0 w-screen min-h-lvh">
      <h1 class="sr-only">Home</h1>

      <HeroHypnotic :play="isPageLoaded" class="hero">
        <AppLogo class="logo w-full h-full fill-white" />
      </HeroHypnotic>

      <h2 class="sr-only">Who is Abin Binoy?</h2>

      <section ref="block1Ref" class="block1 absolute z-10 inset-0 flex flex-col items-center justify-center w-screen h-lvh">
        <div v-for="(video, index) in videos" :key="index" class="circles absolute top-0 left-0 w-full h-full" :class="`circle${index}`">
          <video class="w-full h-full object-cover brightness-75 will-change-[clip-path]" aria-hidden="true" preload="auto" autoplay muted loop playsinline webkit-playsinline disableremoteplayback>
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
            muted
            loop
            playsinline
            disableremoteplayback
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
      'small': 'portfolio_720p.mp4',
      'large': 'portfolio_1080p.mp4',
    },
    1: {
      'small': 'apkcook_720p.mp4',
      'large': 'apkcook_1080p.mp4',
    },
    2: {
      'small': 'allqr_720p.mp4',
      'large': 'allqr_1080p.mp4',
    },
    3: {
      'small': 'apkcook_720p.mp4',
      'large': 'apkcook_1080p.mp4',
    },
    4: {
      'small': 'portfolio_720p.mp4',
      'large': 'portfolio_1080p.mp4',
    },
  }
  const isPageLoaded = ref(false);
  const homeTimelineRef = useTemplateRef('homeTimelineRef');
  const timelineRef = useTemplateRef('timelineRef');
  const block1Ref = useTemplateRef('block1Ref');
  const block2Ref = useTemplateRef('block2Ref');
  const showreelRef = useTemplateRef('showreelRef');
  const buttonHypnoticRef = useTemplateRef('buttonHypnoticRef');
  const audioRef = useTemplateRef('audioRef');
  const isMuted = ref(false);
  const isRippling = ref(false);
  let hasMusicStarted = false;

  const triggerRipple = () => {
    isRippling.value = true;
    setTimeout(() => {
      isRippling.value = false;
    }, 600);
  };

  const unlockAudio = () => {
    ['pointerdown', 'touchstart', 'touchend', 'click', 'scroll', 'wheel', 'keydown'].forEach(evt => {
      window.removeEventListener(evt, unlockAudio);
    });

    if (audioRef.value && audioRef.value.paused) {
      if (!hasMusicStarted) {
        audioRef.value.currentTime = 0;
        hasMusicStarted = true;
      }
      audioRef.value.muted = false;
      audioRef.value.play().then(() => {
        isMuted.value = false;
      }).catch(() => {});
    }
  };

  const startMusic = () => {
    if (!audioRef.value) return;

    // If audio is already active and playing, NEVER reset currentTime or restart
    if (!audioRef.value.paused && hasMusicStarted) {
      return;
    }

    if (!hasMusicStarted) {
      audioRef.value.currentTime = 0;
    }
    audioRef.value.muted = false;
    isMuted.value = false;

    const playPromise = audioRef.value.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        hasMusicStarted = true;
        isMuted.value = false;
      }).catch(() => {
        // Autoplay policy prevented immediate playback without interaction (e.g. mobile)
        // Attach one-time unlock listeners
        ['pointerdown', 'touchstart', 'touchend', 'click', 'scroll', 'wheel', 'keydown'].forEach(evt => {
          window.addEventListener(evt, unlockAudio, { passive: true, once: true });
        });
      });
    }
  };

  const handleToggleMute = () => {
    triggerRipple();
    if (!audioRef.value) return;

    if (isMuted.value || audioRef.value.paused) {
      // Unmute & play from start
      audioRef.value.currentTime = 0;
      audioRef.value.muted = false;
      hasMusicStarted = true;
      audioRef.value.play().then(() => {
        isMuted.value = false;
      }).catch(() => {});
    } else {
      // Mute & pause
      audioRef.value.muted = true;
      audioRef.value.pause();
      isMuted.value = true;
    }
  };

  onBeforeUnmount(() => {
    ['pointerdown', 'touchstart', 'touchend', 'click', 'scroll', 'wheel', 'keydown'].forEach(evt => {
      window.removeEventListener(evt, unlockAudio);
    });
    if (audioRef.value) {
      audioRef.value.pause();
    }
  });
  let block1Split, block2Split, block3Split;
  let ctx;

  useSeoMeta({
    title: 'Home | Abin Binoy',
    description: 'Abin Binoy Portfolio',
    ogTitle: 'Home | Abin Binoy',
    ogDescription: 'Abin Binoy Portfolio',
  })

  onMounted(async () => {
    startMusic();
    await document.fonts.ready;

    if (block1Ref.value) {
      const circleVideos = block1Ref.value.querySelectorAll('video');
      circleVideos.forEach(v => {
        v.muted = true;
        v.defaultMuted = true;
        v.play().catch(() => {});
      });
    }

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
            if (showreelRef.value) {
              showreelRef.value.muted = true;
              showreelRef.value.defaultMuted = true;
              if (audioRef.value && !audioRef.value.paused && Number.isFinite(showreelRef.value.duration) && showreelRef.value.duration > 0) {
                showreelRef.value.currentTime = audioRef.value.currentTime % showreelRef.value.duration;
              }
              showreelRef.value.play().catch(() => {});
            }
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
          duration: 0.8,
          ease: 'power2.inOut',
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
