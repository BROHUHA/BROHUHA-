<template>
  <div ref="resumeContainerRef" class="resume-page relative min-h-screen bg-white text-black pt-8 sm:pt-12 pb-24 selection:bg-black selection:text-white">
    
    <div class="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
      
      <!-- 1. Hero Section (Filled, Balanced & Large Typography) -->
      <section class="mb-14 sm:mb-20">
        <div class="resume-hero-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          <!-- Left Content (6 cols on desktop) -->
          <div class="resume-hero-content lg:col-span-6 flex flex-col gap-5 sm:gap-7 pb-2">
            
            <!-- Clean Bold Name with Grindy Brush Font & Single Line (Exact Casing Abin Binoy) -->
            <AnimationReveal class="w-full" :delay="0.1">
              <h1 class="resume-name-title whitespace-nowrap normal-case text-[clamp(2.9rem,_8.8vw,_6.8rem)] font-normal text-black m-0 leading-tight py-1 select-none">
                {{ personalInfo.name }}
              </h1>
            </AnimationReveal>

            <!-- Headline & Location -->
            <AnimationReveal :delay="0.15">
              <div class="py-1">
                <p class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight m-0">
                  {{ personalInfo.title }}
                </p>
                <p class="text-xs sm:text-sm font-bold text-neutral-500 mt-2 uppercase tracking-widest">
                  {{ personalInfo.location }}
                </p>

                <!-- Print-Only Contact & Professional Links Header -->
                <div class="hidden print:flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-neutral-700 mt-3 pt-2 border-t border-neutral-300">
                  <span class="inline-flex items-center gap-1.5">
                    <Icon name="solar:letter-bold" class="text-xs shrink-0" />
                    <span>{{ personalInfo.email }}</span>
                  </span>
                  <span>•</span>
                  <span class="inline-flex items-center gap-1.5">
                    <Icon name="simple-icons:github" class="text-xs shrink-0" />
                    <span>github.com/BROHUHA</span>
                  </span>
                  <span>•</span>
                  <span class="inline-flex items-center gap-1.5">
                    <Icon name="solar:global-linear" class="text-xs shrink-0" />
                    <span>4bin.vercel.app</span>
                  </span>
                  <span>•</span>
                  <span class="inline-flex items-center gap-1.5">
                    <Icon name="solar:map-point-bold" class="text-xs shrink-0" />
                    <span>{{ personalInfo.location }}</span>
                  </span>
                </div>
              </div>
            </AnimationReveal>

            <!-- Mobile-Only Color Portrait -->
            <div class="block lg:hidden my-4 print:hidden">
              <div class="portrait-wrapper relative w-full max-w-sm sm:max-w-md mx-auto overflow-hidden flex items-end justify-center">
                <AnimationReveal class="w-full" :delay="0.1">
                  <img
                    src="/images/band/abin_color.png"
                    :alt="personalInfo.name"
                    class="portrait-img w-full h-auto max-h-[50vh] object-contain object-bottom select-none"
                    loading="eager"
                  />
                </AnimationReveal>
              </div>
            </div>

            <!-- Focused Bio -->
            <AnimationReveal class="w-full max-w-2xl" :delay="0.2">
              <p class="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed m-0 font-normal py-1">
                {{ personalInfo.bio }}
              </p>
            </AnimationReveal>

            <!-- Metrics Grid: Perfectly Aligned Baselines & Single-Line Values -->
            <AnimationReveal class="w-full" :delay="0.25">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-4 border-y border-neutral-200">
                <div v-for="stat in personalInfo.stats" :key="stat.label" class="flex flex-col justify-between min-w-0">
                  <div class="flex items-baseline min-h-[1.75rem] sm:min-h-[2.1rem]">
                    <span class="text-base sm:text-lg md:text-xl lg:text-lg xl:text-2xl font-black text-black leading-none whitespace-nowrap tracking-tight">
                      {{ stat.value }}
                    </span>
                  </div>
                  <span class="text-[10px] sm:text-xs font-bold text-neutral-500 uppercase tracking-wider mt-2 whitespace-nowrap">
                    {{ stat.label }}
                  </span>
                </div>
              </div>
            </AnimationReveal>

            <!-- Action Bar -->
            <AnimationReveal class="w-full print:hidden" :delay="0.3">
              <div class="flex items-stretch sm:items-center gap-3 py-1 flex-col sm:flex-row print:hidden">
                <!-- Fully Functional Download CV Button (Official PDF) -->
                <a
                  href="/documents/Abin_Binoy_Resume.pdf"
                  download="Abin_Binoy_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="no-anim-underline flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-black hover:bg-neutral-800 text-white transition-all text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md active:scale-95 cursor-pointer group"
                  title="Download Official Resume PDF (Abin Binoy)"
                >
                  <Icon name="solar:document-download-bold" class="text-lg shrink-0 group-hover:translate-y-0.5 transition-transform" />
                  <span class="whitespace-nowrap">Download CV</span>
                </a>

                <!-- Get in Touch -->
                <NuxtLink
                  to="/contact"
                  class="no-anim-underline flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-50 text-neutral-900 transition-all text-xs sm:text-sm font-bold uppercase tracking-wider active:scale-95 shadow-xs"
                >
                  <Icon name="solar:letter-bold" class="text-base shrink-0" />
                  <span class="whitespace-nowrap">Get in Touch</span>
                </NuxtLink>

                <!-- Icon Buttons: Print, GitHub & Share -->
                <div class="flex items-center justify-center gap-2.5 shrink-0">
                  <!-- Dedicated Print Button -->
                  <button
                    type="button"
                    class="no-anim-underline w-12 h-12 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-900 transition-all active:scale-95 shadow-xs cursor-pointer"
                    title="Print or Save Resume as PDF"
                    aria-label="Print or Save Resume as PDF"
                    @click="handlePrintResume"
                  >
                    <Icon name="solar:printer-minimalistic-linear" class="text-lg" />
                  </button>

                  <a
                    :href="personalInfo.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="no-anim-underline w-12 h-12 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-900 transition-all active:scale-95 shadow-xs"
                    title="GitHub Profile (@BROHUHA)"
                    aria-label="GitHub Profile"
                  >
                    <Icon name="simple-icons:github" class="text-lg" />
                  </a>

                  <!-- Share Button -->
                  <button
                    type="button"
                    class="no-anim-underline w-12 h-12 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-900 transition-all active:scale-95 shadow-xs cursor-pointer"
                    :title="copied ? 'Link copied to clipboard!' : 'Share Resume'"
                    aria-label="Share Resume"
                    @click="handleShare"
                  >
                    <Icon :name="copied ? 'solar:check-circle-bold' : 'solar:share-linear'" class="text-lg transition-transform" :class="{ 'text-emerald-600': copied }" />
                  </button>
                </div>
              </div>
            </AnimationReveal>

          </div>

          <!-- Desktop Portrait: Fills the space on web & cleanly framed in print -->
          <div class="resume-hero-portrait-col hidden lg:flex lg:col-span-6 items-end justify-center self-end print:flex">
            <div
              ref="portraitFigureRef"
              class="portrait-wrapper relative w-full max-w-xl xl:max-w-2xl 2xl:max-w-3xl flex items-end justify-center transition-transform duration-500 ease-out overflow-hidden"
              @mousemove="handlePortraitMouseMove"
              @mouseleave="handlePortraitMouseLeave"
            >
              <AnimationReveal class="w-full" :delay="0.1">
                <img
                  src="/images/band/abin_color.png"
                  :alt="personalInfo.name"
                  class="portrait-img w-full h-auto max-h-[660px] xl:max-h-[760px] object-contain object-bottom select-none"
                  loading="eager"
                />
              </AnimationReveal>
            </div>
          </div>

        </div>
      </section>

      <!-- 2. Sticky Navigation Tabs -->
      <div class="sticky top-16 z-30 mb-12 py-3 -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 backdrop-blur-xl bg-white/90 border-y border-neutral-200 flex items-center gap-2.5 overflow-x-auto no-scrollbar print:hidden">
        <button
          v-for="section in navSections"
          :key="section.id"
          type="button"
          class="no-anim-underline px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer"
          :class="activeSection === section.id ? 'bg-black text-white shadow-xs' : 'text-neutral-500 hover:text-black bg-neutral-100 hover:bg-neutral-200/80'"
          @click="scrollToSection(section.id)"
        >
          {{ section.label }}
        </button>
      </div>

      <!-- 3. Skills & Architecture Section (Filled Cards, Responsive & Larger Badges) -->
      <section id="skills" ref="skillsSectionRef" class="mb-16 sm:mb-24 scroll-mt-28">
        <AnimationReveal class="mb-8">
          <div class="flex items-center gap-3.5 py-1">
            <span class="p-3 rounded-2xl bg-black text-white">
              <Icon name="solar:widget-5-bold" class="text-2xl" />
            </span>
            <div>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black m-0">Skills & Architecture</h2>
              <p class="text-sm sm:text-base text-neutral-500 font-medium m-0 mt-0.5">Production software engineering, cloud systems & infrastructure stack</p>
            </div>
          </div>
        </AnimationReveal>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <AnimationReveal
            v-for="(cat, index) in simplifiedSkills"
            :key="index"
            class="w-full h-full"
          >
            <!-- Card Content: Filled, Dense, Well-Structured -->
            <div class="h-full p-6 sm:p-8 lg:p-10 rounded-3xl border border-neutral-200 bg-white hover:border-black transition-all shadow-sm flex flex-col justify-between group">
              <div>
                <!-- Category Title & Icon -->
                <div class="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-neutral-100">
                  <div class="flex items-center gap-3.5">
                    <span class="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Icon :name="cat.icon" class="text-2xl" />
                    </span>
                    <h3 class="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-black m-0">
                      {{ cat.category }}
                    </h3>
                  </div>
                  <span class="text-xs sm:text-sm font-bold text-neutral-400 uppercase tracking-widest hidden sm:inline-block">
                    {{ cat.skills.length }} Technologies
                  </span>
                </div>

                <!-- Tagline / Architecture Purpose -->
                <p class="text-sm sm:text-base text-neutral-600 mb-5 leading-relaxed font-normal">
                  {{ cat.tagline }}
                </p>

                <!-- Core Focus Highlight Pill -->
                <div class="mb-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-xs sm:text-sm text-neutral-800">
                  <span class="font-extrabold text-black uppercase tracking-wider block mb-1 text-xs">Primary Focus</span>
                  <span class="text-neutral-700 leading-relaxed">{{ cat.highlight }}</span>
                </div>

                <!-- Expanded Skills Badges (With Authentic Tech Brand Icons) -->
                <div class="flex flex-wrap gap-2 sm:gap-2.5">
                  <span
                    v-for="skill in cat.skills"
                    :key="skill"
                    class="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-900 border border-neutral-200/80 transition-all cursor-default shadow-2xs group/badge"
                  >
                    <Icon
                      v-if="skillIconMap[skill]"
                      :name="skillIconMap[skill]"
                      class="text-sm shrink-0"
                    />
                    <span>{{ skill }}</span>
                  </span>
                </div>
              </div>
            </div>
          </AnimationReveal>
        </div>
      </section>

      <!-- 4. Projects Section (With View More Links to Our Work) -->
      <section id="projects" ref="projectsSectionRef" class="mb-16 sm:mb-24 scroll-mt-28">
        <div class="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <AnimationReveal>
            <div class="flex items-center gap-3.5 py-1">
              <span class="p-3 rounded-2xl bg-black text-white">
                <Icon name="solar:rocket-2-bold" class="text-2xl" />
              </span>
              <div>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black m-0">Featured Projects</h2>
                <p class="text-sm sm:text-base text-neutral-500 font-medium m-0 mt-0.5">Live applications, developer utilities & systems</p>
              </div>
            </div>
          </AnimationReveal>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          <AnimationReveal
            v-for="proj in featuredProjects"
            :key="proj.id"
            class="w-full h-full"
          >
            <!-- Card Content -->
            <div class="h-full group p-6 sm:p-8 rounded-3xl border border-neutral-200 bg-white hover:border-black transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-neutral-500">{{ proj.category }}</span>
                  <a
                    :href="proj.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="no-anim-underline text-neutral-400 hover:text-black transition-colors"
                    :title="`Open ${proj.title}`"
                  >
                    <Icon name="solar:arrow-right-up-linear" class="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <h3 class="text-xl sm:text-2xl font-black uppercase tracking-tight text-black group-hover:text-neutral-800 transition-colors mb-1.5">
                  {{ proj.title }}
                </h3>
                <p class="text-xs sm:text-sm font-semibold text-neutral-500 mb-3">{{ proj.tagline }}</p>

                <p class="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                  {{ proj.description }}
                </p>
              </div>

              <div>
                <div class="flex items-center gap-2 flex-wrap pt-4 border-t border-neutral-100 mb-4">
                  <span
                    v-for="tag in proj.tags"
                    :key="tag"
                    class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-700"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- Print-Only Project Link -->
                <div class="hidden print:block text-xs font-mono text-neutral-600 pt-1">
                  {{ proj.url }}
                </div>

                <div class="flex items-center justify-between gap-2 pt-1 print:hidden">
                  <a
                    :href="proj.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="no-anim-underline inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xs active:scale-95 group/btn cursor-pointer"
                  >
                    <span>Visit Project</span>
                    <Icon name="solar:arrow-right-up-linear" class="text-base transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </AnimationReveal>
        </div>
      </section>

      <!-- 5. Professional Experience Section -->
      <section id="experience" ref="experienceSectionRef" class="mb-16 sm:mb-24 scroll-mt-28">
        <AnimationReveal class="mb-8">
          <div class="flex items-center gap-3.5 py-1">
            <span class="p-3 rounded-2xl bg-black text-white">
              <Icon name="solar:case-round-bold" class="text-2xl" />
            </span>
            <div>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black m-0">Experience</h2>
              <p class="text-sm sm:text-base text-neutral-500 font-medium m-0 mt-0.5">Software development and systems architecture</p>
            </div>
          </div>
        </AnimationReveal>

        <div class="flex flex-col gap-6 sm:gap-8">
          <AnimationReveal
            v-for="(job, index) in experience"
            :key="index"
            class="w-full"
          >
            <!-- Card Content -->
            <div class="p-6 sm:p-8 lg:p-10 rounded-3xl border border-neutral-200 bg-white hover:border-black transition-all shadow-xs">
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 mb-4">
                <div>
                  <h3 class="text-xl sm:text-2xl font-extrabold text-black">
                    {{ job.role }}
                  </h3>
                  <p class="text-sm font-semibold text-neutral-500 mt-1">{{ job.company }} • {{ job.location }}</p>
                </div>
                <div class="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase bg-neutral-100 text-neutral-800 w-fit shrink-0">
                  {{ job.period }}
                </div>
              </div>

              <ul class="list-none p-0 my-4 space-y-2.5">
                <li
                  v-for="(bullet, bIndex) in job.highlights"
                  :key="bIndex"
                  class="flex items-start gap-3 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal"
                >
                  <span class="text-black text-sm mt-1 select-none font-bold">▸</span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>

              <div class="flex items-center gap-2 flex-wrap pt-4 border-t border-neutral-100">
                <span
                  v-for="tech in job.technologies"
                  :key="tech"
                  class="px-3 py-1 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200/60"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </AnimationReveal>
        </div>
      </section>

      <!-- 6. Education Section -->
      <section id="education" ref="educationSectionRef" class="mb-16 sm:mb-24 scroll-mt-28">
        <AnimationReveal class="mb-8">
          <div class="flex items-center gap-3.5 py-1">
            <span class="p-3 rounded-2xl bg-black text-white">
              <Icon name="solar:diploma-bold" class="text-2xl" />
            </span>
            <div>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black m-0">Education</h2>
              <p class="text-sm sm:text-base text-neutral-500 font-medium m-0 mt-0.5">Academic background in computer applications and science</p>
            </div>
          </div>
        </AnimationReveal>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimationReveal
            v-for="(edu, index) in education"
            :key="index"
            class="w-full h-full"
          >
            <!-- Card Content -->
            <div class="h-full p-6 sm:p-8 lg:p-10 rounded-3xl border border-neutral-200 bg-white hover:border-black transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                  <span class="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500">{{ edu.period }}</span>
                  <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-100 text-neutral-900">
                    {{ edu.status }}
                  </span>
                </div>

                <h3 class="text-lg sm:text-xl lg:text-2xl font-black text-black mb-1.5">
                  {{ edu.degree }}
                </h3>
                <p class="text-sm font-semibold text-neutral-500 mb-4">
                  {{ edu.institution }} • {{ edu.location }}
                </p>

                <ul class="list-none p-0 space-y-2 mb-5">
                  <li
                    v-for="(point, pIdx) in edu.details"
                    :key="pIdx"
                    class="flex items-start gap-2.5 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal"
                  >
                    <span class="text-neutral-400 font-bold mt-0.5 select-none">•</span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>

              <div class="flex items-center gap-2 flex-wrap pt-3 border-t border-neutral-100">
                <span
                  v-for="tag in edu.tags"
                  :key="tag"
                  class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-700"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </AnimationReveal>
        </div>
      </section>

      <!-- 7. Call To Action Footer -->
      <section id="contact-cta" class="scroll-mt-28 print:hidden">
        <AnimationReveal class="w-full max-w-5xl xl:max-w-6xl mx-auto">
          <div class="rounded-3xl border border-neutral-200 bg-neutral-50 shadow-xs overflow-hidden">
            <div class="flex flex-col md:grid md:grid-cols-12 items-end">
              <!-- Content & Action Buttons (Top on Mobile, Right on Desktop) -->
              <div class="order-1 md:order-2 md:col-span-7 lg:col-span-7 w-full p-6 sm:p-8 md:p-10 lg:p-14 pb-4 md:pb-14 text-center md:text-left flex flex-col justify-center">
                <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black mb-3 md:mb-4">
                  Let's Build Something Great
                </h2>
                <p class="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-xl mb-6 md:mb-8 font-normal mx-auto md:mx-0">
                  Open for technical roles, full-stack software development, and cloud systems engineering. Reach out directly or explore my works.
                </p>

                <div class="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center md:justify-start gap-2.5 sm:gap-3 w-full">
                  <NuxtLink
                    to="/contact"
                    class="no-anim-underline w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full bg-black hover:bg-neutral-800 text-white transition-all text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-sm active:scale-95 text-center"
                  >
                    <Icon name="solar:chat-round-line-bold" class="text-base sm:text-lg shrink-0" />
                    <span class="whitespace-nowrap">Contact Me</span>
                  </NuxtLink>

                  <NuxtLink
                    to="#projects"
                    class="no-anim-underline w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-100 text-neutral-900 transition-all text-xs sm:text-sm font-extrabold uppercase tracking-wider active:scale-95 shadow-xs text-center cursor-pointer"
                    @click.prevent="scrollToSection('projects')"
                  >
                    <Icon name="solar:folder-with-files-bold" class="text-base sm:text-lg shrink-0" />
                    <span class="whitespace-nowrap">Our Works</span>
                  </NuxtLink>

                  <NuxtLink
                    to="/merch"
                    class="no-anim-underline w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-100 text-neutral-900 transition-all text-xs sm:text-sm font-extrabold uppercase tracking-wider active:scale-95 shadow-xs text-center"
                  >
                    <Icon name="solar:lightbulb-bolt-bold" class="text-base sm:text-lg shrink-0" />
                    <span class="whitespace-nowrap">Insights</span>
                  </NuxtLink>
                </div>
              </div>

              <!-- Bust / Upper Body Pose Cutout (Fitted to Corner & Base) -->
              <div class="order-2 md:order-1 md:col-span-5 lg:col-span-5 w-full self-stretch flex items-end justify-center md:justify-start overflow-hidden">
                <img
                  src="/images/band/lookdown.png"
                  :alt="personalInfo.name"
                  class="stand-img w-full h-auto max-h-[300px] sm:max-h-[360px] md:max-h-none md:h-full object-contain object-bottom md:object-bottom md:object-left-bottom select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </AnimationReveal>
      </section>

    </div>
  </div>
