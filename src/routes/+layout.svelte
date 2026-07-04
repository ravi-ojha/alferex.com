<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	onMount(() => {
		requestAnimationFrame(() => {
			document.documentElement.classList.add('theme-ready');
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta
		name="description"
		content="Alferex is a tech product development studio. We build products like Ticketping and help enterprises deploy custom Slack workflows for ticket management."
	/>
	<meta property="og:title" content="Alferex — Tech Product Development Studio" />
	<meta
		property="og:description"
		content="We build B2B SaaS products and set up Ticketping Slack agents for enterprises that need custom support workflows."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://alferex.com" />
	<title>Alferex — Tech Product Development Studio</title>
</svelte:head>

{@render children()}
