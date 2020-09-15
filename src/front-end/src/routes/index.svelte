<script>
	import AuthForm from '../components/AuthForm.svelte';
</script>

<style>
	#auth-screen {
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;

		width: 100vw;
		height: 100vh;
	}
</style>

<svelte:head>
	<title>authenticate</title>
</svelte:head>

<article id="auth-screen">
	<AuthForm />
</article>

