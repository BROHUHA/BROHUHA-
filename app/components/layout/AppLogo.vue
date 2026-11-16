<template>
	<img id="logo" src="/images/logo.svg" alt="4bin - Abin Binoy (BROHUHA)" role="img" class="logo-img" />
</template>

<style scoped>
.logo-img {
	display: block;
	width: 100%;
	height: auto;
	object-fit: contain;
}

/* When the parent sets fill-white (used on dark backgrounds), invert the black logo */
:global(.fill-white) > .logo-img {
	filter: invert(1) brightness(2);
}
</style>
