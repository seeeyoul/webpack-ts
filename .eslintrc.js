module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,    // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true,    // Allows for the parsing of JSX
		},
	},
	settings: {
		react: {
			version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
		}
	},
	env: {            // 指定代码的运行环境
		browser: true,  // env环境变量配置，形如console属性只有在browser环境下才会存在，如果没有设置支持browser，那么可能报console is undefined的错误。
		node: true,
	},
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		quotes: ['error', 'single'],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-this-alias': 'off',
		'react/prop-types': 'off',
		'react/display-name': 'off',
		// 'react/jsx-uses-react': 'off',
		// 'react/react-in-jsx-scope': 'off'
	},
};
