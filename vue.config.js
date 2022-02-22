module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/style/main.scss";
        `,
      },
    },
  },
  transpileDependencies: true,
};
