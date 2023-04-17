module.exports = {
	"preset": "react-native",
	"collectCoverage": false,
	"testEnvironment": "jsdom",
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json','node','svg'],
	transformIgnorePatterns: [
        "node_modules/(?!(@react-native|react-native"
        + ")/)",
    ],
	"moduleDirectories": [
		"node_modules",
		"src"
	],
	"moduleNameMapper": {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|esm)$": "<rootDir>/jest/__mock__/fileMock.js"
	},
	"coveragePathIgnorePatterns": [
		"<rootDir>/jest/setup.js",
		"<rootDir>/jest/fileMock.js"
	],
	"modulePathIgnorePatterns": [
		"<rootDir>/jest/setup.js",
		"<rootDir>/jest/fileMock.js"
	],
	"globals": {
		"navigator": {},
		"window": {// whatever you need, put here manually.
		},
	},
	"testPathIgnorePatterns": [
		"/node_modules/"
	],
	"testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$"

}
