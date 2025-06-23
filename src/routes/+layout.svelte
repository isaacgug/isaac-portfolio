<script>
    import "../app.css";
    import { afterNavigate } from '$app/navigation';
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";

    let y;
    let innerHeight = 0;
    let innerWidth = 0;

    function goTop() {
        document.body.scrollIntoView();
    }

    afterNavigate((nav) => {
    // Only scroll to top if navigating to "/" with no hash
    if (
        nav.to?.url.pathname === '/' &&
        (!nav.to.url.hash || nav.to.url.hash === '#top')
    ) {
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }, 0);
    }
});
</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm
sm:text-base min-h-screen">
    <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + (
        y > 0 ? ' opacity-full pointer-events-auto ' : ' pointer-events-none opacity-0'
    )}>
        <button on:click={goTop} class="ml-auto rounded-full aspect-square bg-slate-900
        text-yellow-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer ">
            <i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i>
        </button>
    </div>
    <Header y={y}/>
    <div class="flex-1 flex flex-col">
        <slot />
    </div>
    <Footer/>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth></svelte:window>