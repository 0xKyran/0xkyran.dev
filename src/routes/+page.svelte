<script>
    import SmallCubes from '$lib/SmallCubes.svelte';
</script>
 
<!-- Head -->
<svelte:head>
    <meta charset="utf-8">
    <title>0xKyran.dev</title>
</svelte:head>


<main class="p-10 space-y-8">
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

    <!-- Links to Categories -->
    <div class="flex justify-center space-x-8">
        <a href="#about-me" class="link link-primary">About Me</a>
        <a href="#projects" class="link link-primary">Projects</a>
        <a href="#skills" class="link link-primary">Skills</a>
        <a href="#contact" class="link link-primary">Contact Me</a>
    </div>

    <!-- About Me Section -->
    <div id="about-me" class="mockup-browser border border-primary bg-base-300">
        <div class="mockup-browser-toolbar">
            <div class="title text-primary">About me:</div>
        </div>
        <div class="mockup-browser-content p-4 space-y-4">
            <pre data-prefix="// " class="text-neutral"><code>AboutMe.md</code></pre>
            <p>Heyy, I'm Kyran also known as Kiirion, a Dutch developer focusing on decentralized infrastructure and availability. I strive to bring together the power of decentralized technology and efficiency.</p>
            <p>I'm always eager to explore and learn new technologies and tooling, especially in the areas of AI and blockchain. My interests in crypto extend to tokenization, DeFi, and exploring the potential of blockchain technologies in various domains. I'm dedicated to contributing to the advancement of the blockchain ecosystem.</p>
            <p>Being well-versed in Blockchain and DevOps, I have the skill set to architect and deploy blockchain solutions while ensuring efficient and reliable operations. I'm proficient in managing infrastructure, optimizing performance, and leveraging cutting-edge technologies.</p>
            <p>Let's connect and explore the decentralized future!</p>
        </div>
    </div>

    <!-- Current Projects Section -->
    <div id="projects" class="card shadow-sm shadow-secondary compact bg-base-100">
        <div class="card-body">
            <h2 class="card-title">Current Projects:</h2>
            <div class="space-y-4">
                <div>
                    <h3 class="font-bold">Flux Protocol</h3>
                    <p>A New start of POW blockchains bringing back full decentralization to EVM chains, including ethash, light clients, and chain customization</p>
                    <!-- <a href="https://github.com/" target="_blank" class="link link-secondary cursor-not-allowed pointer-events-none">View on GitHub</a> -->
                </div>
                <div>
                    <h3 class="font-bold">Containerized Development Environments</h3>
                    <p>Development containers for containerized development. This project aims to provide an optimized and efficient environment for software development by utilizing containerization technologies such as Docker and Kubernetes. It streamlines the setup and configuration process, enabling developers to quickly start coding without worrying about dependencies and environment inconsistencies.</p>
                    <!-- <a href="https://github.com/" target="_blank" class="link link-secondary cursor-not-allowed pointer-events-none">View on GitHub</a> -->
                </div>
                <div>
                    <h3 class="font-bold">New EVM compatible efficiency standards</h3>
                    <p>The efficiency standard is an enhanced version of the standard contracts with a focus on gas savings. The project aims to optimize the gas costs associated with token transfers, approvals, and other functionalities. By implementing gas-efficient mechanisms and leveraging the latest advancements in smart contract development, the efficience standard reduces the transaction costs and makes tokens more accessible and cost-effective for users and developers.</p>
                    <!-- <a href="https://github.com/" target="_blank" class="link link-secondary cursor-not-allowed pointer-events-none">View on GitHub</a> -->
                </div>
            </div>
        </div>
    </div>

    <!-- Skills Section -->
    <div id="skills" class="card shadow-lg compact bg-base-100">
        <div class="card-body">
            <h2 class="card-title">Skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Blockchain -->
                <div class="mockup-browser border border-primary bg-base-300">
                    <div class="mockup-browser-toolbar">
                        <div class="title text-primary">Blockchain</div>
                    </div>
                    <div class="mockup-browser-content p-4">
                        <pre data-prefix="> " class="text-success"><code>Ethereum</code></pre>
                        <pre data-prefix="> "><code>ARweave</code></pre>
                        <pre data-prefix="> "><code>Hardhat</code></pre>
                        <pre data-prefix="> "><code>Geth</code></pre>
                    </div>
                </div>
                <!-- Cloud DevOps -->
                <div class="mockup-browser border border-primary bg-base-300">
                    <div class="mockup-browser-toolbar">
                        <div class="title text-primary">Cloud DevOps</div>
                    </div>
                    <div class="mockup-browser-content p-4">
                        <pre data-prefix="> "><code>AWS</code></pre>
                        <pre data-prefix="> " class="text-success"><code>OpenTofu</code></pre>
                        <pre data-prefix="> "><code>Prism</code></pre>
                        <pre data-prefix="> "><code>Ansible</code></pre>
                    </div>
                </div>
                <!-- Programming Languages -->
                <div class="mockup-browser border border-primary bg-base-300">
                    <div class="mockup-browser-toolbar">
                        <div class="title text-primary">Languages</div>
                    </div>
                    <div class="mockup-browser-content p-4">
                        <pre data-prefix="> " class="text-success"><code>Solidity</code></pre>
                        <pre data-prefix="> "><code>Python</code></pre>
                        <pre data-prefix="> "><code>JavaScript</code></pre>
                        <pre data-prefix="> "><code>Go</code></pre>
                        <pre data-prefix="> "><code>Rust</code></pre>
                    </div>
                </div>
                <!-- Tools and Technologies -->
                <div class="mockup-browser border border-primary bg-base-300">
                    <div class="mockup-browser-toolbar">
                        <div class="title text-primary">Favorite Tooling</div>
                    </div>
                    <div class="mockup-browser-content p-4">
                        <pre data-prefix="> "><code>Docker</code></pre>
                        <pre data-prefix="> " class="text-info"><code>NIX</code></pre>
                        <pre data-prefix="> "><code>SvelteKit</code></pre>
                        <pre data-prefix="> "><code>Mullvad VPN</code></pre>
                        <pre data-prefix="> "><code>Kagi</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Me Section -->
    <div id="contact" class="card shadow-lg compact bg-base-100 flex flex-col">
        <div class="card-body">
            <h2 class="card-title">Contact Me</h2>
            <div class="flex flex-col space-y-4">
                <a href="https://github.com/0xkyran" class="link link-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .5C5.798.5.5 5.798.5 12c0 5.085 3.292 9.384 7.857 10.882.574.105.785-.249.785-.556v-2.063c-3.188.698-3.855-1.539-3.855-1.539-.524-1.342-1.281-1.698-1.281-1.698-1.046-.715.08-.7.08-.7 1.156.08 1.764 1.184 1.764 1.184 1.028 1.762 2.697 1.253 3.354.959.105-.744.402-1.253.73-1.54-2.544-.287-5.218-1.273-5.218-5.662 0-1.25.445-2.27 1.172-3.07-.117-.287-.51-1.439.11-2.998 0 0 .96-.307 3.147 1.18a10.956 10.956 0 0 1 2.872-.385c.973.004 1.952.131 2.872.385 2.187-1.487 3.147-1.18 3.147-1.18.622 1.559.228 2.711.112 2.998.729.8 1.172 1.82 1.172 3.07 0 4.399-2.679 5.373-5.23 5.656.412.355.779 1.052.779 2.123v3.142c0 .311.208.665.789.555C20.213 21.384 23.5 17.085 23.5 12c0-6.202-5.298-11.5-11.5-11.5z"/>
                    </svg>
                    GitHub - 0xkyran
                </a>
                <a href="https://x.com/0xkyran" class="link link-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                    X - 0xkyran
                </a>
                <a href="mailto:mail@0xkyran.dev" class="link link-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                    </svg>
                    mail@0xkyran.dev
                </a>
                <a href="https://discord.gg/QCX48YHE8D" class="link link-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                    </svg>
                    Discord - 0xKyran's Coding Den
                </a>
            </div>
        </div>
    </div>
</main>
  
<style>
main {
    max-width: 1000px;
    margin: auto;
}

.link svg {
    display: inline-block;
    margin-right: 0.5rem;
}

.mockup-browser .title {
    padding-left: 1rem;
}

</style>
