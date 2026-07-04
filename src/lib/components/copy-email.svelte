<script lang="ts">
	const email = 'ravi@ticketping.com';
	let copied = $state(false);
	let timeout: ReturnType<typeof setTimeout> | undefined;

	async function copyEmail() {
		await navigator.clipboard.writeText(email);
		copied = true;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			copied = false;
		}, 2000);
	}

	function handleClick(event: MouseEvent) {
		event.preventDefault();
		copyEmail();
	}
</script>

<div class="flex flex-col items-center gap-2">
	<a
		href="mailto:{email}"
		onclick={handleClick}
		class="w-fit font-display text-xl lg:text-2xl font-500 text-sand-800 select-text no-underline border-b border-sand-200 duration-300 transition ease-out hover:border-parrot-600 hover:text-parrot-600 dark:text-cement-100 dark:border-cement-800 dark:hover:border-parrot-500 dark:hover:text-parrot-500"
	>
		{email}
	</a>
	<span
		class="text-sm font-medium text-sand-500 transition-opacity duration-200 dark:text-cement-500"
		class:opacity-0={!copied}
		class:opacity-100={copied}
		aria-hidden={!copied}
	>copied</span>
</div>
