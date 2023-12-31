import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.46587ef0.js","app":"_app/immutable/entry/app.984b5155.js","imports":["_app/immutable/entry/start.46587ef0.js","_app/immutable/chunks/scheduler.54a51248.js","_app/immutable/chunks/singletons.73fa0539.js","_app/immutable/chunks/index.174082ab.js","_app/immutable/entry/app.984b5155.js","_app/immutable/chunks/scheduler.54a51248.js","_app/immutable/chunks/index.0dd264ee.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