</template>

<script setup>
  import { personalInfo, education, experience, simplifiedSkills, featuredProjects } from '~/data/resume';
  import { pageTransitionConfig } from '~/helpers/transitionConfig';

  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  definePageMeta({
    alias: ['/band', '/about'],
    pageTransition: pageTransitionConfig,
  });

  const resumeContainerRef = useTemplateRef('resumeContainerRef');
  const portraitFigureRef = useTemplateRef('portraitFigureRef');

  const activeSection = ref('skills');
  const copied = ref(false);

  const navSections = [
    { id: 'skills', label: 'Skills & Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact-cta', label: 'Connect' },
  ];

  // Authentic Tech Brand Icon Mapping
  const skillIconMap = {
    'Vue.js 3': 'logos:vue',
    'Nuxt 3': 'logos:nuxt-icon',
    'React.js': 'logos:react',
    'Next.js': 'logos:nextjs-icon',
    'TypeScript': 'logos:typescript-icon',
    'JavaScript (ES6+)': 'logos:javascript',
    'Tailwind CSS': 'logos:tailwindcss-icon',
    'GSAP Animations': 'logos:greensock-icon',
    'Vite': 'logos:vitejs',
    'Pinia': 'logos:pinia',
    'Node.js': 'logos:nodejs-icon',
    'Express.js': 'simple-icons:express',
    'Python': 'logos:python',
    'FastAPI': 'logos:fastapi',
    'RESTful APIs': 'solar:server-square-bold',
    'GraphQL': 'logos:graphql',
    'Microservices': 'solar:layers-bold',
    'WebSockets': 'solar:transmission-bold',
    'JWT & OAuth': 'solar:shield-keyhole-bold',
    'Google Cloud (GCP)': 'logos:google-cloud',
    'AWS': 'logos:aws',
    'Docker': 'logos:docker-icon',
    'Kubernetes': 'logos:kubernetes',
    'GitHub Actions (CI/CD)': 'logos:github-actions',
    'Cloud Run': 'logos:google-cloud-run',
    'Pub/Sub': 'solar:mailbox-bold',
    'Vercel': 'logos:vercel-icon',
    'Linux / Bash': 'logos:bash-icon',
    'Nginx': 'logos:nginx',
    'PostgreSQL': 'logos:postgresql',
    'MongoDB': 'logos:mongodb-icon',
    'Redis': 'logos:redis',
    'Firebase Firestore': 'logos:firebase',
    'Supabase': 'logos:supabase-icon',
    'Prisma ORM': 'logos:prisma',
    'SQLite': 'logos:sqlite',
    'Distributed Systems': 'solar:diagram-up-bold',
    'Event-Driven Architecture': 'solar:bolt-circle-bold',
  };

  const scrollToSection = (id) => {
    activeSection.value = id;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 3D Parallax Tilt on Portrait Image (Desktop)
  const handlePortraitMouseMove = (e) => {
    if (!portraitFigureRef.value) return;
    const rect = portraitFigureRef.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = ((x - rect.width / 2) / rect.width) * 8;
    const moveY = ((y - rect.height / 2) / rect.height) * 8;

    gsap.to('.portrait-img', {
      duration: 0.35,
      x: moveX,
      y: moveY,
      rotateX: -moveY * 0.2,
      rotateY: moveX * 0.2,
      ease: 'power2.out',
    });
  };

  const handlePortraitMouseLeave = () => {
    gsap.to('.portrait-img', {
      duration: 0.5,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      ease: 'power3.out',
    });
  };

  // Share resume handler
  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://4bin.vercel.app/resume';
    const shareData = {
      title: 'Abin Binoy | Resume & Professional Background',
      text: 'Explore the full-stack resume, software architecture, and projects of Abin Binoy.',
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      copied.value = true;
      setTimeout(() => { copied.value = false; }, 2200);
    } catch {
      copied.value = true;
      setTimeout(() => { copied.value = false; }, 2200);
    }
  };

  // Print preparation: reveal all hidden inner wrappers, unmask photo, disable animations for print
  const prepareForPrint = () => {
    if (typeof document === 'undefined') return;
    document.querySelectorAll('.inner-wrapper').forEach((el) => {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.transform = 'none';
    });
    document.querySelectorAll('.anim-reveal-columns').forEach((el) => {
      el.style.display = 'none';
    });
    document.querySelectorAll('.portrait-wrapper, .portrait-img').forEach((el) => {
      el.style.webkitMaskImage = 'none';
      el.style.maskImage = 'none';
      el.style.border = 'none';
      el.style.background = 'transparent';
      el.style.boxShadow = 'none';
    });
  };

  // Print CV handler
  const handlePrintResume = () => {
    if (typeof window === 'undefined') return;
    prepareForPrint();
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.print();
      }, 50);
    });
  };

  const handleBeforePrint = () => {
    prepareForPrint();
  };

  let ctx;

  onMounted(async () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeprint', handleBeforePrint);
    }

    await nextTick();
    await document.fonts.ready;

    ctx = gsap.context(() => {
      // Active Section Detection on Scroll
      const sectionIds = ['skills', 'projects', 'experience', 'education', 'contact-cta'];
      sectionIds.forEach((id) => {
        ScrollTrigger.create({
          trigger: `#${id}`,
          start: 'top center+=80',
          end: 'bottom center',
          onEnter: () => { activeSection.value = id; },
          onEnterBack: () => { activeSection.value = id; },
        });
      });

      ScrollTrigger.refresh();
    }, resumeContainerRef.value);
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('beforeprint', handleBeforePrint);
    }
    if (ctx) ctx.revert();
  });

  useSeoMeta({
    title: 'Resume & Experience | Abin Binoy - Full-Stack & Cloud Engineer',
    description: 'Professional resume, technical skills, education, and cloud architecture background of Abin Binoy. Based in Kerala, India.',
    ogTitle: 'Resume & Experience | Abin Binoy',
    ogDescription: 'Full-Stack Software Engineer & Cloud Architect with 2+ years experience building distributed systems, data pipelines, and responsive web applications.',
    ogImage: 'https://4bin.vercel.app/images/og-cover.jpg',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://4bin.vercel.app/images/og-cover.jpg',
  });
