<script>
    import Step from "./Step.svelte";

    let steps = [
        {name: 'Coding Projects', icon: 'fa-solid fa-code'},
        {name: 'Videos', icon: 'fa-solid fa-video'},
        {name: 'Art', icon: 'fa-solid fa-palette'}
    ]
</script>
<scipt>

</scipt>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Isaac</span> Guglielmin. <br/>Networking
                <span class="poppins text-violet-400">Software Engineer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                I am a fulltime Software Engineer who develops large scale Linux based Networking products. 
                My current utilised <span class="poppins text-violet-400">tech stack</span> includes Python,
                FRR, and Cisco. I am currently expanding my knowledge in JavaScript 
                (SvelteKit), TailwindCSS and AWS!
            </p>
            <a class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden
             px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" href="https://www.linkedin.com/in/isaac-guglielmin/" target="_blank">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 
                    group-hover:translate-x-full z-0 duration-200">
                </div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img src={"../images/profile.png"} alt="Profile image" class="object-cover z-[2] max-h-[70vh]"/>
        </div>
    </section>
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creative endeavours.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violet-400">see</span> my work?

            </h3>
        </div>
        <a
            href="#"
            target="_blank"
            class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200">
            <i class="fa-regular fa-circle-play"/>
            <p>See here!</p>
        </a>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}> 

            </Step>
            <Step step={steps[1]}> 

            </Step>
            <Step step={steps[2]}> 

            </Step>
        </div>
    </section>
</main>