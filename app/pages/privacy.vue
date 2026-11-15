<template>
  <section ref="privacyPageRef" class="privacy-page container place-content-center min-h-dvh prose-lg prose-h1:text-[clamp(3rem,_10vw,_4.6rem)] prose-h1:mb-0 md:text-balance">
    <h1>Privacy policy & cookies</h1>
    <p>We care about your (and our) privacy. That’s why we don’t use cookies on this website, and we’re not planning to. We’re not interested in tracking visitors or collecting data about you, that’s just not what we do.</p>
    <p>Our only goal is to share our music with you. Nothing more, nothing less.</p>
    <p>That said, our website is hosted by a third-party provider, and they might use their own cookies for things like security or basic site performance. That part is outside of our control, but from our side, we keep things as cookie-free as possible.</p>
    <p>We don't sell food either, but our advice is to eat more vegetables to stay healthy. We also encourage you to support Spanish products; our Ibérico ham and olive oil are among the wonders of the world.</p>
    <p>Today, save your weekend. Tomorrow, save your soul.</p>
  </section>
</template>

<script setup>
  import { pageTransitionConfig } from '~/helpers/transitionConfig';
  import gsap from "gsap";
  import { SplitText } from "gsap/SplitText";

  gsap.registerPlugin(SplitText);

  definePageMeta({
    pageTransition: pageTransitionConfig,
  });
  const privacyPageRef = useTemplateRef('privacyPageRef');
  let ctx;

  useSeoMeta({
    title: 'Privacy policy & cookies | Abin Binoy',
    description: 'Privacy policy & cookies information',
    ogTitle: 'Privacy policy & cookies | Abin Binoy',
    ogDescription: 'Privacy policy & cookies information',
  })

  onMounted(() => {
    const contents = document.querySelectorAll('.privacy-page h1, .privacy-page p');
    ctx = gsap.context(() => {
      contents.forEach(content => {
        const contentSplit = SplitText.create(content, {
          type: 'lines, words',
          mask: 'lines'
        })
        gsap.from(contentSplit.lines, {
          duration: 1.2,
          yPercent: 150,
          ease: 'power4.inOut',
        })
      })
    }, privacyPageRef.value)
  })

  onUnmounted(() => {
    ctx.revert();
  });
</script>
