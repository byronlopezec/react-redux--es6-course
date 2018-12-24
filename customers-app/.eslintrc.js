module.exports = {
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parser: "babel-eslint",
	plugins: ["react"],
	env: {
		node: true,
		browser: true,
		es6: true
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	rules: {
		indent: ["error", "tab", { SwitchCase: 1 }],
		semi: ["error", "always"],
		quotes: ["error", "double"],
		"comma-dangle": ["error", "never"],
		"jsx-quotes": ["error", "prefer-double"],
		"no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
		"max-len": [
			"error",
			{
				code: 120,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true
			}
		]
	}
};
