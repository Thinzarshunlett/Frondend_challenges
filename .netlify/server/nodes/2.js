

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.aeb8b627.js","_app/immutable/chunks/scheduler.54a51248.js","_app/immutable/chunks/index.0dd264ee.js"];
export const stylesheets = [];
export const fonts = [];
