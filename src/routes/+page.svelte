<script>
    import herodesktop from '$lib/images/image-hero-desktop.png';
    import databiz from '$lib/images/client-databiz.svg';
    import audiophile from '$lib/images/client-audiophile.svg';
    import meet from '$lib/images/client-meet.svg';
    import maker from '$lib/images/client-maker.svg';
    import mobile from '$lib/images/image-hero-mobile.png';
</script>
<div class="flex flex-col-reverse  md:px-32 md:flex-row">
    <div class="self-end mt-20 text-center md:text-left">
        <h1 class="font-bold text-5xl  text-center md:text-left md:font-bold md:text-7xl">Make remote work</h1>
        <p class="md:my-14 my-8 font-semibold text-gray-500">Get your team in sync, no matter your location. Streamline processes, create team rituals and watch productivity soar.</p>
        <button class=" py-2.5 px-5 text-sm font-medium text-white bg-black rounded-lg focus:outline-none border border-gray-500 hover:bg-white hover:text-black">
            Learn more
        </button>
        <div class="flex my-16 md:gap-9 md:mt-24 justify-between">
           <div class="my-auto">
            <img src={databiz} alt="databiz" class="w-32 h-5">
           </div>
            <div >
                <img src={audiophile} alt="databiz" class="w-20 h-8">
            </div>
            <div class="my-auto">
                <img src={meet} alt="databiz" class="w-20 h-6">
            </div>
            <div class="my-auto">
                <img src={maker} alt="databiz" class="w-24 h-6">
            </div>
        </div>
    </div>
    <div class="hidden md:block">
        <img src={herodesktop} alt="herodesktop" class="h-1/2 w-full md:w-3/4 md:h-full md:ml-auto  ">
    </div>
    <div class="md:hidden">
        <img src={mobile}  alt="mobile" class="w-full">
    </div>

</div>