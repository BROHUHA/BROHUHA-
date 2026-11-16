<template>
  <footer ref="footerMainRef" class="footer-main bg-black">
    <div class="bg-white mt-40 lg:mt-50 rounded-b-3xl min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] flex flex-col justify-end items-start px-6 sm:px-10 lg:px-14 pb-2 lg:pb-6">
      <AppLogo class="relative z-20 w-[85%] sm:w-[65%] lg:w-[48%] xl:w-[40%] max-w-[720px]" />
    </div>
    <div class="relative z-20 bg-black h-[250px] [clip-path:inset(0_0_0_0)]">
      <div ref="footerContentRef" class="footer-content fixed left-0 bottom-0 h-[250px] w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-6 py-14 md:py-40 md:px-14 bg-black text-white">
        <SocialLinks class="text-4xl" />
        <div class="copyright flex flex-col lg:flex-row gap-2.5 [&_a]:anim-underline-white">
          <p>&copy; {{ currentYear }} Abin Binoy (4bin / BROHUHA) <span class="inline-block ml-2.5">&pi; <NuxtLink to="/privacy">Privacy policy</NuxtLink></span></p>
          <p>&infin; Site by <a href="https://4bin.vercel.app" target="_blank" rel="noopener noreferrer">4bin (Abin Binoy)</a>
            <DanHummingbird />
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const currentYear = new Date().getFullYear();
</script>
