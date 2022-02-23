<script>
	import { getParagraph } from './generator';
	let numParagraphs = 1;
	export let paragraphs = [getParagraph()];

	function handleGenerate(event) {
		event.preventDefault();
		paragraphs = [];
		for (let i = 0; i < numParagraphs; i++) {
			paragraphs.push(getParagraph());
		}
	}
</script>

<main>
	<h1>Fine Dining Ipsum</h1>
	<form on:submit={handleGenerate}>
		<input bind:value={numParagraphs} placeholder="enter your name">
		<button type="submit">Generate</button>
	</form>
	{#each paragraphs as paragraph}
		<p class="ipsum">
			{paragraph}
		</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.ipsum {
		margin: 0 25px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>