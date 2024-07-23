<script>
	import { page } from '$app/stores';
	import "./styles.css";

</script>

<div class="flex items-center justify-center h-screen bg-base-100">
	<div class="text-center">
		<h1 class="text-6xl font-bold text-red-500">{$page.status}</h1>
		<p class="text-xl mt-2">{$page.error?.message}</p>
		<p class="text-lg mt-4">This page was not found</p>
		<a href="/" class="btn btn-primary mt-6">Go to Home</a>
	</div>
</div>
