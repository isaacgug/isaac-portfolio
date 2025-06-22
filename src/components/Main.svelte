<script>
    import Step from "./Step.svelte";

    let steps = [
        {name: 'Coding Projects', icon: 'fa-solid fa-code', href: "https://github.com/IsaacGug"},
        {name: 'Videos', icon: 'fa-solid fa-video', href: "https://www.youtube.com/playlist?list=PLBvt9A1viBNKcCe3n6sJACcLUt_lRyzDv"},
        {name: 'Blog', icon: 'fa-solid fa-blog', href: "/blog"}
    ]

    let benefits = [
        {name: 'Networking Software Engineer', description: 'I have been working for the last 3.5 years as a Networks focused Software Engineer developing and maintaining a large scale Networking project for Boeing. At Boeing I have gained skills in Python development and best practices, virtualisation utilising QEMU and libvirt and also utilising and integrating our own software stacks with CISCO. I have just recently transitioned to a role at the startup HaastAI where I am working as a fullstack software engineer on their cutting edge AI and marketing compliance web application.'},
        {name: '', description: ''},
        {name: '', description: ''}
    ]
</script>
<scipt>

</scipt>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Howdy! 🤠 I'm <span class="poppins text-yellow-400">Isaac</span> Guglielmin <br/>Fullstack
                <span class="poppins text-yellow-400">Software Engineer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My main experience in Software Engineering is in Python based Networking but I'm always trying to learn new things.
                My current utilised <span class="poppins text-yellow-400">tech stack</span> includes Python,
                FRR, JavaScript (SvelteKit), TailwindCSS and AWS!
            </p>
            <p class="text-base sm:text-lg md:text-xl">
                Follow along with me and my journey of trying to be a little bit better each day!
            </p>
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
                Curious to <span class="poppins text-yellow-400">see</span> my work?
            </h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}> 
                <p>Link to my current programming projects and previously completed ones. These projects utilise the following tech stacks.
                <strong class="text-yellow-400">Python, JavaScript (SvelteKit), TailwindCSS and AWS</strong>
                </p>
            </Step>
            <Step step={steps[1]}> 
                <p>Link to my YouTube channel where you can watch me absolutely blitz Elden Ring RL1 Zweihander only.
                <strong class="text-yellow-400">110 hours to finish the base game...</strong>
                </p>
            </Step>
            <Step step={steps[2]}> 
                <p>Link to my blog where I write about things I find interesting! Normally related to tech but I sometimes dabble in other mediums. Article in progress: 
                <strong class="text-yellow-400">Refinding the Fun in Learning</strong>
                </p>
            </Step>
        </div>
    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relattive">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0
        before:w-2/3 before:h-1.5 before:bg-yellow-700 after:absolute after:bottom-0 after:right-0
        after:w-2/3 after:h-1.5 after:bg-yellow-700 py-4">
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-yellow-400">about</span> me.</h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                        0{index+1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</main>