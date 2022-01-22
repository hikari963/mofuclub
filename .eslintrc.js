//const path = require("path");

module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: false,
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    plugins: ["react", "@typescript-eslint", "jsx-a11y", "prettier"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
};
