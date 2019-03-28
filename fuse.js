const { FuseBox, QuantumPlugin } = require('fuse-box');

/*
 * I commented to options so you could get an idea of what options I normally use.
 * The ones I left are a minimal replicating sample.
 */

const fuse = FuseBox.init({
	homeDir: './',
	target: 'npm', // what I used for react libs
	// target: 'server@esnext', // also not working out
	output: 'dist/$name.js',
	globals: { default: '*' },
	// cache: false,
	// sourceMaps: { inline: false, vendor: false },
	natives: false,
	package: 'wavy-carrot',
	tsConfig: './tsconfig.json',
	plugins: [
		QuantumPlugin({
			bakeApiIntoBundle: 'es6',
			containedAPI: true,
			// globalRequire: false // has no effect on output,
			// uglify: {
			// 	compress: {
			// 		warnings: true,
			// 		drop_console: true
			// 	}
			// }
		})
	]
});

const instructions = fuse.bundle('es6').instructions('> index.ts');

fuse.run();
