export const repository = [
  {
    id: 1,
    name: 'Cabix',
    image: 'repo_1_cabix.png',
    url: 'https://cabix.vercel.app',
  },
  {
    id: 2,
    name: 'Iceberg',
    image: 'repo_2_iceberg.png',
    url: 'https://tipoficeberg.vercel.app',
  },
  {
    id: 3,
    name: 'ALLQR',
    image: 'repo_3_allqr.png',
    url: 'https://allre.vercel.app',
  },
  {
    id: 4,
    name: 'YZ Music',
    image: 'repo_4_yz_music.png',
    url: 'https://yzmusic-promode.vercel.app',
  },
  {
    id: 5,
    name: 'APKCook',
    image: 'repo_5_apkcook.png',
    url: 'https://apkcook.vercel.app',
  },
  {
    id: 6,
    name: 'Head',
    image: 'repo_6_head.png',
    url: 'https://abinbinoy.vercel.app/iindexxx.html',
  },
];

export const tshirts = repository;

export const badges = [
  {
    id: 1,
    slug: 'ab-logo',
    name: 'AB Logo',
    category: 'Button Badges',
    image: 'badge_1_ab_logo.png',
    description: 'Official AB monogram button badge design with monochrome geometry.',
  },
  {
    id: 2,
    slug: 'ab-monogram',
    name: 'AB Monogram',
    category: 'Button Badges',
    image: 'badge_2_ab_png.png',
    description: 'Minimalist transparent AB brandmark badge for developer gear and accessories.',
  },
];

export const stickers = [
  {
    id: 1,
    slug: '4bin-website',
    name: '4BIN Website',
    category: 'Stickers',
    image: 'sticker_1.png',
    description: 'High-contrast typography sticker celebrating 4bin developer portfolio and web architecture.',
  },
  {
    id: 2,
    slug: 'think-bigger-build-better',
    name: 'Think Bigger Build Better',
    category: 'Stickers',
    image: 'sticker_2.png',
    description: 'Street-art inspired editorial sticker: Code. Create. Innovate.',
  },
  {
    id: 3,
    slug: 'no-shortcut-to-great-code',
    name: 'No Shortcut to Great Code',
    category: 'Stickers',
    image: 'sticker_3.png',
    description: 'Outdoor typographic lawn installation: There is no shortcut to great code.',
  },
  {
    id: 4,
    slug: '4bin-projects',
    name: '4BIN Projects',
    category: 'Stickers',
    image: 'sticker_4.png',
    description: 'Glassmorphic frosted UI card: Build, explore, grow. Turning ideas into reality.',
  },
  {
    id: 5,
    slug: 'creative-freedom',
    name: 'Creative Freedom',
    category: 'Stickers',
    image: 'sticker_5.png',
    description: 'Dramatic crimson editorial artwork: I support creative freedom.',
  },
  {
    id: 6,
    slug: 'brohuha-retro-arcade',
    name: 'BROHUHA Retro Arcade',
    category: 'Stickers',
    image: 'sticker_6.png',
    description: '8-bit retro arcade space invaders sticker with chromatic glitch typography.',
  },
  {
    id: 7,
    slug: 'dream-bigger-build-better',
    name: 'Dream Bigger Build Better',
    category: 'Stickers',
    image: 'sticker_7.png',
    description: 'Cinematic vintage film aesthetic artwork: Dream Bigger. Build Better.',
  },
];

export const posters = [
  {
    id: 1,
    slug: 'abin-binoy-portrait',
    name: 'Abin Binoy (Monochrome)',
    category: 'Posters',
    image: 'poster_1.png',
    description: 'Monochrome split-tone portrait poster of Abin Binoy with typographic branding.',
  },
  {
    id: 2,
    slug: 'full-stack-developer',
    name: 'Full Stack Developer',
    category: 'Posters',
    image: 'poster_2.png',
    description: 'Grunge splattered technical poster featuring the developer stack (Python, C++, Java, JS, TS, Rust, C, Go).',
  },
];

export const allInsights = [
  ...badges,
  ...stickers,
  ...posters,
];

export const getInsightBySlug = (slug) => {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return allInsights.find(
    item => item.slug.toLowerCase() === normalized ||
            item.name.toLowerCase() === normalized ||
            item.slug.replace(/-/g, ' ') === normalized ||
            item.id.toString() === normalized
  );
};
