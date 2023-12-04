import { c as create_ssr_component, f as add_attribute } from "../../chunks/ssr.js";
const herodesktop = "/_app/immutable/assets/image-hero-desktop.3bda6511.png";
const databiz = "/_app/immutable/assets/client-databiz.3098feb2.svg";
const audiophile = "/_app/immutable/assets/client-audiophile.cdc1075f.svg";
const meet = "/_app/immutable/assets/client-meet.1cf19dba.svg";
const maker = "/_app/immutable/assets/client-maker.a770212d.svg";
const mobile = "/_app/immutable/assets/image-hero-mobile.b9d32923.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col-reverse md:px-32 md:flex-row" data-svelte-h="svelte-oar52t"><div class="self-end mt-20 text-center md:text-left"><h1 class="font-bold text-5xl text-center md:text-left md:font-bold md:text-7xl">Make remote work</h1> <p class="md:my-14 my-8 font-semibold text-gray-500">Get your team in sync, no matter your location. Streamline processes, create team rituals and watch productivity soar.</p> <button class="py-2.5 px-5 text-sm font-medium text-white bg-black rounded-lg focus:outline-none border border-gray-500 hover:bg-white hover:text-black">Learn more</button> <div class="flex my-16 md:gap-9 md:mt-24 justify-between"><div class="my-auto"><img${add_attribute("src", databiz, 0)} alt="databiz" class="w-32 h-5"></div> <div><img${add_attribute("src", audiophile, 0)} alt="databiz" class="w-20 h-8"></div> <div class="my-auto"><img${add_attribute("src", meet, 0)} alt="databiz" class="w-20 h-6"></div> <div class="my-auto"><img${add_attribute("src", maker, 0)} alt="databiz" class="w-24 h-6"></div></div></div> <div class="hidden md:block"><img${add_attribute("src", herodesktop, 0)} alt="herodesktop" class="h-1/2 w-full md:w-3/4 md:h-full md:ml-auto "></div> <div class="md:hidden"><img${add_attribute("src", mobile, 0)} alt="mobile" class="w-full"></div></div>`;
});
export {
  Page as default
};
