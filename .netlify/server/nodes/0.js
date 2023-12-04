

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.1814cf0c.js","_app/immutable/chunks/scheduler.54a51248.js","_app/immutable/chunks/index.0dd264ee.js","_app/immutable/chunks/index.174082ab.js"];
export const stylesheets = ["_app/immutable/assets/0.36c18d17.css"];
export const fonts = [];
