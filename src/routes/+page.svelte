<script lang="ts">
	import BtnCaretIcon from '$lib/components/btn-caret-icon.svelte';
	import CopyEmail from '$lib/components/copy-email.svelte';
	import EmptySpace from '$lib/pages/ticketping-landing/empty-space.svelte';

	const services = [
		{
			label: 'SERVICE 01',
			title: 'Ticketping Slack agent setup',
			description:
				'We deploy and configure Ticketping agents in your Slack workspace — routing rules, channels, automations, and team onboarding included.'
		},
		{
			label: 'SERVICE 02',
			title: 'Custom ticket workflows',
			description:
				'Need something beyond the defaults? We design bespoke Slack workflows for internal ticketing, web-to-Slack routing, and cross-team handoffs.'
		},
		{
			label: 'SERVICE 03',
			title: 'Product development',
			description:
				'From concept to production — we build B2B SaaS products with the same rigor we apply to our own: Ticketping ships on this stack.'
		}
	];

	const ticketpingFeatures = [
		'Internal Slack ticketing for your team',
		'Web chat widget → Slack threads',
		'Email and API ticket routing',
		'AI-assisted replies with human handoff'
	];
</script>

<div class="bg-daylight dark:bg-spaceblack">
	<!-- Header -->
	<header class="md:px-8">
		<div
			class="max-w-7xl mx-auto px-3 md:px-12 border-x border-sand-100 dark:border-cement-900 max-md:border-x-0"
		>
			<div
				class="flex h-12 items-center justify-between md:h-16 border-b border-sand-100 dark:border-cement-900"
			>
				<a href="/" class="font-600 text-spaceblack dark:text-white">Alferex</a>
				<nav class="hidden items-center gap-6 sm:flex">
					<a href="#services" class="link-type-1">Services</a>
					<a href="#ticketping" class="link-type-1">Ticketping</a>
					<a href="#contact" class="btn btn-sm btn-secondary">Get in touch</a>
				</nav>
			</div>
		</div>
	</header>

	<main>
		<!-- Hero -->
		<section class="md:px-8">
			<div
				class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
			>
				<div class="w-full bg-daylight dark:bg-spaceblack">
					<div
						class="flex h-12 items-center justify-between font-mono text-xs font-medium tracking-wider text-sand-500 dark:text-cement-500 md:h-16 md:text-sm"
					>
						<span>// PRODUCT STUDIO</span>
					</div>
				</div>
			</div>
			<div
				class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
			>
				<div class="mx-auto w-full bg-daylight dark:bg-spaceblack">
					<div class="-my-px border border-sand-100 dark:border-cement-900">
						<div class="flex flex-col justify-center p-6 md:p-8 lg:p-12 min-h-first-fold">
							<h1
								class="max-w-3xl font-display text-4xl lg:text-[2.5rem] font-500 !leading-tight text-sand-900 dark:text-cement-50"
							>
								We build products. <span class="inline-block text-sand-400 dark:text-cement-600"
									>We ship Slack workflows.</span
								>
							</h1>
							<p
								class="max-w-2xl font-500 text-base md:text-lg text-sand-400 dark:text-cement-600 !leading-relaxed mt-6"
							>
								Alferex is a tech product development studio. We help enterprises deploy custom Slack
								agents for ticket management.
							</p>
							<div class="mt-10 flex flex-col sm:flex-row gap-3">
								<a
									href="#services"
									class="btn btn-sm btn-primary btn-caret font-semibold w-full sm:w-auto justify-center"
								>
									<span class="text-sm pl-1">Our services</span>
									<BtnCaretIcon />
								</a>
								<a
									href="#ticketping"
									class="btn btn-sm btn-transparent font-semibold w-full sm:w-auto justify-center"
								>
									<span class="text-sm">Explore Ticketping</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<EmptySpace />

		<!-- Built by us -->
		<section id="built-by-us" class="md:px-8">
			<div
				class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
			>
				<div class="w-full bg-daylight dark:bg-spaceblack">
					<div
						class="flex h-12 items-center justify-between font-mono text-xs font-medium tracking-wider text-sand-500 dark:text-cement-500 md:h-16 md:text-sm"
					>
						<span>// BUILT BY US</span>
					</div>
				</div>
			</div>
			<div
				class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
			>
				<div class="w-full bg-white dark:bg-cement-950">
					<div class="-my-px border border-sand-100 dark:border-cement-900">
						<div
							class="p-6 md:p-8 lg:p-12 border-b border-sand-100 dark:border-cement-900"
						>
							<h2
								class="font-display text-2xl md:text-3xl font-500 leading-tight text-sand-800 dark:text-cement-100"
							>
								Ticketping
							</h2>
							<p
								class="font-display text-2xl md:text-3xl font-500 leading-tight text-sand-300 dark:text-cement-700 mt-3"
							>
								Your helpdesk, inside Slack.
							</p>
							<p class="text-sand-500 dark:text-cement-500 text-sm md:text-base mt-6">
								A full-fledged B2B SaaS that streamlines customer support via Slack — for internal
								team ticketing and web-to-Slack workflows.
							</p>
							<blockquote
								class="mt-6 text-base leading-relaxed text-sand-700 dark:text-cement-300 border-l-2 border-parrot-400 pl-4"
							>
								"Your team already works on Slack. Now your customer support does too."
							</blockquote>
							<div class="mt-10">
								<a
									href="https://ticketping.com"
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-sm btn-primary btn-caret font-semibold"
								>
									<span class="text-sm pl-1">Visit ticketping.com</span>
									<BtnCaretIcon />
								</a>
							</div>
						</div>
						<div class="p-6 md:p-8 lg:p-12">
							<span class="pill-free">Free</span>
							<h2
								class="font-display text-2xl md:text-3xl font-500 leading-tight text-sand-800 dark:text-cement-100 mt-4"
							>
								Live weather in your Slack status
							</h2>
							<p class="text-sand-500 dark:text-cement-500 text-sm md:text-base mt-6">
								Connect once and your status updates with temperature, conditions, and a matching
								emoji.
							</p>
							<p class="text-sand-500 dark:text-cement-500 text-sm md:text-base mt-3">
								When you set a real status—meeting, OOO, focus—we step back.
								<a
									href="https://ticketping.com/slack-weather-status"
									target="_blank"
									rel="noopener noreferrer"
									class="link-type-1 ml-2 inline-block"
									>Know more</a
								>
							</p>
							<div class="mt-10">
								<a
									href="https://api.ticketping.com/slack-weather/install"
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-sm btn-primary btn-caret font-semibold"
								>
									<span class="text-sm pl-1">Add to Slack</span>
									<BtnCaretIcon />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<EmptySpace />

		<!-- Services -->
		<section id="services" class="md:px-8">
			<div
				class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
			>
				<div class="w-full bg-daylight dark:bg-spaceblack">
					<div
						class="flex h-12 items-center justify-between font-mono text-xs font-medium tracking-wider text-sand-500 dark:text-cement-500 md:h-16 md:text-sm"
					>
						<span>// WHAT WE DO</span>
					</div>
				</div>
			</div>
			<div
				class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
			>
				<div class="w-full bg-white dark:bg-cement-950">
					<div class="-my-px border border-sand-100 dark:border-cement-900">
						<div class="flex flex-col p-6 md:p-8">
							<h2
								class="font-display text-2xl md:text-3xl font-500 leading-tight text-sand-800 dark:text-cement-100"
							>
								Studio builds. Enterprise deployments.
							</h2>
							<p
								class="font-display text-2xl md:text-3xl font-500 leading-tight text-sand-300 dark:text-cement-700 mt-3"
							>
								From architecture to go-live.
							</p>
						</div>
						<div class="border-t border-sand-100 dark:border-cement-900">
							<div
								class="-my-px border-t border-b border-sand-100 dark:border-cement-900 grid grid-cols-1 md:grid-cols-3"
							>
								<div
									class="flex flex-col p-6 md:p-8 border-b md:border-b-0 md:border-r border-sand-100 dark:border-cement-900"
								>
									<p
										class="mb-3 font-mono text-xs font-medium text-sand-500 dark:text-cement-500 md:text-sm"
									>
										{services[0].label}
									</p>
									<h3
										class="font-display text-xl md:text-2xl font-500 leading-tight text-sand-800 dark:text-cement-100 mb-3"
									>
										{services[0].title}
									</h3>
									<p class="text-sand-500 dark:text-cement-500 text-sm md:text-base">
										{services[0].description}
									</p>
								</div>
								<div
									class="flex flex-col p-6 md:p-8 border-b md:border-b-0 md:border-r border-sand-100 dark:border-cement-900"
								>
									<p
										class="mb-3 font-mono text-xs font-medium text-sand-500 dark:text-cement-500 md:text-sm"
									>
										{services[1].label}
									</p>
									<h3
										class="font-display text-xl md:text-2xl font-500 leading-tight text-sand-800 dark:text-cement-100 mb-3"
									>
										{services[1].title}
									</h3>
									<p class="text-sand-500 dark:text-cement-500 text-sm md:text-base">
										{services[1].description}
									</p>
								</div>
								<div class="flex flex-col p-6 md:p-8">
									<p
										class="mb-3 font-mono text-xs font-medium text-sand-500 dark:text-cement-500 md:text-sm"
									>
										{services[2].label}
									</p>
									<h3
										class="font-display text-xl md:text-2xl font-500 leading-tight text-sand-800 dark:text-cement-100 mb-3"
									>
										{services[2].title}
									</h3>
									<p class="text-sand-500 dark:text-cement-500 text-sm md:text-base">
										{services[2].description}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<EmptySpace />

		<!-- Ticketping -->
		<section id="ticketping" class="md:px-8">
			<div
				class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
			>
				<div class="w-full bg-daylight dark:bg-spaceblack">
					<div
						class="flex h-12 items-center justify-between font-mono text-xs font-medium tracking-wider text-sand-500 dark:text-cement-500 md:h-16 md:text-sm"
					>
						<span>// OUR PRODUCT</span>
					</div>
				</div>
			</div>
			<div
				class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
			>
				<div class="w-full bg-daylight dark:bg-spaceblack">
					<div
						class="-my-px border border-sand-100 dark:border-cement-900 lg:grid lg:grid-cols-2"
					>
						<div class="flex flex-col p-6 md:p-8">
							<h2
								class="font-display text-2xl md:text-3xl font-500 leading-tight text-sand-800 dark:text-cement-100"
							>
								Ticketping
							</h2>
							<p class="text-sand-500 dark:text-cement-500 text-sm md:text-base mt-4">
								Your helpdesk, inside Slack. Chat widget, email routing, API tickets, and
								AI-assisted replies — all landing in Slack threads where your team collaborates
								naturally.
							</p>
							<ul class="text-sand-600 dark:text-cement-400 mt-6 space-y-2">
								{#each ticketpingFeatures as feature}
									<li class="flex flex-row items-center gap-3">
										<span class="flex-shrink-0 text-parrot-600 dark:text-parrot-400">✓</span>
										<span>{feature}</span>
									</li>
								{/each}
							</ul>
							<div class="mt-8 flex flex-wrap gap-2">
								{#each ['Slack-native', 'No per-seat fees', 'AI + human handoff'] as tag}
									<span
										class="rounded-full border border-sand-200 bg-white px-3 py-1 text-xss font-medium text-sand-600 dark:border-cement-700 dark:bg-cement-800 dark:text-cement-300"
										>{tag}</span
									>
								{/each}
							</div>
							<div class="mt-10">
								<a
									href="https://ticketping.com"
									target="_blank"
									rel="noopener noreferrer"
									class="btn btn-sm btn-primary btn-caret font-semibold"
								>
									<span class="text-sm pl-1">Visit ticketping.com</span>
									<BtnCaretIcon />
								</a>
							</div>
						</div>
						<div
							class="flex flex-col justify-center border-l border-t lg:border-t-0 border-sand-100 dark:border-cement-900 p-6 md:p-8"
						>
							<p
								class="mb-2 font-mono text-xs font-medium tracking-wider text-sand-300 dark:text-cement-700 md:text-sm"
							>
								WHY
							</p>
							<h3
								class="font-display text-2xl md:text-3xl font-500 leading-tight text-sand-800 dark:text-cement-100"
							>
								Your team already works on Slack. <span
									class="inline-block text-sand-300 dark:text-cement-700"
									>Now your customer support does too.</span
								>
							</h3>
							<p class="text-sand-500 dark:text-cement-500 text-sm md:text-base mt-4">
								Every support request lands directly in Slack where your team naturally
								collaborates. No tab-switching. No context loss. No learning curve.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<EmptySpace />

		<!-- Contact CTA -->
		<section id="contact" class="md:px-8">
			<div
				class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
			>
				<div class="w-full bg-daylight dark:bg-spaceblack">
					<div
						class="flex h-12 items-center justify-between font-mono text-xs font-medium tracking-wider text-sand-500 dark:text-cement-500 md:h-16 md:text-sm"
					>
						<span>// GET IN TOUCH</span>
					</div>
				</div>
			</div>
			<div
				class="max-w-7xl mx-auto px-3 md:px-12 -my-px border border-sand-100 dark:border-cement-900 max-md:border-x-0"
			>
				<div class="w-full bg-white dark:bg-cement-950">
					<div class="-my-px border border-sand-100 dark:border-cement-900">
						<div class="flex flex-col items-center text-center p-8 md:p-12 lg:p-16">
							<h2
								class="font-display text-xl lg:text-3xl font-500 leading-tight text-sand-800 dark:text-cement-100 max-w-2xl"
							>
								Need Ticketping in your Slack workspace?
							</h2>
							<p
								class="font-display text-xl lg:text-3xl font-500 leading-tight text-sand-300 dark:text-cement-700 mt-3 max-w-2xl"
							>
								We set up agents, routing rules, and custom workflows for your organization.
							</p>
							<div class="mt-10">
								<CopyEmail />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>

	<!-- Footer -->
	<footer class="md:px-8">
		<div
			class="max-w-7xl mx-auto px-3 md:px-12 border-x border-b border-sand-100 dark:border-cement-900 max-md:border-x-0"
		>
			<div class="py-6 text-center text-sm text-sand-500 dark:text-cement-500">
				<p>© {new Date().getFullYear()} Alferex Industries Pvt Ltd. All rights reserved.</p>
			</div>
		</div>
	</footer>

	<EmptySpace />
</div>
