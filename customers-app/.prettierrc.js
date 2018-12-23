// Consult more rules https://prettier.io/docs/en/options.html
module.exports = {
	trailingComma: "none",
	tabWidth: 4,
	useTabs: true,
	semi: true,
	jsxSingleQuote: false,
	singleQuote: false,
	printWidth: 120,
	bracketSpacing: true,
	jsxBracketSameLine: false,
	arrowParens: "always", //"<avoid|always>"
	parser: "babylon",
	proseWrap: "preserve", //"<always|never|preserve>"
	htmlWhitespaceSensitivity: "ignore" //'<css|strict|ignore>',
};