</script>

<style>
  .resume-page {
    font-family: var(--font-sans, "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .resume-name-title {
    font-family: 'Grindy Brush', cursive, sans-serif !important;
    text-transform: none !important;
    white-space: nowrap !important;
    letter-spacing: normal !important;
    line-height: 1.05;
  }

  /* Seamless White Background Blending for Portrait Cutout */
  .portrait-wrapper {
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%);
    mask-image: linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%);
  }

  .portrait-img {
    -webkit-mask-image: linear-gradient(to bottom, black 0%, black 82%, rgba(0, 0, 0, 0.75) 91%, rgba(0, 0, 0, 0.15) 98%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 0%, black 82%, rgba(0, 0, 0, 0.75) 91%, rgba(0, 0, 0, 0.15) 98%, transparent 100%);
  }

  .stand-img {
    -webkit-mask-image: linear-gradient(to bottom, black 0%, black 86%, rgba(0, 0, 0, 0.75) 94%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 0%, black 86%, rgba(0, 0, 0, 0.75) 94%, transparent 100%);
  }

  /* Print Optimization */
  @media print {
    @page {
      size: A4 portrait;
      margin: 12mm 14mm 12mm 14mm;
    }

    html,
    body {
      background-color: #ffffff !important;
      background: #ffffff !important;
      color: #111111 !important;
      font-size: 10pt !important;
      line-height: 1.4 !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    .resume-page {
      background: #ffffff !important;
      color: #111111 !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      min-height: 0 !important;
    }

    /* Force all AnimationReveal containers to 100% visibility in print */
    .outer-wrapper {
      width: 100% !important;
      max-width: 100% !important;
      position: static !important;
      display: block !important;
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

    /* Hero Layout with Portrait Photo in Print */
    .resume-hero-grid {
      display: flex !important;
      flex-direction: row !important;
      align-items: flex-start !important;
      justify-content: space-between !important;
      gap: 1.5rem !important;
      margin-bottom: 1.25rem !important;
    }

    .resume-hero-content {
      flex: 1 1 auto !important;
      max-width: calc(100% - 150px) !important;
      width: auto !important;
      padding-bottom: 0 !important;
      gap: 0.75rem !important;
    }

    .resume-hero-portrait-col {
      display: block !important;
      flex: 0 0 135px !important;
      width: 135px !important;
      align-self: flex-start !important;
      margin-top: 0.25rem !important;
    }

    .portrait-wrapper {
      display: block !important;
      -webkit-mask-image: none !important;
      mask-image: none !important;
      width: auto !important;
      height: auto !important;
      max-width: 140px !important;
      max-height: 170px !important;
      border: none !important;
      border-radius: 0 !important;
      background: transparent !important;
      background-color: transparent !important;
      box-shadow: none !important;
      overflow: visible !important;
    }

    .portrait-img {
      -webkit-mask-image: none !important;
      mask-image: none !important;
      display: block !important;
      width: auto !important;
      height: auto !important;
      max-width: 140px !important;
      max-height: 170px !important;
      object-fit: contain !important;
      object-position: bottom center !important;
      border: none !important;
      border-radius: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
    }

    /* Hide interactive elements and web chrome */
    header,
    footer,
    .sticky,
    button,
    #contact-cta,
    .button-nav-icon-wrapper,
    .cursor-custom,
    a[href^="http"]::after {
      display: none !important;
    }

    /* Clean typography and structure for paper */
    .resume-name-title {
      font-size: 2.8rem !important;
      line-height: 1.05 !important;
      margin-bottom: 0.2rem !important;
    }

    section {
      margin-bottom: 1.25rem !important;
      page-break-inside: auto;
    }

    h1,
    h2,
    h3,
    h4 {
      page-break-after: avoid !important;
      break-after: avoid !important;
    }

    /* Keep cards intact and cleanly separated without splitting across pages */
    .rounded-3xl {
      border-radius: 10px !important;
      border: 1px solid #d4d4d4 !important;
      padding: 0.85rem 1rem !important;
      margin-bottom: 0.6rem !important;
      box-shadow: none !important;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    li {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    /* Exact colors for badges and tags */
    span,
    div,
    p {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  }

  /* Hide scrollbar for section tabs */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
