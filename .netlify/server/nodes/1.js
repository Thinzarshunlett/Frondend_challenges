

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5b0962ef.js","_app/immutable/chunks/scheduler.54a51248.js","_app/immutable/chunks/index.0dd264ee.js","_app/immutable/chunks/singletons.73fa0539.js","_app/immutable/chunks/index.174082ab.js"];
export const stylesheets = [];
export const fonts = [];
