<script>
    import herodesktop from '$lib/images/image-hero-desktop.png';
    import databiz from '$lib/images/client-databiz.svg';
    import audiophile from '$lib/images/client-audiophile.svg';
    import meet from '$lib/images/client-meet.svg';
    import maker from '$lib/images/client-maker.svg';
    import mobile from '$lib/images/image-hero-mobile.png';
</script>
<div class="flex flex-col-reverse md:px-10 md:my-32 xl:px-32 lg:px-16 lg:mt-16 md:flex-row bg-almost-white">
    <div class="self-end  mt-16 text-center md:text-left ">
        <h1 class="font-bold text-5xl  text-center md:text-left md:font-bold xl:text-7xl lg:text-6xl md:text-5xl">Make <br>remote work</h1>
        <p class="xl:my-14 md:my-9 my-8 text-lg font-semibold text-gray-500">Get your team in sync, no matter your location.  Streamline processes, create team rituals and watch productivity soar.</p>
        <button class=" py-4 px-7 text-sm font-medium text-white bg-black rounded-lg focus:outline-none border border-gray-500 hover:bg-white lg:hover:bg-white transition ease-out delay-100 duration-150 hover:text-black">
            Learn more
        </button>
        <div class="flex mt-16 md:gap-7 lg:me-24 xl:mt-24 lg:mt-16 md:mt-8 justify-between">
           <div class="my-auto">
            <img src={databiz} alt="databiz" class="w-30 h-5 ">
           </div>
            <div >
                <img src={audiophile} alt="databiz" class="w-18 h-8">
            </div>
            <div class="my-auto">
                <img src={meet} alt="databiz" class="w-20 h-5">
            </div>
            <div class="my-auto">
                <img src={maker} alt="databiz" class="w-24 h-6">
            </div>
        </div>
    </div>
    <div class="hidden md:block ">
        <img src={herodesktop} alt="herodesktop" class="h-1/2 w-full lg:h-full  lg:w-5/6 lg:object-contain lg:ml-auto md:object-contain md:h-full md:w-5/6 md:ml-auto">
    </div>
    <div class="md:hidden">
        <img src={mobile}  alt="mobile" class="w-full">
    </div>

</div>