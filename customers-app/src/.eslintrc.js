module.exports = {
	env: {
		browser: true,
		commonjs: false,
		es6: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react', 'prettier'],
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['warn', 'single'],
		semi: ['error', 'always']
	}
};
