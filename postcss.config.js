const purgecss = require('@fullhuman/postcss-purgecss');

const plugins = ['postcss-import', 'tailwindcss', 'autoprefixer'];

if (process.env.NODE_ENV === 'production') {
	plugins.push([
		'@fullhuman/postcss-purgecss',
		{
			content: ['./components/**/*.tsx', './pages/**/*.tsx'],
			defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		},
	]);
}

module.exports = {
	plugins,
};
