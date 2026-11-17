<template>
  <section ref="contactPageRef" class="contact-page container min-h-dvh pt-28 sm:pt-36 pb-24 sm:pb-32">
    <!-- Header -->
    <header class="contact-header mb-10 sm:mb-14">
      <AnimationReveal>
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-neutral-500 hover:text-black transition-colors duration-200 mb-6 no-underline"
        >
          <Icon name="ion:arrow-left-c" class="text-base" />
          <span>Back to Home</span>
        </NuxtLink>
      </AnimationReveal>

      <AnimationReveal>
        <h1 class="text-[clamp(2.5rem,_7vw,_5rem)] font-extrabold uppercase tracking-tight text-black m-0 leading-none">
          LET'S CONNECT
        </h1>
      </AnimationReveal>

      <AnimationReveal class="w-full mt-4">
        <p class="text-neutral-600 text-base sm:text-lg max-w-2xl leading-relaxed text-pretty m-0">
          Have a project idea, an engineering opportunity, or want to discuss software and tech? Choose a channel below or open the collaboration sheet.
        </p>
      </AnimationReveal>
    </header>

    <!-- Contact Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      <!-- Open Collaboration Card (Featured / Opens Email Sheet) -->
      <div class="contact-card-wrapper md:col-span-2 lg:col-span-2 relative overflow-hidden rounded-3xl">
        <div class="reveal-columns absolute z-90 inset-0 w-full h-full pointer-events-none">
          <DynamicColumns :min="5" :max="7" fill-color="#ffffff" />
        </div>
        <div class="contact-card w-full h-full relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border-2 border-white/20 hover:border-white/50 transition-all duration-300 flex flex-col justify-between shadow-2xl">
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center text-2xl font-bold shadow-lg">
                <Icon name="solar:letter-bold" />
              </div>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Open for Opportunities
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-2">Open Collaboration</h2>
            <p class="text-neutral-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Looking for a dedicated Full-Stack Developer for your next project, architecture consulting, or full-time engineering roles? Open the collaboration sheet to send a direct message.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-start">
            <button
              type="button"
              class="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all cursor-pointer shadow-md active:scale-95"
              @click="isSheetOpen = true"
            >
              <span>Open Collaboration Sheet</span>
              <Icon name="solar:chat-round-line-bold" class="text-base" />
            </button>
          </div>
        </div>
      </div>

      <!-- Direct Email Card (Sensitive info hidden) -->
      <div class="contact-card-wrapper relative overflow-hidden rounded-3xl">
        <div class="reveal-columns absolute z-90 inset-0 w-full h-full pointer-events-none">
          <DynamicColumns :min="5" :max="6" fill-color="#ffffff" />
        </div>
        <div class="contact-card w-full h-full relative p-6 sm:p-8 rounded-3xl bg-[#111111] border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-white">
                <Icon name="simple-icons:gmail" />
              </div>
              <span class="text-xs uppercase tracking-wider text-neutral-400 font-mono">Direct Mail</span>
            </div>
            <h2 class="text-xl font-bold text-white mb-1">Email</h2>
            <p class="text-sm text-neutral-400 leading-relaxed">Send an inquiry directly to my inbox anytime.</p>
          </div>
          <div class="mt-6 pt-4 border-t border-neutral-800/80">
            <a
              href="mailto:abinbinoy2000@gmail.com"
              class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors no-underline text-center"
            >
              <span>Compose Email</span>
              <Icon name="solar:arrow-right-up-linear" class="text-base" />
            </a>
          </div>
        </div>
      </div>

      <!-- WhatsApp Card (Phone number hidden) -->
      <div class="contact-card-wrapper relative overflow-hidden rounded-3xl">
        <div class="reveal-columns absolute z-90 inset-0 w-full h-full pointer-events-none">
          <DynamicColumns :min="5" :max="6" fill-color="#ffffff" />
        </div>
        <a
          href="https://wa.me/918075747414"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card group w-full h-full relative p-6 sm:p-8 rounded-3xl bg-[#111111] border border-neutral-800 hover:border-[#25D366]/60 transition-all duration-300 flex flex-col justify-between no-underline"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#25D366]/15 flex items-center justify-center text-2xl text-[#25D366] group-hover:scale-110 transition-transform duration-300">
                <Icon name="simple-icons:whatsapp" />
              </div>
              <span class="text-xs uppercase tracking-wider text-neutral-400 font-mono">Instant Chat</span>
            </div>
            <h2 class="text-xl font-bold text-white mb-1">WhatsApp</h2>
            <p class="text-sm text-neutral-400 leading-relaxed">Quick message, instant response, and direct communication.</p>
          </div>
          <div class="flex items-center justify-between mt-6 pt-4 border-t border-neutral-800/80 text-xs font-semibold uppercase tracking-wider text-[#25D366]">
            <span>Chat on WhatsApp</span>
            <Icon name="solar:arrow-right-up-linear" class="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </a>
      </div>

      <!-- LinkedIn Card (Handle hidden) -->
      <div class="contact-card-wrapper relative overflow-hidden rounded-3xl">
        <div class="reveal-columns absolute z-90 inset-0 w-full h-full pointer-events-none">
          <DynamicColumns :min="5" :max="6" fill-color="#ffffff" />
        </div>
        <a
          href="https://www.linkedin.com/in/abinn-binoyy/"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card group w-full h-full relative p-6 sm:p-8 rounded-3xl bg-[#111111] border border-neutral-800 hover:border-[#0A66C2]/60 transition-all duration-300 flex flex-col justify-between no-underline"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#0A66C2]/15 flex items-center justify-center text-2xl text-[#0A66C2] group-hover:scale-110 transition-transform duration-300">
                <Icon name="simple-icons:linkedin" />
              </div>
              <span class="text-xs uppercase tracking-wider text-neutral-400 font-mono">Professional</span>
            </div>
            <h2 class="text-xl font-bold text-white mb-1">LinkedIn</h2>
            <p class="text-sm text-neutral-400 leading-relaxed">Connect professionally, view recommendations, and experience.</p>
          </div>
          <div class="flex items-center justify-between mt-6 pt-4 border-t border-neutral-800/80 text-xs font-semibold uppercase tracking-wider text-[#0A66C2]">
            <span>Connect on LinkedIn</span>
            <Icon name="solar:arrow-right-up-linear" class="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </a>
      </div>

      <!-- GitHub Card (Username hidden) -->
      <div class="contact-card-wrapper relative overflow-hidden rounded-3xl">
        <div class="reveal-columns absolute z-90 inset-0 w-full h-full pointer-events-none">
          <DynamicColumns :min="5" :max="6" fill-color="#ffffff" />
        </div>
        <a
          href="https://github.com/BROHUHA"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card group w-full h-full relative p-6 sm:p-8 rounded-3xl bg-[#111111] border border-neutral-800 hover:border-white/60 transition-all duration-300 flex flex-col justify-between no-underline"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                <Icon name="simple-icons:github" />
              </div>
              <span class="text-xs uppercase tracking-wider text-neutral-400 font-mono">Repositories</span>
            </div>
            <h2 class="text-xl font-bold text-white mb-1">GitHub</h2>
            <p class="text-sm text-neutral-400 leading-relaxed">Review source code, stars, contributions, and open-source packages.</p>
          </div>
          <div class="flex items-center justify-between mt-6 pt-4 border-t border-neutral-800/80 text-xs font-semibold uppercase tracking-wider text-white">
            <span>View GitHub Profile</span>
            <Icon name="solar:arrow-right-up-linear" class="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </a>
      </div>

      <!-- Instagram Card (Handle hidden) -->
      <div class="contact-card-wrapper relative overflow-hidden rounded-3xl">
        <div class="reveal-columns absolute z-90 inset-0 w-full h-full pointer-events-none">
          <DynamicColumns :min="5" :max="6" fill-color="#ffffff" />
        </div>
        <a
          href="https://www.instagram.com/abinn.binoyy/"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card group w-full h-full relative p-6 sm:p-8 rounded-3xl bg-[#111111] border border-neutral-800 hover:border-[#E1306C]/60 transition-all duration-300 flex flex-col justify-between no-underline"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-2xl bg-[#E1306C]/15 flex items-center justify-center text-2xl text-[#E1306C] group-hover:scale-110 transition-transform duration-300">
                <Icon name="simple-icons:instagram" />
              </div>
              <span class="text-xs uppercase tracking-wider text-neutral-400 font-mono">Social</span>
            </div>
            <h2 class="text-xl font-bold text-white mb-1">Instagram</h2>
            <p class="text-sm text-neutral-400 leading-relaxed">Casual updates, design experiments, and behind the scenes.</p>
          </div>
          <div class="flex items-center justify-between mt-6 pt-4 border-t border-neutral-800/80 text-xs font-semibold uppercase tracking-wider text-[#E1306C]">
            <span>Follow on Instagram</span>
            <Icon name="solar:arrow-right-up-linear" class="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </a>
      </div>
    </div>

    <!-- Email Sheet Modal (Slide-Over / Dialog) -->
    <Teleport to="body">
      <div
        v-if="isSheetOpen"
        class="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        @click.self="isSheetOpen = false"
      >
        <div
          class="w-full max-w-[540px] max-h-[92vh] overflow-y-auto rounded-3xl bg-[#111111] border border-white/10 p-6 sm:p-8 text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        >
          <!-- Sheet Header -->
          <div class="flex items-start justify-between pb-4 border-b border-white/10 mb-5">
            <div>
              <span class="block text-[11px] font-mono font-semibold uppercase tracking-widest text-neutral-400 mb-1">
                COLLABORATION SHEET
              </span>
              <h3 class="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white m-0">
                SEND A MESSAGE
              </h3>
            </div>
            <button
              type="button"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors shrink-0 ml-4"
              aria-label="Close dialog"
              @click="isSheetOpen = false"
            >
              <Icon name="ion:close-round" class="text-base" />
            </button>
          </div>

          <!-- Success State -->
          <div v-if="submitSuccess" class="py-10 flex flex-col items-center text-center">
            <div class="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-2xl mb-4 border border-emerald-500/30 shadow-inner">
              <Icon name="solar:check-circle-bold" />
            </div>
            <h4 class="text-xl font-bold text-white mb-1.5">Inquiry Dispatched</h4>
            <p class="text-neutral-400 text-sm max-w-xs mb-6 leading-relaxed">
              Thank you for reaching out! Your message was sent securely to abinbinoy2000@gmail.com.
            </p>
            <button
              type="button"
              class="py-3 px-6 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors cursor-pointer"
              @click="resetForm"
            >
              Send Another Note
            </button>
          </div>

          <!-- Form State -->
          <form v-else class="flex flex-col gap-4" @submit.prevent="handleSubmit">
            <!-- Name Field -->
            <div>
              <label for="collab-name" class="block text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                YOUR NAME <span class="text-rose-400">*</span>
              </label>
              <input
                id="collab-name"
                v-model="form.name"
                type="text"
                required
                placeholder="Jane Doe"
                class="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white text-sm placeholder:text-neutral-500 font-medium focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label for="collab-email" class="block text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                YOUR EMAIL <span class="text-rose-400">*</span>
              </label>
              <input
                id="collab-email"
                v-model="form.email"
                type="email"
                required
                placeholder="jane@example.com"
                class="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white text-sm placeholder:text-neutral-500 font-medium focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
              />
            </div>

            <!-- Subject Field -->
            <div>
              <label for="collab-subject" class="block text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                SUBJECT / PROJECT SCOPE
              </label>
              <input
                id="collab-subject"
                v-model="form.subject"
                type="text"
                placeholder="New project opportunity / Full-stack inquiry"
                class="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white text-sm placeholder:text-neutral-500 font-medium focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
              />
            </div>

            <!-- Message Field -->
            <div>
              <label for="collab-message" class="block text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                MESSAGE <span class="text-rose-400">*</span>
              </label>
              <textarea
                id="collab-message"
                v-model="form.message"
                required
                rows="4"
                placeholder="Tell me about your project, timeline, or idea..."
                class="w-full px-4 py-3.5 rounded-xl bg-[#1a1a1a] border border-white/10 text-white text-sm placeholder:text-neutral-500 font-medium focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all resize-none leading-relaxed"
              ></textarea>
            </div>

            <!-- Error Banner -->
            <div v-if="errorMessage" class="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center justify-between">
              <span>{{ errorMessage }}</span>
              <a
                :href="fallbackMailto"
                class="underline font-medium text-white hover:text-neutral-200 ml-2"
                target="_blank"
              >
                Send via Mail Client &rarr;
              </a>
            </div>

            <!-- Action Area matching screenshot -->
            <div class="flex items-center gap-3 pt-2">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex-1 py-3.5 px-6 rounded-xl bg-white text-black font-bold text-xs tracking-wider uppercase hover:bg-neutral-200 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Icon v-if="isSubmitting" name="solar:restart-bold" class="animate-spin text-base" />
                <span>{{ isSubmitting ? 'SENDING...' : 'SEND MESSAGE' }}</span>
                <Icon v-if="!isSubmitting" name="solar:plain-bold" class="text-base" />
              </button>

              <a
                :href="fallbackMailto"
                target="_blank"
                class="py-3.5 px-5 rounded-xl bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 text-white font-semibold text-xs tracking-wider transition-all flex items-center justify-center shrink-0 no-underline"
              >
                Open in Mail Client
              </a>
            </div>
          </form>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
  import { pageTransitionConfig } from '~/helpers/transitionConfig';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  definePageMeta({
    pageTransition: pageTransitionConfig,
  });

  const contactPageRef = useTemplateRef('contactPageRef');
  const config = useRuntimeConfig();
  const isSheetOpen = ref(false);
  const isSubmitting = ref(false);
  const submitSuccess = ref(false);
  const errorMessage = ref('');
  let ctx;

  onMounted(async () => {
    await nextTick();
    await document.fonts.ready;

    ctx = gsap.context(() => {
      ScrollTrigger.batch('.contact-card-wrapper', {
        start: 'top bottom-=9%',
        once: true,
        onEnter: (batch) => {
          const rects = batch.flatMap((el) => Array.from(el.querySelectorAll('.reveal-columns rect')));

          gsap.to(rects, {
            scaleY: 0,
            transformOrigin: 'bottom',
            '--scaleYContactColumnsReveal': '0%',
            stagger: {
              each: 0.035,
              from: 'random',
            },
            duration: 1,
            ease: 'power4.inOut',
            onStart: () => {
              batch.forEach((el) => {
                const revealCol = el.querySelector('.reveal-columns');
                if (revealCol) revealCol.style.pointerEvents = 'none';
              });
            },
            onComplete: () => {
              batch.forEach((el) => {
                const revealCol = el.querySelector('.reveal-columns');
                if (revealCol) revealCol.style.display = 'none';
              });
            },
          });
        },
      });

      ScrollTrigger.refresh();
    }, contactPageRef.value);
  });

  onUnmounted(() => {
    if (ctx) ctx.revert();
  });

  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const fallbackMailto = computed(() => {
    const subject = encodeURIComponent(form.subject || 'Open Collaboration Inquiry');
    const body = encodeURIComponent(
      `Name: ${form.name || 'Not provided'}\nEmail: ${form.email || 'Not provided'}\n\nMessage:\n${form.message || ''}`
    );
    return `mailto:abinbinoy2000@gmail.com?subject=${subject}&body=${body}`;
  });

  const resetForm = () => {
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
    submitSuccess.value = false;
    errorMessage.value = '';
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    isSubmitting.value = true;
    errorMessage.value = '';

    const accessKey = config.public?.web3formsAccessKey || '358a7427-79e7-4aaa-80ab-98be68b368f1';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject ? `[4bin Portfolio] ${form.subject}` : 'New Open Collaboration Inquiry from 4bin.vercel.app',
          message: form.message,
          from_name: `${form.name} via 4bin Portfolio`,
        }),
      });

      const data = await response.json();

      if (data && data.success) {
        submitSuccess.value = true;
      } else {
        throw new Error(data?.message || 'Failed to dispatch message.');
      }
    } catch (err) {
      errorMessage.value =
        err?.message ||
        'Could not dispatch message. You can use "Open in Mail Client" directly.';
    } finally {
      isSubmitting.value = false;
    }
  };

  useSeoMeta({
    title: 'Contact & Connect | 4bin - Abin Binoy (BROHUHA)',
    description: 'Get in touch with 4bin (Abin Binoy / BROHUHA) for full-stack software development, collaboration, or engineering inquiries.',
    keywords: 'contact 4bin, abin binoy email, brohuha contact, contact software developer, hire abin binoy',
    ogTitle: 'Contact & Connect | 4bin - Abin Binoy (BROHUHA)',
    ogDescription: 'Get in touch with 4bin (Abin Binoy / BROHUHA) for full-stack software development, collaboration, or engineering inquiries.',
    ogUrl: 'https://4bin.vercel.app/contact',
    ogImage: 'https://4bin.vercel.app/images/og-cover.jpg',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://4bin.vercel.app/images/og-cover.jpg',
  });
</script>

<style>
  :root {
    --scaleYContactColumnsReveal: 100%;
  }

  .contact-card-wrapper .reveal-columns rect {
    transform: scaleY(var(--scaleYContactColumnsReveal));
    transform-origin: bottom;
    will-change: auto;
  }

  /* Prevent browser autofill from turning inputs white */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus {
    -webkit-text-fill-color: #ffffff !important;
    -webkit-box-shadow: 0 0 0px 1000px #1a1a1a inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }
</style>