<template>
  <svg class="anim-svg-circles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 714 714" fill="currentColor" aria-hidden="true">
    <g class="circle">
      <circle cx="357" cy="357" r="318" fill="black" />
    </g>
    <g class="circle">
      <circle cx="357" cy="357" r="260" fill="white" />
    </g>
    <g class="circle">
      <circle cx="357" cy="357" r="218" fill="black" />
    </g>
    <g class="circle">
      <circle cx="357" cy="357" r="175" fill="white" />
    </g>
    <g class="circle">
      <circle cx="357" cy="357" r="150" fill="black" />
    </g>
    <g class="circle">
      <circle cx="357" cy="357" r="124" fill="white" />
    </g>
    <g class="circle sound">
      <circle cx="357" cy="357" r="95" fill="black" />
    </g>
    <g class="circle sound">
      <circle cx="357" cy="357" r="65" fill="white" />
    </g>
    <g class="circle sound">
      <circle cx="357" cy="357" r="40" fill="black" />
    </g>
  </svg>
</template>

<script setup>
  import { isFirefoxMobile } from "#imports";
  import gsap from "gsap";

  onMounted(() => {
    gsap.set('.anim-svg-circles circle', {
      transformOrigin: 'center center'
    })
    gsap.from('.anim-svg-circles circle', {
      scale: 0.84,
      translateZ: 0,
      duration: 0.8,
      force3D: true,
      ease: 'back(3.8)',
      stagger: {
        each: -0.061,
        repeat: -1,
        yoyo: true
      },
    }, 0.6)
  })
</script>
