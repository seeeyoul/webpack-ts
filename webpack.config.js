const path = require("path");

module.exports = {
    entry: "./src/router.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {},
    plugins: []
};


