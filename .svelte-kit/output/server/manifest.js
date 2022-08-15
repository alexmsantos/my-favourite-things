export const manifest = {
	appDir: "_app",
	assets: new Set(["background.jpeg","favicon.png"]),
	_: {
		mime: {".jpeg":"image/jpeg",".png":"image/png"},
		entry: {"file":"start-8a35801a.js","js":["start-8a35801a.js","chunks/vendor-e6b85d0a.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: () => import('./entries/endpoints/index.ts.js'),
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/sitemap\.xml$/,
				params: null,
				load: () => import('./entries/endpoints/sitemap.xml.ts.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/rss\.xml$/,
				params: null,
				load: () => import('./entries/endpoints/rss.xml.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				shadow: () => import('./entries/endpoints/blog/_slug_.ts.js'),
				a: [0,4],
				b: [1]
			}
		]
	}
};
