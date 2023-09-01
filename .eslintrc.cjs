/* eslint-env node */
module.exports = {
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"], // recommended plugin and eslint version that eslint recommends
	parser: "@typescript-eslint/parser", // by default eslint doesn't have rules for TS but only JS so this parser converts TS to JS so that eslint can run
	plugins: ["@typescript-eslint"], // helps enforce rules apart from the inbuilt eslint rules
	root: true, // tells eslint that this file's location
	rules: {
		"@typescript-eslint/no-unused-vars": 2, // disabling it will not give unused variable error
	},
};
