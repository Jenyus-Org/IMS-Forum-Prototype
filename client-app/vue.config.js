module.exports = {
  configureWebpack: {
    node: {
      fs: "empty",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loaders: ["unlazy"],
          include: /node_modules\/markdown-toc/,
        },
      ],
    },
  },
};
