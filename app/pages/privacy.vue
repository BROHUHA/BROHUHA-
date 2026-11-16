<template>
  <section ref="privacyPageRef" class="privacy-page container place-content-center min-h-dvh prose-lg prose-h1:text-[clamp(2.5rem,_8vw,_4.2rem)] prose-h1:mb-6 md:text-balance py-20 sm:py-28">
    <h1>PRIVACY POLICY & COOKIES</h1>
    <p>I care about your privacy. Mostly because I’d also like mine to remain intact. So, I don’t use this portfolio to secretly collect your personal information, stalk your browsing habits, or figure out why you opened this website at 2 AM.</p>
    <p>I’m here to show you my work, projects, and a little bit of what goes on inside my developer brain. That’s pretty much it. No secret agenda. No evil data empire.</p>
    <p>I don’t intentionally use cookies to track you around the internet. If something from the hosting provider or another third-party service decides to bring its own cookies to the party, that’s their thing, not mine. I’ll keep my side of the website as simple and privacy-friendly as possible.</p>
    <p>I don’t sell your data, trade your information, or build a suspicious little spreadsheet about you. I have enough spreadsheets and bugs to deal with already.</p>
    <p>If you send me something through this website, I’ll only use it for the reason you sent it. I won’t suddenly decide that your email belongs in a marketing campaign you never asked for. That would be weird. And slightly annoying.</p>
    <p>So, explore the portfolio, judge my code, admire the animations, and pretend you didn’t notice that one tiny alignment issue.</p>
    <p class="font-bold text-white pt-2"><strong>Your privacy stays yours. My bugs stay mine. Fair deal.</strong></p>
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
    title: 'Privacy Policy | 4bin - Abin Binoy (BROHUHA)',
    description: 'Privacy policy and data protection principles of 4bin (Abin Binoy / BROHUHA).',
    ogTitle: 'Privacy Policy | 4bin - Abin Binoy (BROHUHA)',
    ogDescription: 'Privacy policy and data protection principles of 4bin (Abin Binoy / BROHUHA).',
    ogImage: 'https://4bin.vercel.app/images/og-cover.jpg',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://4bin.vercel.app/images/og-cover.jpg',
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
