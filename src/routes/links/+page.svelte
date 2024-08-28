<script>
// @ts-nocheck

    import SmallCubes from '$lib/SmallCubes.svelte';   
   
    // Links key value json object
    const links = {
      "0xKyran.dev": "https://0xKyran.dev",
      "Discord": "https://discord.gg/MKmST3Fh2Z",
      "X": "https://x.com/0xkyran",
      "GitHub": "https://github.com/0xKyran",
    }

</script>

<svelte:head>
    <meta charset="utf-8">
    <title>0xKyran.dev Links</title>
</svelte:head>

<main class="p-10 space-y-8">
<a href="/" class="p-10 space-y-8">
    <!-- Profile Picture -->
    <div class="flex justify-center">
        <div class="avatar">
            <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/pfp.webp" alt="pfp"/>
            </div>
        </div>
    </div>
    
    <div class="flex justify-center">
        <h1 class="text-3xl font-bold text-primary">0xKyran.dev</h1>
    </div>

    <!-- Small Rotating Cubes -->
    <div class="flex justify-center space-x-4">
        <div class="mx-2"><SmallCubes rotationOffset={0} /></div>
        <div class="mx-2"><SmallCubes rotationOffset={Math.PI / 4} /></div>
        <div class="mx-2"><SmallCubes rotationOffset={0} /></div>
    </div>
</a>
    <!-- Links section -->
    <div class="flex justify-center">
        <div class="grid grid-cols-1 gap-4 text-base-100">
            {#each Object.keys(links) as link}
                <div class="card bg-base-200 text-primary p-4 w-64 shadow-lg">
                    <a href={links[link]} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline text-lg font-semibold">
                        {link}
                    </a>
                </div>
            {/each}
        </div>
    </div>
</main>
  
<style>
    main {
        max-width: 1000px;
        margin: auto;
    }
</style>
