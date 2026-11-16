<template>
  <nav ref="albumNavRef" class="album-navigation my-4 flex items-center justify-between flex-wrap gap-2.5 sm:gap-3 text-lg sm:text-xl lg:text-2xl [&_a]:hover:text-black [&_a]:hover:no-underline" aria-label="Project navigation">
    <ul class="flex items-center gap-3.5 sm:gap-6 [&_.active]:text-black">
      <li><a href="#music" class="active" @click.prevent="handleClick">Works</a></li>
      <li><a href="#info" @click.prevent="handleClick">Info</a></li>
      <li><a href="#tracklist" @click.prevent="handleClick">Tools</a></li>
    </ul>
    <button
      type="button"
      class="share-button no-anim-underline inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm font-bold rounded-full border border-neutral-300 hover:border-black text-neutral-700 hover:text-black bg-white transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
      :title="copied ? 'Link copied to clipboard!' : 'Share this project'"
      @click="handleShare"
    >
      <Icon :name="copied ? 'solar:check-circle-bold' : 'solar:share-linear'" class="text-base sm:text-lg transition-transform" :class="{ 'text-emerald-600': copied }" />
      <span>{{ copied ? 'Copied!' : 'Share' }}</span>
    </button>
  </nav>
</template>

<script setup>
  const emit = defineEmits(['activeSectionId']);
  const albumNavRef = ref(null);
  const copied = ref(false);

  const handleClick = (e) => {
    const navLinks = albumNavRef.value.querySelectorAll('ul a');
    const url = new URL(e.target.href);
    const anchor = url.hash;

    navLinks.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');

    emit('activeSectionId', anchor);
  };

  const handleShare = async () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://github.com/BROHUHA';
    const pageTitle = typeof document !== 'undefined' ? document.title : 'Abin Binoy Portfolio';
    const shareData = {
      title: pageTitle,
      text: `Check out ${pageTitle}`,
      url: shareUrl,
    };

    if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if (err.name === 'AbortError') return;
      }
    }

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        copied.value = true;
        setTimeout(() => {
          copied.value = false;
        }, 2200);
        return;
      }
    } catch {
      // Fallback below
    }

    try {
      const textarea = document.createElement('textarea');
      textarea.value = shareUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2200);
    } catch {
      // Ignore
    }
  };
</script>
